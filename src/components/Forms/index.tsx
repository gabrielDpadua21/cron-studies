import React from "react";
import Buttom from "../Buttom";
import style from './style.module.scss';

interface FormsProps {
  addItem: (task: string, time: string) => void;
}

class Forms extends React.Component<FormsProps> {
  
  state = {
    task: "",
    time: "00:00:00"
  }

  constructor(props: FormsProps) {
    super(props);
  }

  render() {
    return (
        <form className={style.newTask} onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            this.props.addItem(this.state.task, this.state.time);
        }}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Add Task Study</label>
                <input 
                    type="text" 
                    name="task" 
                    id="task" 
                    required 
                    placeholder="Task Study" 
                    value={this.state.task} 
                    onChange={(e) => this.setState({...this.state, task: e.target.value})}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="timer">Tempo</label>
                <input 
                    type="time" 
                    step="1" 
                    name="timer" 
                    id="timer" 
                    min="00:00:00" 
                    max="02:00:00" 
                    value={this.state.time} 
                    required 
                    onChange={(e) => this.setState({...this.state, time: e.target.value})}
                />
            </div>
            <Buttom text="Add Task" onClick={() => this.props.addItem(this.state.task, this.state.time)}/>
        </form>
    );
  }
}

export default Forms;