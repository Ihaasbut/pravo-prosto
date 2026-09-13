export interface HomeProcessStepI {
  title: string;
  description: string;
}

export interface HomeProcessDataI {
  title: string;
  description: string;
  steps: HomeProcessStepI[];
}

export interface HomeProcessPropsI {
  process: HomeProcessDataI;
}
