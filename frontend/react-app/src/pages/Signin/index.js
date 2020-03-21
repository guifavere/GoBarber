import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

export default function SignIn() {
  return (
    <>
      <img alt="GoBarber" src={logo} title="GoBarber" />
      <form>
        <input placeholder="Seu e-mail" type="email" />
        <input placeholder="Sua senha secreta" type="password" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
