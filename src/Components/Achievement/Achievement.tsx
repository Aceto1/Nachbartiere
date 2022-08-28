import { StarIcon } from "@chakra-ui/icons";
import { Heading, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { getTextForAchievement, getTitleForAchievement } from "../../helper/AchievementTextHelper";
import AchievementType from "../../types/Achievement";


import styles from './Achievement.module.css';

export interface AchievementProps {
  achievement: AchievementType;
  unlocked: boolean;
}

const Achievement: FC<AchievementProps> = (props) => {
  return (
    <div className={styles.container} style={{
      borderColor: props.unlocked ? "#333" : "#999"
    }}>
      <div>
        <Icon w={6} h={6} color={props.unlocked ? "Gold" : "#999"} as={StarIcon} />
        <Heading as="h2" color={props.unlocked ? "black" : "#999"}>{getTitleForAchievement(props.achievement)}</Heading>
      </div>
      <p style={{
        color: props.unlocked ? "black" : "#999"
      }}>
        {getTextForAchievement(props.achievement)}
      </p>
    </div>
  );
}

export default Achievement;