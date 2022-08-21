import { LanguageContext } from './LanguageContext';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export function LanguageContextProvider({ value }) {
  return (
    <LanguageContext.Provider value={value}>
      <h2>
        Current Language:
        {value.language}
      </h2>
      <p>Click button to change to jp</p>
      <div>
        {/* Can be nested */}
        <LanguageSwitcher />
      </div>
    </LanguageContext.Provider>
  );
}
