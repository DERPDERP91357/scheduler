import React from "react";

import DayListItem from "components/DayListItem";


export default function DayList(props){
  let array = props.days.map(element => {
    return <DayListItem key={element.id}
    name={element.name}
    spots={element.spots} 
    selected={element.name === props.day}
    setDay={props.setDay}>
    </DayListItem>
  })
  return (
    <ul>
      {array}
    </ul>
  );
}