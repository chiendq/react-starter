import { useState } from 'react';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import { LanguageContextProvider } from '../../context/LanguageContextProvider';

function Language() {
  const [language, setLanguage] = useState('en');
  const value = { language, setLanguage };

  return (
    <LanguageContextProvider value={value}>
      <h2>
        Current Language:
        {language}
      </h2>
      <p>Click button to change to jp</p>
      <div>
        {/* Can be nested */}
        <LanguageSwitcher />
      </div>
    </LanguageContextProvider>
  );
}
export default Language;
