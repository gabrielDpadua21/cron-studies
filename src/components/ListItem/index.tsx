import React from "react";

export interface ListItemProps {
    taskName: string;
    time: string;
}

function ListItem(props: ListItemProps) {
  return (
    <li>
      <h3>{props.taskName}</h3>
      <span>{props.time}</span>
    </li>
  );
}

export default ListItem;