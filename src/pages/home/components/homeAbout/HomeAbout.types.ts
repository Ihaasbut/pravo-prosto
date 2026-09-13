export interface HomeAboutItemI {
  title: string;
  description: string;
}

export interface HomeAboutDataI {
  title: string;
  description: string;
  principles: HomeAboutItemI[];
}

export interface HomeAboutPropsI {
  about: HomeAboutDataI;
}
