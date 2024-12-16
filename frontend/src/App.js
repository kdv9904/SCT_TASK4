import { useState } from 'react';
import { Page } from './Page';
import { List } from './components/List';

function App() {
  const [list,setList]=useState([])
  return (
    <div>
      <Page/>
    </div>
  );
}

export default App;
