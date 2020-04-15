import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

export default function Dashboard({ navigation }) {
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    const res = await api.get('appointments');

    setAppointments(res.data);
  };

  useEffect(() => navigation.addListener('focus', loadAppointments), [
    navigation,
  ]);

  const handleCancel = async (id) => {
    const res = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, canceled_at: res.data.canceled_at }
          : appointment
      )
    );
  };

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}
