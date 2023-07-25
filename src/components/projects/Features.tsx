type Props = {
  features: string[];
};

const Features = ({ features }: Props) => {
  return (
    <ul className="flex list-disc flex-col gap-3 pl-3 text-lg font-bold text-yellow-600">
      {features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  );
};

export default Features;
