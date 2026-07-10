import { useI18n } from '@/hooks/useI18n';
import cn from '@/utils/cn';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDocumentText, HiEnvelope } from 'react-icons/hi2';
import { IconType } from 'react-icons/lib';

const Icon = (props: { type: IconType; }) => {
    const I = props.type;
    return (
        <div className='bg-gray-500 ml-auto p-1.5 rounded-full'>
            <I size={16} />
        </div>
    );
};

export default function ContactContent() {

    const i18n = useI18n('Contact');

    return (
        <div className={'flex flex-col items-center w-full'}>
            <div className={cn('text-5xl bg-gray-500 rounded-full size-28 mb-14 flex items-center justify-center',
                'shadow-gray-400 shadow-lg'
            )}>
                FC
            </div>
            <div className={cn('w-[70%] bg-muted rounded-lg px-4',
                '*:flex *:items-center *:gap-2 *:text-left *:py-2',
                '[&>*:not(:last-child)]:border-b-0.5 [&>*:not(:last-child)]:border-border'
            )}>
                <a
                    href="mailto:florian_christ@outlook.com"
                >
                    <span>florian_christ@outlook.com</span>
                    <Icon type={HiEnvelope} />
                </a>

                <a
                    href="https://www.linkedin.com/in/florian-christ-983651194/"
                    target="_blank"
                >
                    <span>LinkedIn</span>
                    <Icon type={FaLinkedin} />
                </a>

                <a
                    href="https://github.com/realflorianchrist"
                    target="_blank"
                >
                    <span>GitHub</span>
                    <Icon type={FaGithub} />
                </a>

                <a
                    href={i18n.CV.url}
                    target="_blank"
                >
                    <span>{i18n.CV.title}</span>
                    <Icon type={HiDocumentText} />
                </a>
            </div>
        </div>
    );
}