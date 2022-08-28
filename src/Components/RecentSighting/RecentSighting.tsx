import AnimalKind from '../../types/AnimalKind';
import styles from './RecentSighting.module.css';

interface RecentSightingProps {
  picture: string;
  animalKind: AnimalKind;
  timestamp: Date
  onClick: () => void;
}

const RecentSighting: React.FC<RecentSightingProps> = (props) => {
  const animalKind = AnimalKind[props.animalKind].toString();

  let name = animalKind.substring(0, animalKind.indexOf('('));
  let latin = animalKind.substring(animalKind.indexOf('(') + 1, animalKind.length - 1);

  if(props.animalKind === AnimalKind['Nicht in der Liste']) {
    name = 'Nicht in der Liste';
    latin = "";
  }

  return (
    <div className={styles.container} onClick={props.onClick}>
      <img src={props.picture} alt="sighting" />
      <div>
        <p>{name}</p>
        <p className={styles.latin}>{latin}</p>
        <p>{props.timestamp.toLocaleDateString()} um {props.timestamp.toLocaleTimeString().substring(0, 5)}</p>
      </div>
    </div>
  );
}

export default RecentSighting;