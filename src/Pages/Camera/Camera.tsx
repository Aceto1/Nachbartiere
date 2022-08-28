import { useAuth0 } from "@auth0/auth0-react";
import { FormControl, FormLabel, Input, FormHelperText, Button, Heading, Select, InputRightElement, Icon, InputGroup, useToast, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import * as React from "react";
import { MdLocationPin } from "react-icons/md";
import Webcam from "react-webcam";
import { getTextForAchievement, getTitleForAchievement } from "../../helper/AchievementTextHelper";
import Achievement from "../../types/Achievement";
import AddSightingArgument from "../../types/AddSightingArgument";
import AnimalKind from "../../types/AnimalKind";

import styles from './Camera.module.css';

const Camera: React.FC = () => {
  const [screenshot, setScreenshot] = React.useState<any>(undefined);
  const [selectedCameraId, setSelectedCameraId] = React.useState<string | undefined>(undefined);
  const [animal, setAnimal] = React.useState<AnimalKind | undefined>(undefined);
  const [location, setLocation] = React.useState<string>("");
  const [isLocationLoading, setIsLocationLoading] = React.useState(false);
  const [count, setCount] = React.useState<number>(1);
  const [memo, setMemo] = React.useState<string>("");
  const [newAchievements, setNewAchievements] = React.useState<Achievement[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSavingLoading, setIsSavingLoading] = React.useState(false);

  const { user, getAccessTokenSilently } = useAuth0();
  const toast = useToast();

  const webcamRef = React.useRef(null);
  const cameraIds = []

  const changeCamera = () => {

  }

  const reset = () => {
    setScreenshot(undefined);
    setIsSavingLoading(false);
    setAnimal(undefined);
    setCount(1);
    setIsLocationLoading(false);
    setMemo("");
    setLocation("");
    setNewAchievements([]);
  }

  const takeScreenshot = React.useCallback(
    () => {
      setScreenshot((webcamRef!.current as any).getScreenshot());
    },
    [webcamRef]
  );

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      setIsLocationLoading(true);
      navigator.geolocation.getCurrentPosition(location => {
        setLocation(`${location.coords.latitude},${location.coords.longitude}`);
        setIsLocationLoading(false);
      });
    }
  }

  const discard = () => {
    reset();
  }

  const save = async () => {
    setIsSavingLoading(true);

    const token = await getAccessTokenSilently();

    const addSightingArgument: AddSightingArgument = {
      count: count,
      animalKind: animal ?? 0,
      createdBy: user?.sub ?? "",
      description: memo,
      location: location,
      picture: screenshot
    }

    const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}Sightings/add`, {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(addSightingArgument),
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    if (!result.ok) {
      toast({
        title: 'Senden fehlgeschlagen',
        description: "Probieren Sie es später noch einmal.",
        status: 'error',
        duration: 2500,
        isClosable: true,
      });

      setIsSavingLoading(false);
    } else {
      toast({
        position: 'top',
        title: 'Senden erfolgreich!',
        status: 'success',
        duration: 2500,
        isClosable: true,
      });

      const newAchievements: Achievement[] = await result.json();

      if (newAchievements.length > 0) {
        setNewAchievements(newAchievements);
        onOpen();
      }
      else
        reset();
    }
  }

  const onDialogClose = () => {
    reset();
    onClose();
  }

  if (screenshot == null)
    return (
      <div className={styles.container}>
        <Webcam
          audio={false}
          height={window.innerHeight}
          screenshotFormat="image/jpeg"
          width={window.innerWidth}
          ref={webcamRef}
          videoConstraints={{
            facingMode: 'environment',
            deviceId: selectedCameraId
          }}
          style={{
            height: '100%',
            maxWidth: '100%',
          }}
        />
        <button className={styles.captureButton} onClick={takeScreenshot} />
      </div>
    );
  else
    return (
      <form className={styles.saveForm}>
        <Modal isOpen={isOpen} onClose={onDialogClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{newAchievements.length > 1 ? "Neue Achievements!": "Neues Achievement!"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {newAchievements.map(m => (
                <>
                  <Heading as="h2">{getTitleForAchievement(m)}</Heading>
                  <p>{getTextForAchievement(m)}</p>
                </>
              ))}
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onDialogClose}>
                Cool
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Heading as='h1'>Dein Schnappschuss</Heading>

        <img src={screenshot} alt='captured'></img>

        <FormControl>
          <FormLabel htmlFor='animal'>Welches Tier hast du gesehen?</FormLabel>
          <Select id='animal' placeholder='Wähle eine Tierart aus...' value={animal} onChange={event => setAnimal(Number.parseInt(event.target.value))}>
            {Object.keys(AnimalKind).filter(item => isNaN(Number(item))).map((animalKind, i) =>
              <option key={i} value={i}>{animalKind}</option>
            )}
          </Select>
          {animal === 0 &&
            <FormHelperText>Schreibe in die Bemerkung, um welches Tier es sich handelt.</FormHelperText>
          }
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='count'>Wieviele Tiere hast du gesehen?</FormLabel>
          <Input id='count' type='number' value={count} onChange={event => setCount(Number.parseInt(event.target.value))} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='location'>Wo hast du das Foto geschossen?</FormLabel>
          <InputGroup size='md'>
            <Input id='location' type='text' value={location} onChange={event => setLocation(event.target.value)} />
            <InputRightElement>
              <Button isLoading={isLocationLoading} size='sm' width='1em' colorScheme='green' onClick={useCurrentLocation}>
                <Icon as={MdLocationPin} />
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>Benutze den Button rechts, um deinen aktuellen Standort einzufügen oder beschreibe deine Position.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='memo'>Bemerkung</FormLabel>
          <Input id='memo' type='text' value={memo} onChange={event => setMemo(event.target.value)} />
          <FormHelperText>Weitere Infos? Schreib's einfach dazu.</FormHelperText>
        </FormControl>

        <div>
          <Button colorScheme='green' margin='1em' onClick={save} disabled={animal == null || location.trim() === "" || (animal === AnimalKind["Nicht in der Liste"] && memo === "")} isLoading={isSavingLoading}>Speichern</Button>
          <Button colorScheme='gray' margin='1em' onClick={discard}>Verwerfen</Button>
        </div>
      </form>
    );
}

export default Camera;