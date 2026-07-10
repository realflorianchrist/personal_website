'use client';
import useLanguageStore from '@/stores/languageStore';

export default function LanguageSwitch() {

    const { changeLanguage } = useLanguageStore();

    return (
        <div className='flex gap-2'>
            <button onClick={() => changeLanguage('en')}>en</button>
            <button onClick={() => changeLanguage('de')}>de</button>
        </div>
    );
}
