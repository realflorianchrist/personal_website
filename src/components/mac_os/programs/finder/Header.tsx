import { useI18n } from '@/hooks/useI18n';
import { BsDot } from 'react-icons/bs';

export default function Header() {

    const i18n = useI18n('AboutMe.Header');

    return (
        <>
            <span>{i18n.Name}</span>
            <BsDot />
            <span>{i18n.Role}</span>
        </>
    );
}
