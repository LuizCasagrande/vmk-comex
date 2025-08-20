export interface StepDto {
  title: string;
  description: string;
  icon: string;
}

export interface StepsDto {
  steps: StepDto[];
  info: string[];
}
