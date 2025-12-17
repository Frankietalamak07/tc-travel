export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  location: string;
  tags: string[];
  author: string;
  publicationDate: string;
  content: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HOME = 'home',
  BLOG = 'blog',
  BOOKING = 'booking',
  AI_GUIDE = 'ai-guide',
}