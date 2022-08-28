import { useAuth0 } from "@auth0/auth0-react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Heading, IconButton } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecentSighting from "../../Components/RecentSighting/RecentSighting";
import Sighting from "../../types/Sighting";

import styles from './AllSightings.module.css';

const AllSightings: FC = () => {
  const [recentSightings, setRecentSightings] = useState<Sighting[]>([]);

  const navigate = useNavigate();
  const { getAccessTokenSilently, user } = useAuth0();

  const loadAllSightings = async (userId: string) => {
    const token = await getAccessTokenSilently();

    const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}Sightings/all/${userId}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    if (result.ok) {
      const json = await result.json();

      setRecentSightings(json);
    }
  };

  const onSightingClick = (id: number) => {
    navigate("/sighting/" + id);
  }

  useEffect(() => {
    if (user == null || user.sub == null)
      return;

    loadAllSightings(user.sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className={styles.container}>
      <div>
        <IconButton
          variant='outline'
          borderRadius="50%"
          size='lg'
          icon={<ArrowBackIcon />}
          onClick={() => window.history.back()}
          aria-label="Back" />

        <Heading as="h1">Alle Sichtungen</Heading>
      </div>

      <ul>
        {recentSightings.map(recentSighting =>
          <li key={recentSighting.id}>
            <RecentSighting
              onClick={() => onSightingClick(recentSighting.id)}
              animalKind={recentSighting.animalKind}
              picture={recentSighting.picture}
              timestamp={new Date(recentSighting.createdAt)} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default AllSightings;