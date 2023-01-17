import React, { useState } from "react";
import { Image } from "react-native-svg";
import Logo from "../../assets/logo.svg";

import {
  Container,
  Brand,
  Title,
  Form,
  Input,
  Button,
  ButtonText,
  LoginText,
  LoginNavigation,
} from "./styles";

export function Register() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Container>
      <Form>
        <Brand>
          <Logo width={80} />
          <Title>Snappy</Title>
        </Brand>
        <Input
          value={userName}
          keyboardType="default"
          placeholder="Username"
          onChangeText={(text: string) => setUserName(text)}
        />
        <Input
          value={email}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
        />
        <Input
          value={password}
          keyboardType="default"
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text: string) => setPassword(text)}
        />
        <Input
          value={confirmPassword}
          keyboardType="default"
          secureTextEntry={true}
          placeholder="Confirm Password"
          onChangeText={(text: string) => setConfirmPassword(text)}
        />
        <Button>
          <ButtonText>Register</ButtonText>
        </Button>
        <LoginText>
          Already have an account? <LoginNavigation>Login.</LoginNavigation>
        </LoginText>
      </Form>
    </Container>
  );
}
