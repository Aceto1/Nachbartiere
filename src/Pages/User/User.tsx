import { useAuth0 } from "@auth0/auth0-react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Heading, Link, Spinner, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';

import styles from './User.module.css';

const User: React.FC = () => {
  const [streakLength, setStreakLength] = useState(-1);
  const [animalKindCount, setAnimalKindCount] = useState(-1);
  const [totalSightingsCount, setTotalSightingsCount] = useState(-1);

  const { user, isLoading, getAccessTokenSilently } = useAuth0();

  const getStreakLength = async (userId: string) => {
    const token = await getAccessTokenSilently();

    const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}Sightings/streakLength/${userId}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    if (result.ok)
      setStreakLength(Number.parseInt(await result.text()));
  }

  const getTotalSightingsCount = async (userId: string) => {
    const token = await getAccessTokenSilently();

    const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}Sightings/totalSightingsCount/${userId}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    if (result.ok)
      setTotalSightingsCount(Number.parseInt(await result.text()));
  }

  const getAnimalKindCount = async (userId: string) => {
    const token = await getAccessTokenSilently();

    const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}Sightings/animalKindCount/${userId}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    if (result.ok)
      setAnimalKindCount(Number.parseInt(await result.text()));
  }

  useEffect(() => {
    if (user?.sub == null)
      return;

    getStreakLength(user.sub);
    getTotalSightingsCount(user.sub);
    getAnimalKindCount(user.sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (isLoading)
    return <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      top='50%'
      left='50%'
      transform='translate(-50%, -50%)'
      position='fixed'
    />;

  return (
    <div className={styles.container}>
      <Heading>Hallo, {user?.nickname}!</Heading>
      <div className={styles.statContainer}>
        <Stat>
          <StatLabel>Bisherige Sichtungen</StatLabel>
          <StatNumber>{totalSightingsCount === -1 ? <Spinner /> : totalSightingsCount}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Verschiedene Tierarten</StatLabel>
          <StatNumber>{animalKindCount === -1 ? <Spinner /> : animalKindCount}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Serie</StatLabel>
          <StatNumber>{streakLength === -1 ? <Spinner /> : streakLength}</StatNumber>
          <StatHelpText>So viele Tage in Folge hast Du Sichtungen gemeldet!</StatHelpText>
        </Stat>
      </div>

      <Link as={RouterLink} to="/sightings">
        <Button className={styles.allButton} rightIcon={<ChevronRightIcon />}>
          Alle Sichtungen
          </Button>
      </Link>

      {user && user.TestGroup === 1 &&
        <Link as={RouterLink} to="/achievements">
          <Button className={styles.allButton} rightIcon={<ChevronRightIcon />}>
            Alle Achievements
            </Button>
        </Link>
      }

      <Link as={RouterLink} to="/logout">
        <Button colorScheme='red' marginTop="1em">
          Logout
        </Button>
      </Link>
      <Link as={RouterLink} to="/data-privacy" color='teal.500' marginTop='1em' textDecoration='underline'>
        Datenschutzerklärung
      </Link>
    </div>
  );
}

export default User;
