import React from "react";
import { Link } from "react-router-dom";

import { Container, Content, Profile } from "./styles";
import logo from "~/assets/logo-purple.svg";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img alt="GoBarber" src={logo} title="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Fulano de tal</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              alt="Fulano de tal"
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              title="Fulano de tal"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
