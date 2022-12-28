import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MultiStepsFormProvider } from './components/context/MultiStepsFormCtx';
import Form from './components/organisms/Form';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MultiStepsFormProvider>
        <Form />
      </MultiStepsFormProvider>
    </ThemeProvider>
  );
}

export default App;
