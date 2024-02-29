import React from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import style from './style.module.scss';
import Cron from '../components/Cron';

const MockList = [
  {
    taskName: 'React',
    time: '02:00:00'
  },
  {
    taskName: 'TypeScript',
    time: '02:00:00'
  }
]

function App() {

  const [list, setList] = React.useState(MockList);

  const addItem = (task: string, time: string) => {
    setList([...list, { taskName: task, time: time }]);
  }


  return (
    <div className={style.App}>
      <Forms addItem={addItem} />
      <List list={list} />
      <Cron />
    </div>
  );
}

export default App;
