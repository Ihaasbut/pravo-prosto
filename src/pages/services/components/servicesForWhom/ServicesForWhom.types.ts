export interface ServicesForWhomItemI {
  title: string;
  description: string;
}

export interface ServicesForWhomDataI {
  title: string;
  description: string;
  items: ServicesForWhomItemI[];
}

export interface ServicesForWhomPropsI {
  audiences: ServicesForWhomDataI;
}
