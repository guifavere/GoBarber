import React, { useEffect, useState } from 'react';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import api from '~/services/api';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({ route, navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const { provider } = route.params;

  const handleSelectHour = (time) =>
    navigation.navigate('Confirm', { provider, time });

  useEffect(() => {
    const loadAvailable = async () => {
      const res = await api.get(`providers/${provider.id}/available`, {
        params: { date: date.getTime() },
      });

      setHours(res.data.available);
    };

    loadAvailable();
  }, [date, provider.id]);

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HourList
          data={hours}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => handleSelectHour(item.value)}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}
