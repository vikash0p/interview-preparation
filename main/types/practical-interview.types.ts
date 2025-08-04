export interface IEstimatedTime {
  min: number;
  max: number;
  timeSpent: number;
  solved: boolean;
}

export interface IHints {
  text: string;
  codeSnippet?: string;
  revealAfterMinutes?: number;
}

export interface IPracticalInterview {
  _id: string;
  title: string;
  problemStatement: string;
  description: string;
  detailedExplanation?: string;
  starterCode: string;
  solutionCode: string;
  difficulty: string;
  technology: string;
  category: string;
  requirements: string[];
  conceptsTested?: string[];
  prerequisites?: string[];
  objectives?: string[];
  tips?: string;
  commonMistakes?: string[];
  challenges?: string;
  estimatedTime: IEstimatedTime;
  totalTimeSpent: number;
  revisions: number;
  videoUrl?: string;
  hints?: IHints[];
  featured: boolean;
  tags?: string[];
  slug: string;
  views?: number;
  likes?: number;
  share?: number;
  bookmarks: number;
  seoKeywords?: string[];
  metaDescription?: string;
  diagramUrl?: string;
  prioritize?: boolean;
  difficultyRating?: number;
  isActive: boolean;
  isPremium: boolean;
  createdBy: string;
  popularity: string;
  version: number;

  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

export interface IPracticalInterviewApiResponse {
  status: string;
  results: number;
  data: IPracticalInterview[];
}

export interface IPracticalInterviewSingleApiResponse {
  status: string;
  data: IPracticalInterview;
}

export interface IPracticalInterviewsQueryParams {
  technology: string;
  category?: string;
  difficulty?: string;
}

export interface IPracticalInterviewCategoryResponse {
  status: string;
  data: string[];
}

export interface IPracticalInterviewSlugsResponse {
  status: string;
  results: number;
  technology: string;
  data: string[];
}

export interface ISlugLayoutProps {
  child?: React.ReactNode;
  children?: React.ReactNode;
  sideBar: React.ReactNode;
}

export interface ISlugDataProps {
  data: IPracticalInterview;
}

export interface ISideBarCardProps {
  slug: string;
  index: number;
  isActive: boolean;
  onClick: (slug: string) => void;
  setRef: (el: HTMLLIElement | null) => void;
}

export interface IPracticalCardProps {
  technology: {
    id: string;
    slug: string;
    icon: React.ReactNode;
    label: string;
    actionLabel: string;
    comingSoon?: boolean;
  };
  href: string;
}
