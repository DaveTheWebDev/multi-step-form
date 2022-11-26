import React from 'react';
import { Button } from './components/atoms/Button/Button';

function App() {
  return (
    <div className="App">
      <Button variant='dangerous'>Coś tam</Button>
      <Button variant='primary' isSubmitButton>Coś tam</Button>
    </div>
  );
}

export default App;
