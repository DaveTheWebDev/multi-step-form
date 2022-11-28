import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Accordion } from './components/atoms/Accordion/Accordion';
import { Button } from './components/atoms/Button/Button';
import { Checkbox } from './components/atoms/Checkbox/Checkbox';
import { Step } from './components/atoms/Step/Step';
import { MultiStepsFormProvider } from './components/context/MultiStepsFormCtx';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MultiStepsFormProvider>
        <div className="App" style={{ backgroundColor: 'gray', width: '100vw', height: '100vh' }}>
          <Step>
            <Button variant='dangerous'>Coś tam</Button>
            <Button variant='primary' isSubmitButton>Coś tam</Button>
            <Checkbox id='da' isChecked isDisabled label='dududu' name='12' />
            <Accordion isExpanded={true} subtitle='1 of 9 services selected' title='Employees'>
              <ul>
                <li>dasda</li>
                <li>dasda</li>
                <li>dasda</li>
              </ul>
            </Accordion>
          </Step>
        </div>
      </MultiStepsFormProvider>
    </ThemeProvider>
  );
}

export default App;
