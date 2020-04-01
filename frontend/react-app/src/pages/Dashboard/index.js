import React, { useEffect, useMemo, useState } from "react";
import {
  format,
  subDays,
  addDays,
  isBefore,
  isSameHour,
  setHours,
  parseISO
} from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import pt from "date-fns/locale/pt";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import api from "~/services/api";

import { Container, Time } from "./styles";

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const handlePrevDay = () => setDate(subDays(date, 1));

  const handleNextDay = () => setDate(addDays(date, 1));

  useEffect(() => {
    const loadSchedule = async () => {
      const res = await api.get("schedule", { params: { date } });
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = range.map(hour => {
        const checkDate = setHours(date, hour);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: res.data.find(a =>
            isSameHour(parseISO(a.date), compareDate)
          )
        };
      });

      setSchedule(data);
    };

    loadSchedule();
  }, [date]);

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : "Em aberto"}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
