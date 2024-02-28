import React from "react";
import style from '../List/style.module.scss';

export interface ListItemProps {
    taskName: string;
    time: string;
}

function ListItem(props: ListItemProps) {
  return (
    <li className={style.item}>
      <h3>{props.taskName}</h3>
      <span>{props.time}</span>
    </li>
  );
}

export default ListItem;