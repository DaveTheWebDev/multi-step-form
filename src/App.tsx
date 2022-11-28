import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from './components/atoms/Button/Button';
import { Checkbox } from './components/atoms/Checkbox/Checkbox';
import { Step } from './components/atoms/Step/Step';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App" style={{ backgroundColor: 'gray', width: '100vw', height: '100vh' }}>
        <Step>
          <Button variant='dangerous'>Coś tam</Button>
          <Button variant='primary' isSubmitButton>Coś tam</Button>
          <Checkbox id='da' isChecked isDisabled label='dududu' name='12' />
        </Step>
      </div>
    </ThemeProvider>
  );
}

export default App;
