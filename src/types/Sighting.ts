import AnimalKind from "./AnimalKind";

export default interface Sighting {
  id: number;
  createdAt: string;
  createdBy: string;
  location: string;
  description: string;
  count: number;
  animalKind: AnimalKind;
  picture: string;
}