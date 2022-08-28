import AnimalKind from "./AnimalKind";

export default interface AddSightingArgument {
  picture: string,
  count: number,
  createdBy: string,
  location: string,
  description: string,
  animalKind: AnimalKind
};