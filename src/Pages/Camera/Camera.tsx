import { FormControl, FormLabel, Input, FormHelperText, Button, Heading, Select, InputRightElement, Icon, InputGroup } from "@chakra-ui/react";
import * as React from "react";
import { MdLocationPin } from "react-icons/md";
import Webcam from "react-webcam";

import styles from './Camera.module.css';

const Camera: React.FC = () => {
  const [screenshot, setScreenshot] = React.useState<any>(undefined);
  const [animal, setAnimal] = React.useState<string | undefined>(undefined);
  const [location, setLocation] = React.useState<string | undefined>(undefined);
  const [isLocationLoading, setIsLocationLoading] = React.useState(false);
  const [count, setCount] = React.useState<number>(1);
  const [memo, setMemo] = React.useState<string | undefined>(undefined);

  const webcamRef = React.useRef(null);

  const takeScreenshot = React.useCallback(
    () => {
      setScreenshot((webcamRef!.current as any).getScreenshot());
    },
    [webcamRef]
  );

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      setIsLocationLoading(true);
      navigator.geolocation.getCurrentPosition(location =>  {
        setLocation(`${location.coords.latitude},${location.coords.longitude}`);
        setIsLocationLoading(false);
      });
    }
  }

  const discard = () => {
    setScreenshot(undefined);
  }

  const save = () => {
    //TODO
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
          videoConstraints = {{
            facingMode: 'environment'
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
        <Heading as='h1'>Dein Schnappschuss</Heading>

        <img src={screenshot} alt='captured'></img>

        <FormControl>
          <FormLabel htmlFor='animal'>Welches Tier hast du gesehen?</FormLabel>
          <Select id='animal' placeholder='Wähle eine Tierart aus...' value={animal} onChange={event => setAnimal(event.target.value)}>
            <option value='fox'>Fuchs</option>
            <option value='duck'>Ente</option>
            <option value='amsel'>Amsel</option>
            <option value='idk'>???</option>
          </Select>
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
          <Button colorScheme='green' margin='1em' onClick={save}>Speichern</Button>
          <Button colorScheme='gray' margin='1em' onClick={discard}>Verwerfen</Button>
        </div>
      </form>
    );
}

export default Camera;