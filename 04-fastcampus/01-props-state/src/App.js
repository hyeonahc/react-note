import DefaultProps from './components/DefaultProps';
import DefaultProps2 from './components/DefaultProps2';
import Intro from './components/Intro';
import AddType from './components/AddType';
import Count from './components/Count';
import Clock from './components/Clock';
import ClockProps from './components/ClockProps';
import Dashboard from './Dashboard';
import ClockList from './components/ClockList';

function App() {
  return (
    <>
      <Intro name="Jack Sparrow" age={45} email="jack@gmail.com" about="Captain Jack Sparrow is a fictional character and the main protagonist of the Pirates of the Caribbean film series." />
      <hr />
      <DefaultProps />
      <hr />
      <DefaultProps2 />
      <hr />
      <AddType nine={9}/>
      <hr />
      <Count />
      <hr />
      <Clock />
      <hr />
      <ClockProps timezone="Asia/Seoul" />
      <hr />
      <h1>카테고리: 영화</h1>
      <Dashboard category="영화"/>
      <h1>카테고리: 드라마</h1>
      <Dashboard category="드라마"/>
      <hr />
      <ClockList />
    </>
  );
}

export default App;
