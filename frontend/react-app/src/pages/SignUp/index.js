import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

export default function SignUp() {
  return (
    <>
      <img alt="GoBarber" src={logo} title="GoBarber" />
      <form>
        <input placeholder="Nome completo" type="text" />
        <input placeholder="Seu e-mail" type="email" />
        <input placeholder="Sua senha secreta" type="password" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
