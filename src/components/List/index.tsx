import React from "react";
import ListItem, { ListItemProps } from "../ListItem";

interface ListProps {
    list?: ListItemProps[];
}

function List(props: ListProps) {
  return (
    <aside>
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