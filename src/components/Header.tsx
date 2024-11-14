// src/components/Header.tsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className=" text-white py-4 px-8 border-b-2">
      <div className="container">
        <nav className="flex justify-between">
          <Link to="/" className="text-2xl font-semibold">React Blog</Link>
          <div>
            <Link to="/" className="mr-4">Home</Link>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;