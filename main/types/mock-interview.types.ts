export type MockInterview = {
  _id: string;
  question: string;
  answer: string;
  explanation: string;
  codeExample?: string;
  tags: string[];
  topics: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  technology: string;
  isPremium: boolean;
  slug: string;
  isActive: boolean;
  videoUrl?: string;
  diagramUrl?: string;
  share: number;
  estimatedTime: number;
  likes: number;
  views: number;
  difficultyRating: number;
  version: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

export type MockInterviewApiResponse = {
  success: boolean;
  message: string;
  data: MockInterview[];
};



export type IPFilterKey = 'category' | 'difficulty';
