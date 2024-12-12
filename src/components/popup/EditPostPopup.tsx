import { useEffect, useState } from 'react';
import { Post } from '../../types';
import { PostEditPopupProps } from '../../types';

const EditPost: React.FC<PostEditPopupProps> = ({
  post,
  isOpen,
  onClose,
  onSave,
}) => {
  const [editedPost, setEditedPost] = useState<Post>({ ...post });

  useEffect(() => {
    setEditedPost({ ...post });
  }, [post]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedPost);
    onClose();
  };

  const popupVisibleClass = !isOpen ? 'hidden' : 'flex';

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
              <form className="space-y-4" action="#">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={editedPost.title}
                    onChange={handleChange}
                    className="bg-gray-50 dark:bg-black border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-white dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="body"
                    className="block mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    Body
                  </label>
                  <textarea
                    name="body"
                    id="body"
                    value={editedPost.body}
                    onChange={handleChange}
                    rows={4}
                    className="block p-2.5 dark:bg-black w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-500 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                onClick={handleSave}
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

export default EditPost;
