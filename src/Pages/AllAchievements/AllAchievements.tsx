import { useAuth0 } from "@auth0/auth0-react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Heading, IconButton } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import Achievement from "../../Components/Achievement/Achievement";
import AchievementType from "../../types/Achievement";
import AchievementDto from "../../types/AchievementDto";

import styles from './AllAchievements.module.css';

const AllAchievements: FC = () => {
  const [unlockedAchievements, setUnlockedAchievements] = useState<AchievementDto[]>([]);

  const { getAccessTokenSilently, user } = useAuth0();

  const loadUnlockedAchievements = async (userId: string) => {
    const token = await getAccessTokenSilently();

    const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}Achievement/unlocked/${userId}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });

    if (result.ok) {
      const json = await result.json();

      setUnlockedAchievements(json);
    }
  };

  useEffect(() => {
    if (user == null || user.sub == null)
      return;

    loadUnlockedAchievements(user.sub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <IconButton
          variant='outline'
          borderRadius="50%"
          size='lg'
          icon={<ArrowBackIcon />}
          onClick={() => window.history.back()}
          aria-label="Back" />

        <Heading as="h1">Alle Achievements</Heading>
      </div>

      {Object.keys(AchievementType).filter(item => isNaN(Number(item))).map((key, i) =>
        <Achievement
          key={key}
          achievement={i}
          unlocked={unlockedAchievements.findIndex(m => m.achievementKind === i) !== -1}
        />
      )}

    </div>
  );
}

export default AllAchievements;
