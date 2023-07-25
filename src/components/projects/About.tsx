type Props = {
  paragraphs: string[];
};

const About = ({ paragraphs }: Props) => {
  return (
    <div>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};

export default About;
