export interface LinkInterface {
  id: string;
  name: string;
  url: string;
  component: React.ReactNode;
  data: string;
  level: string;
  description: string;
  tags: string[];
  estimatedTime: number;
  prerequisites: string[];
  objectives: string[];
  tips: string;
  challenges: string | string[];
}

export interface JavaScriptLogicalInterface {
  id: string;
  title: string;
  content: string | ProductProps[]
  link: string;
}

export interface ProductProps  {
    question: string;
    code: string;
    answer: string;
  };