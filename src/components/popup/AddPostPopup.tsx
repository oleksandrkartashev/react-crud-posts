import { useState } from 'react';
import { PostAddPopupProps } from '../../types';
import usePosts from '../../hooks/usePosts';
import FormAddPost from '../form/FormAddPost';

const AddPost: React.FC<PostAddPopupProps> = ({
  isOpen,
  onClose,
  onAddPost,
}) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const { posts } = usePosts();
  const popupVisibleClass = !isOpen ? 'hidden' : 'flex';

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    if (title && body) {
      const post = {
        id: posts.length + 1,
        title,
        body,
        views: Math.floor(Math.random() * 101),
        reactions: {},
        tags: [''],
        userId: Math.floor(Math.random() * 98) + 2,
      };
      onAddPost(post);
    }
  };

  return (
    <>
      <div
        aria-hidden="true"
        className={`popup popup--edit ${popupVisibleClass} bg-black bg-opacity-30 dark:bg-white dark:bg-opacity-30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-black">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray dark:border-white">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Edit Post
              </h3>
              <button
                onClick={onClose}
                type="button"
                className="text-black dark:text-white bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <FormAddPost
                title={title}
                body={body}
                onTitleChange={handleTitleChange}
                onBodyChange={handleBodyChange}
              />
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-black dark:bg-white text-white dark:text-black leading-none min-w-[100px] px-3 py-2 mx-2"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-black dark:bg-white text-white dark:text-black leading-none min-w-[100px] px-3 py-2 mx-2"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
