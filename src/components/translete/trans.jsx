import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: 20 }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      <button onClick={() => i18n.changeLanguage('fa')}>فارسی</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>
  );
}

export default App;
