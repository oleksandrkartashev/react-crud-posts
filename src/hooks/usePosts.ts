import { useEffect, useState } from "react";
import { Post } from "../types";
import { fetchPosts } from '../services/api';

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    
    if (savedPosts?.length) {
      setPosts(JSON.parse(savedPosts));
    } else {
      const loadPosts = async () => {
        try {
          const postsData = await fetchPosts();
          setPosts(postsData.posts);
          savePosts(postsData.posts);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
          throw new Error(error);
        }
      };
      loadPosts();
    }
  }, []) 

  const savePosts = (posts:Post[]) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  // const addPost = (newPost: Post) => {
  //   const updatedPosts = [...posts, newPost];
  //   setPosts(newPost);
  //   savePosts(updatedPosts);
  // }

  const editPost = (updatedPost: Post) => {
    const updatedPosts = posts.map(post => post.id === updatedPost.id ? updatedPost : post);
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  }

  const deletePost = (postId: number) => {
    const updatedPosts = posts.filter( post => post.id !== postId);
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  }

  return {
    posts,
    // addPost,
    editPost,
    deletePost,
  };
}

export default usePosts;