export function getAppointmentsForDay(state, day) {
  let dayObj = state.days.filter((dayWeek) => {
    return dayWeek.name === day;
  });
  if (dayObj[0] === undefined) {
    return [];
  }
  let appointmentId = dayObj[0].appointments;
  return appointmentId.map((element) => {
    return state.appointments[element];
  });
}

//returns single data object representing one interviewer from interviewers array using an id value
export function getInterview(state, interview) {
  //aborts if interview id does not exist yet
  if (interview === null) {
    return null;
  }
  let intObj = Object.values(state.interviewers).filter((person) => {
    return person.id === interview.interviewer;
  });
  return {
    student: interview.student,
    interviewer: intObj[0],
  };
}

//retrieves array of interviewer ids associated with weekday then returns the corresponding objects from the interviewers object
export function getInterviewersForDay(state, day) {
  let dayObj = state.days.filter((dayWeek) => {
    return dayWeek.name === day;
  });
  if (dayObj[0] === undefined) {
    return [];
  }
  let interviewerId = dayObj[0].interviewers;
  return interviewerId.map((element) => {
    return state.interviewers[element];
  });
}
