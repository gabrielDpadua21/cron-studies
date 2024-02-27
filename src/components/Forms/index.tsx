import React from "react";
import Buttom from "../Buttom";

class Forms extends React.Component {
  render() {
    return (
        <form action="">
            <div>
                <label htmlFor="task">Add Task Study</label>
                <input type="text" name="task" id="task" required placeholder="Task Study" />
            </div>
            <div>
                <label htmlFor="timer">Time</label>
                <input type="time" step="1" name="timer" id="timer" min="00:00:00" max="02:00:00" required />
            </div>
            <Buttom />
        </form>
    );
  }
}

export default Forms;