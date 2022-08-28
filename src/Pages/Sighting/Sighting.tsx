import { useAuth0 } from "@auth0/auth0-react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Heading, IconButton, RangeSliderFilledTrack } from "@chakra-ui/react";
import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import SightingType from "../../types/Sighting";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

import styles from './Sighting.module.css';
import L, { LatLng } from "leaflet";
import AnimalKind from "../../types/AnimalKind";

let DefaultIcon = L.icon({
  ...L.Icon.Default.prototype.options,
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Sighting: FC = () => {
  const [sighting, setSighting] = useState<SightingType | undefined>(undefined);

  const { id } = useParams();
  const { getAccessTokenSilently } = useAuth0();

  const getSighting = useCallback(async () => {
    if (id == null)
      setSighting(undefined);

    const token = await getAccessTokenSilently();

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}Sightings/${id}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    if (response.ok) {
      setSighting(await response.json());
    }
  }, [id, getAccessTokenSilently]);

  useEffect(() => {
    getSighting();
  }, [getSighting])

  let name = "";
  let latin = "";

  if (sighting != null) {
    const animalKind = AnimalKind[sighting.animalKind].toString();

    name = animalKind.substring(0, animalKind.indexOf('('));
    latin = animalKind.substring(animalKind.indexOf('(') + 1, animalKind.length - 1);

    if (sighting.animalKind === AnimalKind['Nicht in der Liste']) {
      name = '';
      latin = 'Tierart war nicht in der Liste enthalten';
    }
  }

  const location: L.LatLngExpression = [50.92878, 11.5899];
  const regex = /^([\d.]+[\d.]*),([\d.]+[\d.]*)$/;

  if (sighting?.location != null && regex.test(sighting.location)) {
    const exec = regex.exec(sighting?.location);
    location[0] = Number.parseFloat(exec![1]);
    location[1] = Number.parseFloat(exec![2]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <IconButton
          variant='outline'
          borderRadius="50%"
          marginRight="1em"
          size='lg'
          icon={<ArrowBackIcon />}
          onClick={() => window.history.back()}
          aria-label="Back" />

        <Heading as="h1">Sichtung</Heading>
      </div>

      <div className={styles.content}>
        <img src={sighting?.picture} alt='sighting' />

        <Heading as="h2" fontSize="1.75em">{name}</Heading>
        <p className={styles.latin}>{latin}</p>

        {sighting?.description != null &&
          <>
            <Heading as="h2" fontSize="1em">Beschreibung</Heading>
            <p>{sighting?.description}</p>
          </>
        }
        {sighting?.location != null &&
          <>
            <Heading as="h3" fontSize="1.25em">Standort</Heading>
            {regex.test(sighting.location) &&
              <div className={styles.map}>
                <MapContainer center={location} zoom={13} scrollWheelZoom={false} dragging={false} doubleClickZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={location} />
                </MapContainer>
              </div>
            }
            {!regex.test(sighting.location) &&
              <p>{sighting.location}</p>
            }
          </>
        }
      </div>
    </div>
  );
}

export default Sighting;