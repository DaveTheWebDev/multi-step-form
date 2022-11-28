import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from './components/atoms/Button/Button';
import { Checkbox } from './components/atoms/Checkbox/Checkbox';
import theme from './styles/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button variant='dangerous'>Coś tam</Button>
        <Button variant='primary' isSubmitButton>Coś tam</Button>
        <Checkbox id='da' isChecked isDisabled label='dududu' name='12' />
      </ThemeProvider>
    </div>
  );
}

export default App;
