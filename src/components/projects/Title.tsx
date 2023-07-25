type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return <h2 className="text-center font-raleway text-6xl">{text}</h2>;
};

export default Title;
