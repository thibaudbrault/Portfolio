type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return (
    <h2 className="text-center font-raleway text-4xl md:text-6xl">{text}</h2>
  );
};
