import React from "react";
import style from '../style.module.scss';

export interface ListItemProps {
    taskName: string;
    time: string;
}

function ListItem({taskName, time }: ListItemProps) {
  return (
    <li className={style.item}>
      <h3>{taskName}</h3>
      <span>{time}</span>
    </li>
  );
}

export default ListItem;