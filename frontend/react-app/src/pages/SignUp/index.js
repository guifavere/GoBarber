import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "No mínimo 6 caracteres")
    .required("A senha é obrigatória")
});

export default function SignUp() {
  const handleSubmit = data => {
    console.tron.log(data);
  };

  return (
    <>
      <img alt="GoBarber" src={logo} title="GoBarber" />
      <Form noValidate onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Nome completo" type="text" />
        <Input name="email" placeholder="Seu e-mail" type="email" />
        <Input
          name="password"
          placeholder="Sua senha secreta"
          type="password"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
