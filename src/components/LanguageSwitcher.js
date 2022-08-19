import {useContext} from "react";
import {LanguageContext} from "../context/LanguageContext";

export const LanguageSwitcher = () => {
    const {language, setLanguage} = useContext(LanguageContext);
    return (
        <button onClick={() => setLanguage("jp")}>
            Switch Language (Current: {language})
        </button>
    );
};