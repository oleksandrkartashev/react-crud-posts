// src/components/post/PostList.tsx
import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { fetchPosts } from '../../services/api';
import { Post } from "../../interfaces"

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData.posts);
      } catch (error:any) {
        throw new Error(error);
      }
    };
    loadPosts();
  }, []);

  if (!posts) {
    return <div className="text-center">Posts not found.</div>;
  }

  return (
    <>
    <div className='posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {posts.map(post => (
        <PostCard 
        key={post.id} 
        id={post.id} 
        title={post.title} 
        body={post.body} 
        views={post.views}
        reactions={post.reactions}
        tags={post.tags}
        userId={post.userId}
        />
      ))}
    </div>
    </>
  );
};

export default PostList;