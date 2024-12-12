// src/components/post/PostCard.tsx
import { Link } from 'react-router-dom';
import { Post } from '../../types';

const PostCard = (post: Post) => {
  return (
    <>
      <Link to={`/post/${post.id}`}>
        <div className="post p-4 border-2" post-id={post.id}>
          <h3 className="text-xl font-semibold line-clamp-1">{post.title}</h3>
          <p className=" mt-2 line-clamp-2">{post.body}</p>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
