type Props = {
  paragraphs: string[];
};

export const About = ({ paragraphs }: Props) => {
  return (
    <ul className="flex flex-col gap-3 w-5/6 md:w-full mx-auto font-raleway">
      {paragraphs.map((paragraph, i) => (
        <li key={i}>{paragraph}</li>
      ))}
    </ul>
  );
};
