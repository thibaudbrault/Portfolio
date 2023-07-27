import { TabsList, TabsTrigger } from '@/components/ui';

type Props = {
  images?: boolean;
};

export const TabsComponent = ({ images }: Props) => {
  return (
    <TabsList className="font-redhat text-base md:text-lg">
      {images && <TabsTrigger value="pres">Images</TabsTrigger>}
      <TabsTrigger value="features">Contenu</TabsTrigger>
      <TabsTrigger value="about">A propos</TabsTrigger>
    </TabsList>
  );
};
