import axios from 'axios';
import {Post, PostResponse } from "../types"

export const fetchPosts = async (): Promise<PostResponse> => {
  try {
    const response = await axios.get('https://dummyjson.com/posts?limit=20');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

export const fetchPost = async (id: string): Promise<Post> => {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch post');
  }
};