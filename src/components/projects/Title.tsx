type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return <h2 className="text-4xl md:text-6xl text-center font-raleway">{text}</h2>;
};
