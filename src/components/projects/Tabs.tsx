import { TabsList, TabsTrigger } from '@/components/ui';

const TabsComponent = () => {
  return (
    <TabsList className="font-redhat text-lg">
      <TabsTrigger value="pres">Images</TabsTrigger>
      <TabsTrigger value="features">Caractéristiques</TabsTrigger>
      <TabsTrigger value="about">A propos</TabsTrigger>
    </TabsList>
  );
};

export default TabsComponent;
