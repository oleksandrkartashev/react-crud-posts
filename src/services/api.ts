import axios from 'axios';
import { Post, PostResponse } from '../types';

export const fetchPosts = async (): Promise<PostResponse> => {
  try {
    const response = await axios.get('https://dummyjson.com/posts?limit=20');
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchPost = async (id: number): Promise<Post> => {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/${id}`);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
