import React, { useState } from 'react';
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props){
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  const reset = function () {
    setStudent("");
    setInterviewer(null);
  }
  const cancel = function () {
    props.onCancel();
  }



  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
    props.onSave(student, interviewer);
  }


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off"  onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            data-testid="student-name-input"
            placeholder="Enter Student Name"
            value = {student}
            onChange = {(event) => {
              setStudent(event.target.value);
              setError("");
              }}
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList 
          value={interviewer}
          interviewers = {props.interviewers}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick = {() => {
            cancel();
            reset();
          }}>Cancel</Button>
          <Button onClick={validate} confirm >Save</Button>
        </section>
      </section>
    </main>
  );
}
