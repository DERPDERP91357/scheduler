import React from "react";
import PropTypes from "prop-types";

import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  let array = props.interviewers.map((element) => {
    return (
      <InterviewerListItem
        key={element.id}
        name={element.name}
        avatar={element.avatar}
        setInterviewer={() => props.onChange(element.id)}
        selected={element.id === props.value}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{array}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
