type Props = {
  features: string[];
};

export const Features = ({ features }: Props) => {
  return (
    <ul className="flex flex-col gap-3 w-5/6 md:w-full mx-auto list-disc pl-3 text-yellow-600 md:text-lg font-bold">
      {features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  );
};
