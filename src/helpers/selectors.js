export function getAppointmentsForDay(state, day) {
  let dayObj = state.days.filter(dayWeek => {
    return dayWeek.name === day;
  })
  if (dayObj[0] === undefined){
    return [];
  }
  let appointmentId = dayObj[0].appointments;
  return appointmentId.map(element => {
    return state.appointments[element];
  })
}


export function getInterview(state, interview) {
  if (interview === null){
    return null;
  }
  let intObj = Object.values(state.interviewers).filter(person => {
    return person.id === interview.interviewer;
  })
  return {
    student : interview.student,
    interviewer : intObj[0]
  }
}

