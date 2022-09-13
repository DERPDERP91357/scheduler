import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";
import Form from "components/Appointment/Form";
import Confirm from "components/Appointment/Confirm";
import useVisualMode from "hooks/useVisualMode.js";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const SAVING = "SAVING";
const CREATE = "CREATE";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";

export default function Appointment(props){
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  const save = function(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(()=>{
      transition(SHOW);
    })
  }
  const deleting = function() {
    transition(DELETE);
    props.deleteInterview(props.id).then(()=>{
      transition(EMPTY);
    })
  }
  return (
    <article className="appointment">
      <Header time = {props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message = "Saving" />}
      {mode === DELETE && <Status message = "Deleting" />}
      {mode === CONFIRM && <Confirm onConfirm={deleting} onCancel = {back} message="Are you sure you would like to delete?"/>}
      {mode === SHOW && props.interview &&(
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete = {()=> {transition(CONFIRM)}}
        />
      )}
      {mode === CREATE && (
        <Form
          student={""}
          interviewer={null}
          interviewers={props.interviewers}
          onCancel = {back}
          onSave = {save}
        />
      )}
    </article>
  );
}