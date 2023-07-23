type Props = {
  paragraphs: string[];
};

export const About = ({ paragraphs }: Props) => {
  return (
    <div>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};
