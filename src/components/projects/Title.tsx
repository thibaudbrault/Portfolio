type Props = {
  text: string;
  small?: boolean;
  className?: string;
};

export const Title = ({ text, small, className }: Props) => {
  return small ? (
    <h3 className={`text-center text-2xl md:text-4xl ${className}`}>{text}</h3>
  ) : (
    <h2
      className={`text-center font-atkinson text-4xl md:text-6xl ${className}`}
    >
      {text}
    </h2>
  );
};
