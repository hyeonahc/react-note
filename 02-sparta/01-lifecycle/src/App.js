import logo from './logo.svg';
import './App.css';
import LifecycleEx from './LifeCycleEx';
import { useState } from 'react';

function App() {
  const [isCat, setIsCat] = useState(true);
  return (
    <div className="App">
      {isCat ? <LifecycleEx /> : null}
      <button
        onClick={() => {
          setIsCat(!isCat);
        }}
      >
        버튼을 눌러보세요
      </button>
    </div>
  );
}

export default App;
