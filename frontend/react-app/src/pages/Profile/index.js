import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useDispatch, useSelector } from "react-redux";

import { updateProfileRequest } from "~/store/modules/user/actions";

import { Container } from "./styles";

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSubmit = data => dispatch(updateProfileRequest(data));

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input
          type="password"
          name="old_password"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirm_password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
