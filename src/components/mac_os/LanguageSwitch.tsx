'use client';
import useLanguageStore from '@/stores/languageStore';
import cn from '@/utils/cn';

export default function LanguageSwitch({
  className,
  ...props
}: Readonly<React.ComponentPropsWithoutRef<'div'>>) {
  const { changeLanguage } = useLanguageStore();

  return (
    <div
      className={cn(
        'flex gap-2 *:hover:opacity-80 *:cursor-pointer',
        className,
      )}
      {...props}
    >
      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('de')}>de</button>
    </div>
  );
}
