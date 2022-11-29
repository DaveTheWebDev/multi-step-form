import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ChoosenPreferences } from './components/atoms/ChoosenPreferences/ChoosenPreferences';
import { SelectedCompany } from './components/atoms/SelectedCompany/SelectedCompany';
import { MultiStepsFormProvider } from './components/context/MultiStepsFormCtx';
import { Overview } from './components/molecues/Overview/Overview';
import { Privileges } from './components/molecues/Privileges/Privileges';
import { privileges } from './mocks/privileges.mock';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MultiStepsFormProvider>
        <div className="App" style={{ backgroundColor: 'gray', width: '100vw', height: '100vh' }}>
          {/* <Overview sections={[
            { title: 'Selected company', children: <SelectedCompany companyName='Company XYZ' id='1-2300423445' /> },
            { title: 'Chosen preferences:', children: <ChoosenPreferences preferences={[{ preference: 'dadsada', subpreference: [{ preference: 'dasdasdaa' }] }, { preference: 'dadsada', subpreference: [{ preference: 'dasdasdaa' }] }]} /> }]} buttonLabel='Add preferences' buttonHandler={() => { }} /> */}
          <Privileges clearButtonLabel='Remove' saveButtonLabel='Add' priviliges={privileges} />
        </div>
      </MultiStepsFormProvider>
    </ThemeProvider>
  );
}

export default App;
