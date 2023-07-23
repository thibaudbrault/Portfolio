type Props = {
  features: string[];
};

export const Features = ({ features }: Props) => {
  return (
    <ul className="flex flex-col gap-3 list-disc pl-3 text-yellow-600 text-lg font-bold">
      {features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  );
};
