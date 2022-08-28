import { FC } from "react";
import { ArrowBackIcon } from '@chakra-ui/icons'


import styles from './Privacy.module.css';
import { Heading, IconButton } from "@chakra-ui/react";

const Privacy: FC = () => {
  return (
    <div className={styles.container}>
      <IconButton
        variant='outline'
        borderRadius="50%"
        size='lg'
        icon={<ArrowBackIcon />}
        onClick={() => window.history.back()}
        aria-label="Back" />
      <br />
      <br />
      <Heading as="h1">Datenschutzerklärung</Heading>
      <p>
        Verantwortlicher für Datenschutzbestimmungen ist:
        <br />
        Lucas Schumacher
        <br />
        Camburger Str. 54
        <br />
        07743 Jena
      </p>

      <Heading as="h2">1. Begriffsbestimmungen</Heading>

      <p>
        Unsere Datenschutzerklärung beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere Nutzer einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.
      </p>

      <p>
        Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:
      </p>

      <p>
        a) Wer sind "wir"?
        <br />
        Wir sind eine Gruppe von Studierenden der Friedrich Schiller Universität Jena, welche im Rahmen einer Wissenschaftlichen Arbeit, manuell oder mittels automatisierter Verfahren die erhobenen (personenbezogenen) Daten verarbeiten.
      </p>

      <p>
        b) Was sind "personenbezogene Daten"?
        <br />
        Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer E-Mail Adresse, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.
      </p>

      <p>
        c) Wer sind "betroffene Person"?
        <br />
        Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von uns verarbeitet werden.
      </p>

      <p>
        d) Was ist "Verarbeitung"?
        <br />
        Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
      </p>

      <p>
        e) Was ist "Anonymisierung"?
        <br />
        Anonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.
      </p>

      <p>
        f) Was ist eine "Verantwortliche oder für die Verarbeitung Verantwortliche Person"?
        <br />
        Verantwortliche oder für die Verarbeitung Verantwortliche Person ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
      </p>

      <p>
        g) Wer sind "Dritte"?
        <br />
        Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.
      </p>

      <p>
        h) Was ist "Einwilligung"?
        <br />
        Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
      </p>

      <Heading as="h2">2. Erhebung von Personenbezogenen Daten</Heading>
      <p>
        a) Accountdaten
        <br />
        Zur Identifikation von Benutzern, sowie Zuordnung und Bereitstellung derer Daten speichern wir Account Informationen. Diese umfassen die E-Mail Adresse der betroffenen Person, ein selbst gewähltes Passwort und ein frei wählbarer Benutzername. Diese Informationen werden im Rahmen der Registierung erhoben und bei uns gespeichert.
      </p>

      <p>
        b) Von Benutzern erstellte Daten
        <br />
        Daten, welche in unserer App eingetragen und abgesendet werden, werden bei uns zur Bereitstellung unseres Dienstes gespeichert.
      </p>

      <p>
        c) Nutzungsstatistiken
        <br />
        Während der Nutzung übermittelt unsere App Zeitstempel (Datum und Uhrzeit), zu welchem Zeitpunkt und wie lange sie genutzt wird.

        Die erhobenen Daten werden mit den Benutzern verknüpft, um die Anmeldung zu ermöglichen und um den Benutzern die von ihenen erstellten Einträge anzuzeigen. Weiterhin werden die Nutzungsstatistiken anonymisiert um sie im Rahmen einer wissenschaftlichen Facharbeit auszuwerten.
      </p>

      <Heading as="h2">4. Veröffentlichung der Informationen</Heading>
      <p>
        Wir behalten uns vor, die anonymisierten und zusammengefassten Gesamtstatistiken (der Nutzungsdaten) im Rahemen unserer wissenschaftlichen Facharbeit zu veröffentlichen. Ohne die Einwilligung der betroffenen Personen werden keine weiteren Daten veröffentlicht.
      </p>

      <Heading as="h2">5. Löschung der Daten</Heading>
      <p>
        Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden wir die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften löschen.
      </p>

      <Heading as="h2">6. Rechte der betroffenen Personen</Heading>
      <p>
        a) Recht auf Bestätigung
        <br />
        Jede betroffene Person hat Recht, eine Bestätigung darüber zu verlangen, ob betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu an die für Verarbeitung Verantwortliche Person wenden.
      </p>

      <p>
        b) Recht auf Auskunft
        <br />
        Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, jederzeit unentgeltliche Auskunft über die zur Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten. Außerdem kann Auskunft über folgende Informationen verlangt werden:
      </p>
      <ul>
        <li>die Verarbeitungszwecke</li>
        <li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
        <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden</li>
        <li>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer</li>
        <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verfügbaren Informationen über die Herkunft der Daten</li>
      </ul>
      <p>
        Außerdem steht der betroffenen Person ein Auskunftsrecht darüber zu, ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im Übrigen das Recht zu, Auskunft über die geeigneten Garantien im Zusammenhang mit der Übermittlung zu erhalten.
        <br />
        Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu an die für Verarbeitung Verantwortliche Person wenden.
      </p>

      <p>
        c) Recht auf Berichtigung
        <br />
        Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, die unverzügliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Weiterhin steht der betroffenen Person das Recht zu, unter Berücksichtigung der Zwecke der Verarbeitung, die Vervollständigung unvollständiger personenbezogener Daten - auch mittels einer ergänzenden Erklärung - zu verlangen.
        <br />
        Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu an die für Verarbeitung Verantwortliche Person wenden.
      </p>

      <p>
        d) Recht auf Löschung (Recht auf Vergessen werden)
        <br />
        Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden.
        <br />
        Wenn eine betroffene Person die Löschung von personenbezogenen Daten, die bei uns gespeichert sind, veranlassen möchte, kann sie sich hierzu an die für Verarbeitung Verantwortliche Person wenden. Wir werden veranlassen, dass dem Löschverlangen nachgekommen wird.
      </p>

      <p>
        e) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
        <br />
        Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das  Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.
        <br />
        Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu jederzeit an die für Verarbeitung Verantwortliche Person wenden.
      </p>
    </div>
  );
}

export default Privacy;