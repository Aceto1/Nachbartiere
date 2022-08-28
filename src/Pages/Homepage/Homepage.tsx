import { useAuth0 } from "@auth0/auth0-react";
import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Achievement from "../../Components/Achievement/Achievement";
import RecentSighting from "../../Components/RecentSighting/RecentSighting";
import AchievementType from "../../types/Achievement";
import AchievementDto from "../../types/AchievementDto";
import Sighting from "../../types/Sighting";

import styles from './Homepage.module.css';

const Homepage: React.FC = () => {
  const [recentSightings, setRecentSightings] = useState<Sighting[]>(new Array<Sighting>());
  const [recentAchievements, setRecentAchievements] = useState<AchievementDto[]>(new Array<AchievementDto>());

  const { user, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const loadRecentSightings = async (userId: string) => {
    const token = await getAccessTokenSilently();

    const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}Sightings/recent/${userId}`, {
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

  const loadRecentAchievements = async (userId: string) => {
    const token = await getAccessTokenSilently();

    const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}Achievement/recent/${userId}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    if (result.ok) {
      const json = await result.json();

      setRecentAchievements(json);
    }
  };

  const onSightingClick = (id: number) => {
    navigate("/sighting/" + id);
  }

  useEffect(() => {
    if (user == null || user.sub == null)
      return;

    loadRecentSightings(user.sub);
    loadRecentAchievements(user.sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className={styles.container}>
      <Heading as="h1" fontSize="2em">Home</Heading>
      <p>Deine letzen Sichtungen:</p>
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
      {user && user.TestGroup === 1 &&
        <>
          <p>Deine letzten Achievements:</p>
          {recentAchievements?.map(achievement => (
            <Achievement
              key={achievement.achievementKind}
              achievement={achievement.achievementKind}
              unlocked={true}
            />
          ))}
        </>
      }
    </div>
  );
}

export default Homepage;