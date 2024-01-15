import { TabsList, TabsTrigger } from '@/components/ui';
import { useTranslations } from '@/i18n/utils';

type Props = {
  images?: boolean;
  lang: 'fr' | 'en'
};

export const TabsComponent = ({ images, lang }: Props) => {
  const t = useTranslations(lang);

  return (
    <TabsList className="font-redhat text-base md:text-lg">
      {images && <TabsTrigger value="pres">{t('tabs[0]')}</TabsTrigger>}
      <TabsTrigger value="features">{t('tabs[1]')}</TabsTrigger>
      <TabsTrigger value="about">{t('tabs[2]')}</TabsTrigger>
    </TabsList>
  );
};
