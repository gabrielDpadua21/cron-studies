import React from "react";
import ListItem, { ListItemProps } from "../ListItem";
import style from './style.module.scss';

interface ListProps {
    list?: ListItemProps[];
}

function List(props: ListProps) {
  return (
    <aside className={style.taskList}>
        <h2> Studies of Day </h2>
        <ul>
            {props.list?.map((item, index) => (
                <ListItem key={index} taskName={item.taskName} time={item.time} />
            ))}
        </ul>
    </aside>
  );
}

export default List;