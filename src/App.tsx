import React from 'react';
import Forms from './components/Forms';
import List from './components/List';

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
  return (
    <div className='app'>
      <h1>Cron Studies</h1>
      <Forms />
      <List list={MockList} />
    </div>
  );
}

export default App;
