// src/pages/HomePage.tsx
import PostList from "../components/post/PostList"

const HomePage = () => {

  return (
    <>
    <main className="page page-home flex-1 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Latest Posts</h1>
        <PostList />
      </div>
    </main>
    </>
  );
};

export default HomePage;