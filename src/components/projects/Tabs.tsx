import { TabsList, TabsTrigger } from '@/components/ui';

type Props = {
  images?: boolean;
};

const TabsComponent = ({ images }: Props) => {
  return (
    <TabsList className="font-redhat text-lg">
      {images && <TabsTrigger value="pres">Images</TabsTrigger>}
      <TabsTrigger value="features">Caractéristiques</TabsTrigger>
      <TabsTrigger value="about">A propos</TabsTrigger>
    </TabsList>
  );
};

export default TabsComponent;
