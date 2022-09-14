import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";
import Form from "components/Appointment/Form";
import Error from "components/Appointment/Error";
import Confirm from "components/Appointment/Confirm";
import useVisualMode from "hooks/useVisualMode.js";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const SAVING = "SAVING";
const CREATE = "CREATE";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

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
    if (name === "" || interviewer === null) {
      return transition(ERROR_SAVE, true);
    }
    props.bookInterview(
      props.id, interview
    ).then(()=>{
      transition(SHOW);
    }).catch(()=>{
      transition(ERROR_SAVE, true);
    })
  }
  const deleting = function() {
    transition(DELETE, true);
    props.deleteInterview(
      props.id
    ).then(()=>{
      transition(EMPTY);
    }).catch(()=>{
      transition(ERROR_DELETE, true);
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
          onEdit = {()=> {transition(EDIT)}}
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
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel = {back}
          onSave = {save}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
          message = "Could Not Save"
          onClose = {back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message = "Could Not Delete"
          onClose = {back}
        />
      )}
    </article>
  );
}