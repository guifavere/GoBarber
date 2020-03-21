import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";

import logo from "~/assets/logo.svg";

export default function SignIn() {
  const handleSubmit = data => {
    console.tron.log(data);
  };

  return (
    <>
      <img alt="GoBarber" src={logo} title="GoBarber" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Seu e-mail" type="email" />
        <Input
          name="password"
          placeholder="Sua senha secreta"
          type="password"
        />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
