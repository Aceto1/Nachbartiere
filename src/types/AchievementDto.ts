import Achievement from "./Achievement";

export default interface AchievementDto {
  achievementKind: Achievement;
  userId: string;
  unlockedAt: Date;
}