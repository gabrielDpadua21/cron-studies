import React from "react";
import style from './style.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

class Buttom extends React.Component<ButtonProps> {
  render() {
    return <button className={style.button}>{this.props.text}</button>;
  }
}

export default Buttom;