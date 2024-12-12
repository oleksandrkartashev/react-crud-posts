import { useState, useCallback } from 'react';
import PostCard from './PostCard';
import usePosts from '../../hooks/usePosts';
import { Post } from '../../types';
import AddPostPopup from '../popup/AddPostPopup';

const PostList = () => {
  const { posts, addPost } = usePosts();

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const openAddPopup = useCallback(() => setIsPopupOpen(true), []);
  const closeAddPopup = useCallback(() => setIsPopupOpen(false), []);

  const handleAddPost = (newPost: Post) => {
    addPost(newPost);
    closeAddPopup();
  };

  return (
    <>
      <div className="posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length === 0 ? (
          <div className="text-center text-black dark:text-white">
            No posts available.
          </div>
        ) : (
          posts.map((post) => (
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
          ))
        )}
      </div>
      <div className="add-post text-center mt-4">
        <button
          onClick={openAddPopup}
          className="bg-black dark:bg-white text-white dark:text-black leading-none min-w-[100px] px-3 py-2 mx-2"
        >
          Add post
        </button>
      </div>
      {isPopupOpen && (
        <AddPostPopup
          isOpen={isPopupOpen}
          onClose={closeAddPopup}
          onAddPost={handleAddPost}
        />
      )}
    </>
  );
};

export default PostList;
