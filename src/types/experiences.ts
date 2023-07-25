export type TStack = {
  icon: JSX.Element;
  name: string;
};

export type TExperiences = {
  role: string;
  company: string;
  city: string;
  start: string;
  end: string;
  type: string;
  missions: {
    client: string;
    details: string[];
    stack: TStack[];
  }[];
}[];
