export interface TeamPersonI {
  image: string;
  dataPerson: string;
  post: string;
  details: PatternInfoI[];
  comment: string;
}

export interface PatternInfoI {
  title: string;
  description: string;
}

export interface TeamPersonsI {
  data: TeamPersonI[];
}
