import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/app/router';
import { I18nProvider } from '@/app/I18nProvider';

export function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </I18nProvider>
  );
}
