type Props = {
  stack: {
    icon: JSX.Element;
    name: string;
  }[];
};

export const Stack = ({ stack }: Props) => {
  return (
    <ul className="flex flex-col items-end gap-6 row-span-3 col-start-1 row-start-2">
      {stack.map((tech, i) => (
        <li
          key={i}
          className="flex gap-3 items-center font-bold text-lg border-2 border-gray-700 rounded-md py-2 px-6 transition duration-300 ease-in-out hover:border-yellow-600"
        >
          <span>{tech.icon}</span>
          {tech.name}
        </li>
      ))}
    </ul>
  );
};
