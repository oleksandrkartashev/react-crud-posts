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

export interface PostEditPopupProps {
  post: Post;
  isOpen: boolean;
  onClose: () => void;
  onSave: (post: Post) => void;
}

export interface PostAddPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (post: Post) => void;
}

export interface EditPostFormProps {
  editedPost: Post;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export interface AddPostFormProps {
  title: string;
  body: string;
  onTitleChange: React.ChangeEventHandler<HTMLInputElement>;
  onBodyChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}
