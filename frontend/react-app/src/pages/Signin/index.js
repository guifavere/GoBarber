import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

export default function SignIn() {
  const handleSubmit = data => {
    console.tron.log(data);
  };

  return (
    <>
      <img alt="GoBarber" src={logo} title="GoBarber" />
      <Form noValidate onSubmit={handleSubmit} schema={schema}>
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
