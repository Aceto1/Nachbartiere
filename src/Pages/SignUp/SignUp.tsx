import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Heading, Input, Link, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, Link as RouterLink  } from "react-router-dom";
import UserCreateArgument from "../../types/UserCreateArgument";

import styles from './SignUp.module.css';

const SignUp: React.FC = () => {
  const [token, setToken] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [acceptPrivacyNotice, setAcceptPrivacyNotice] = useState(false);
  const [isSavingLoading, setIsSavingLoading] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const reset = () => {
    setToken("");
    setNickname("");
    setEmail("");
    setPassword("");
    setPasswordRepeat("");
    setAcceptPrivacyNotice(false);
    setIsSavingLoading(false);
  }

  const save = async () => {
    setIsSavingLoading(true);

    const arg: UserCreateArgument = {
      email: email,
      nickname: nickname,
      password: password,
      token: token,
      acceptPrivacyNotice: acceptPrivacyNotice,
    }

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}user/create`, {
      body: JSON.stringify(arg),
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      navigate("/login");
      reset();
    } else {
      setIsSavingLoading(false);
      const message = await response.text();
      toast({
        title: 'Registrierung fehlgeschlagen',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }

  const back = () => {
    navigate("/auth");
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.ellipse}></div>
        <img className={styles.bird} src='/bird.svg' alt='bird' />
      </div>
      <div className={styles.inputContainer}>
        <Heading as="h1">Registrieren</Heading>

        <FormControl>
          <FormLabel htmlFor='token'>Einladungscode</FormLabel>
          <Input id='token' type='text' value={token} onChange={event => setToken(event.target.value.toUpperCase())} maxLength={6} minLength={6} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='nickname'>Benutzername</FormLabel>
          <Input id='nickname' type='text' value={nickname} onChange={event => setNickname(event.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='email'>E-Mail Adresse</FormLabel>
          <Input id='email' type='email' value={email} onChange={event => setEmail(event.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='password'>Passwort</FormLabel>
          <Input id='password' type='password' value={password} onChange={event => setPassword(event.target.value)} minLength={8} />
          <FormHelperText>Mindestens 8 Zeichen</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='passwordrepeat'>Password wiederholen</FormLabel>
          <Input id='passwordrepeat' type='password' value={passwordRepeat} onChange={event => setPasswordRepeat(event.target.value)} minLength={8} />
        </FormControl>
        <Link as={RouterLink} to="/data-privacy" color='teal.500' textDecoration='underline'>
          Datenschutzerklärung
        </Link>
        <Checkbox id='acceptprivacynotice' checked={acceptPrivacyNotice} onChange={event => setAcceptPrivacyNotice(event.target.checked)}>Ich akzeptiere die Datenschutzbestimmungen</Checkbox>
        <div>
          <Button colorScheme='green' margin='1em' onClick={save} disabled={email === "" || nickname === "" || token.length < 6 || password.length < 8 || password !== passwordRepeat || !acceptPrivacyNotice} isLoading={isSavingLoading}>Registrieren</Button>
          <Button colorScheme='gray' margin='1em' onClick={back}>Zurück</Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;