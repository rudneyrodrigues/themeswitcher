import { Header } from './components//Header';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from './styles/global';
import { lightTheme } from './styles/themes/light';
import { darkTheme } from './styles/themes/dark';
import { usePersistedState } from './utils/usePersistedState';

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <h1>Ola mundo</h1>
      </div>
    </ThemeProvider>
  );
}
