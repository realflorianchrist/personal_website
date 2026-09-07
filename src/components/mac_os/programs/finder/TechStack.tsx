import { useI18n } from '@/hooks/useI18n';

export default function TechStack() {
  const i18n = useI18n('AboutMe.TechStack');

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-fit gap-4 w-full'>
      {i18n.Items.map((category) => (
        <div key={category.Id}>
          <h2 className='text-lg font-medium mb-4'>{category.Title}</h2>

          <div className='flex flex-wrap gap-2'>
            {category.Technologies.map((technology) => (
              <span
                key={technology}
                className='px-3 py-1 rounded-full bg-primary border-0.5 border-border text-sm text-white/70'
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
