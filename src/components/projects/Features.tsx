type Props = {
  features: string[];
};

export const Features = ({ features }: Props) => {
  return (
    <ul className="mx-auto flex w-5/6 list-disc flex-col gap-3 pl-3 font-bold text-yellow-600 md:w-full md:text-lg">
      {features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  );
};
