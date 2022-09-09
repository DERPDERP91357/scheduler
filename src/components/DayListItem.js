import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";

let formatSpots = function (number) {
  if (number === 1) {
    return "1 spot remaining"
  }
  if (number === 0) {
    return "no spots remaining"
  }
  return number + " spots remaining"
}
export default function DayListItem(props){
  let full = false;
  if(props.spots === 0) {
    full = true;
  }
  let value = "";
  value = formatSpots(props.spots);
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected" : props.selected,
    "day-list__item--full" : full
  })
  return (
    <li className={dayClass} onClick={() => props.onClick(props.value)}>
       <h2 className="text--reglar">{props.value}</h2> 
      <h3 className="text--light">{value}</h3>
    </li>
  );
}