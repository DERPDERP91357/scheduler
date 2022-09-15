import React from "react";

import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  let classes = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  let interName = "";
  if (props.selected) {
    interName = props.name;
  }

  return (
    <li
      key={props.id}
      className={classes}
      onClick={props.setInterviewer}
      data-testid="interviewer-pic"
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {interName}
    </li>
  );
}
