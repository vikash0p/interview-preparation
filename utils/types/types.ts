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