import React from "react";
import style from './style.module.scss';
import Buttom from "../Buttom";
import Clock from "./Clock";

const Cron = () => {
    return (
        <div className={style.cron}>
            <p className={style.title}>Choose a task to init timer</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Buttom text="start" />
        </div>
    );
}

export default Cron;