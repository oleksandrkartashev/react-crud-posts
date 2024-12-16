import { AddPostFormProps } from '../../types';

const FormAddPost: React.FC<AddPostFormProps> = ({
  title,
  body,
  onTitleChange,
  onBodyChange,
}) => {
  return (
    <>
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
            required
            value={title}
            onChange={onTitleChange}
            className="bg-gray-50 dark:bg-black border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-white dark:text-white"
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
            required
            value={body}
            onChange={onBodyChange}
            rows={4}
            className="block p-2.5 dark:bg-black w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-500 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
      </form>
    </>
  );
};

export default FormAddPost;
