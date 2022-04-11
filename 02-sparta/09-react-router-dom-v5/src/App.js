import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Cat from './Cat';
import Dog from './Dog';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home으로 가기</Link>
        </li>
        <li>
          <Link to="/cat">Cat으로 가기</Link>
        </li>
        <li>
          <Link to="/dog">Dog으로 가기</Link>
        </li>
      </ul>
      <Route path={'/'} component={Home} exact />
      <Route path={'/cat'} component={Cat} />
      <Route path={'/dog'} component={Dog} />
    </div>
  );
}

export default App;
