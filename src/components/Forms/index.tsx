import React from "react";
import Buttom from "../Buttom";
import style from './style.module.scss';

interface FormsProps {
  addItem: (task: string, time: string) => void;
}

class Forms extends React.Component<FormsProps> {

  constructor(props: FormsProps) {
    super(props);
  }

  render() {
    return (
        <form action="" className={style.newTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Add Task Study</label>
                <input type="text" name="task" id="task" required placeholder="Task Study" />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="timer">Time</label>
                <input type="time" step="1" name="timer" id="timer" min="00:00:00" max="02:00:00" required />
            </div>
            <Buttom text="Add Task"/>
        </form>
    );
  }
}

export default Forms;