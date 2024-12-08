export interface Post {
  id: number;
  title: string;
  body: string;
  reactions: object;
  userId: number;
  views: number;
  tags: string[];
}

export interface PostResponse {
  posts: Post[];
}

export type Theme = 'light' | 'dark';