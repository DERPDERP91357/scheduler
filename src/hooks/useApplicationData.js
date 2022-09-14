import {useEffect, useState} from 'react';
import axios from "axios";

export default function useApplicationData () {
  const [state, setState] = useState({
    days: [],
    appointments: {},
    day: "Monday",
    interviewers : {}
  });
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

  const setDay = day => setState({ ...state, day });

  const getNewDaysObj = function() {
    return axios.get("/api/days").then(results => {
      return results.data;
    })
  }


  const bookInterview = function(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, {interview}).then(()=> {
      getNewDaysObj().then((data)=> {
        const newDays = data;
        setState(prev => {
          return {...prev,
            days : newDays,
            appointments : appointments
          }
        })
      })
    })
  }
  const cancelInterview = function(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`).then(()=> {
      getNewDaysObj().then((data)=> {
        const newDays = data;
        setState(prev => {
          return {...prev,
            days : newDays,
            appointments : appointments
          }
        })
      })
    })
  }
  return {state, setDay, bookInterview, cancelInterview};
}