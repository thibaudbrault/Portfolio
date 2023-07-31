type Props = {
  paragraphs: string[];
};

export const About = ({ paragraphs }: Props) => {
  return (
    <ul className="mx-auto flex w-5/6 flex-col gap-3 font-atkinson md:w-full">
      {paragraphs.map((paragraph, i) => (
        <li key={i}>{paragraph}</li>
      ))}
    </ul>
  );
};
