export type TStack = {
  icon: string;
  name: string;
};

export type TExperiences = {
  role: string;
  company: string;
  city: string;
  start: string;
  end: string;
  duration: string;
  type: string;
  missions: {
    client: string;
    details: string[];
    stack: TStack[];
  }[];
};

export type TImages = {
  id: number;
  src: string;
  alt: string;
};

export type Lang = {
  lang: 'fr' | 'en';
};
