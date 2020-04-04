import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Notifications from "~/components/Notifications";

import { Container, Content, Profile } from "./styles";
import logo from "~/assets/logo-purple.svg";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img alt="GoBarber" src={logo} title="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              alt={profile.name}
              src={
                profile.avatar && profile.avatar.url
                  ? profile.avatar.url
                  : "https://api.adorable.io/avatars/50/abott@adorable.png"
              }
              title={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
