"use client";
import {useLanguageContext} from "@/app/providers/language-provider";

export default function LanguageSwitch() {
    const {i18n, changeLanguage} = useLanguageContext();

    return (
        <div className={'fixed right-10 bottom-8 space-x-4 z-10'}>
            <button
                onClick={() => changeLanguage('de')}
            > de
            </button>
            <button
                onClick={() => changeLanguage('en')}
            > en
            </button>
        </div>
    );
}