import PostCard from './PostCard';
import usePosts from '../../hooks/usePosts';

const PostList = () => {
  const { posts } = usePosts();

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