import React, {useEffect, useState} from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import {getAppointmentsForDay} from "helpers/selectors";


export default function Application(props) {
  const [state, setState] = useState({
    days: [],
    appointments: {},
    day: "Monday",
    interviewers : {}
  });
  //const setDays = (days) => {setState(prev => ({ ...prev, days }))};
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then(data => {
      setState(prev => {
        return{...prev,
      days : data[0].data,
      appointments : data[1].data,
      interviewers : data[2].data
    }})
    })
  }, [])
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointmentList = dailyAppointments.map(element => {
    return <Appointment 
    key = {element.id} 
    //interview={interview} 
    {...element}/>
  })
  const setDay = day => setState({ ...state, day });
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onClick={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentList}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
