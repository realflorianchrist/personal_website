import { useI18n } from '@/hooks/useI18n';

export default function Skills() {
  const i18n = useI18n('AboutMe.Skills');

  const sections = [i18n.Frontend, i18n.Backend, i18n.DevOps, i18n.Other];

  return (
    <div className='flex flex-col gap-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {sections.map((section) => (
          <div key={section.Title}>
            <h2 className='text-lg font-medium mb-4'>{section.Title}</h2>

            <div className='flex flex-wrap gap-2'>
              {section.Items.map((item) => (
                <span
                  key={item}
                  className='px-3 py-1 rounded-full bg-white/5 border-0.5 border-border text-sm text-white/70'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
