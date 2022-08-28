import Achievement from "../types/Achievement";

export const getTextForAchievement = (achievement: Achievement): string => {
  switch (achievement) {
    case Achievement.Lucky:
      return "Du hast 5 verschiedene Tierarten an einem Tagen gefunden";
    case Achievement.Streak3:
      return "Du hast 3 Tage in Folge Sichtungen gemeldet";
    case Achievement.Streak5:
      return "Du hast 5 Tage in Folge Sichtungen gemeldet";
    case Achievement.Streak7:
      return "Du hast 7 Tage in Folge Sichtungen gemeldet";
    case Achievement.Sightings1:
      return "Du hast deine erste Sichtung gemeldet";
    case Achievement.Sightings3:
      return "Du hast insgesamt 3 Sichtungen gemeldet";
    case Achievement.Sightings10:
      return "Du hast insgesamt 10 Sichtungen gemeldet";
    case Achievement.Sightings20:
      return "Du hast insgesamt 20 Sichtungen gemeldet";
    case Achievement.Sightings35:
      return "Du hast insgesamt 35 Sichtungen gemeldet";
    case Achievement.Sightings50:
      return "Du hast insgesamt 50 Sichtungen gemeldet";
    case Achievement.AnimalKinds2:
      return "Du hast Sichtungen von 2 verschiedenen Tierarten gemeldet";
    case Achievement.AnimalKinds5:
      return "Du hast Sichtungen von 5 verschiedenen Tierarten gemeldet";
    case Achievement.AnimalKinds10:
      return "Du hast Sichtungen von 10 verschiedenen Tierarten gemeldet";
  }
}

export const getTitleForAchievement = (achievement: Achievement): string => {
  switch (achievement) {
    case Achievement.Lucky:
      return "Glückspilz";
    case Achievement.Streak3:
      return "Serie";
    case Achievement.Streak5:
      return "Serie";
    case Achievement.Streak7:
      return "Serie";
    case Achievement.Sightings1:
      return "Tierliebhaber";
    case Achievement.Sightings3:
      return "Hobby-Zoologe";
    case Achievement.Sightings10:
      return "Bachelor der Zoologie";
    case Achievement.Sightings20:
      return "Master der Zoologie";
    case Achievement.Sightings35:
      return "Doktor der Zoologie";
    case Achievement.Sightings50:
      return "Professor der Zoologie";
    case Achievement.AnimalKinds2:
      return "Biodiversität";
    case Achievement.AnimalKinds5:
      return "Biodiversität";
    case Achievement.AnimalKinds10:
      return "Biodiversität";
  }
}