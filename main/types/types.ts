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


export  interface JavaScriptMockInterface {
    question: string;
    code?: string;
    answer: string;
    link: string;
  }



export  interface ISideBarCardProps {
		slug: string;
		index: number;
		isActive: boolean;
		onClick: (slug: string) => void;
		setRef: (el: HTMLLIElement | null) => void;
	}
