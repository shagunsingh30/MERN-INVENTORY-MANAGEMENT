/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const DeleteConfirmation = ({ isOpen, onClose, productName, onConfirm }) => {
  if (!isOpen) return null; // Don't render dialog if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-red-600 dark:text-red-400">
            🗑️ Delete Product
          </h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-700 dark:text-gray-400"
          >
            <IoMdClose />
          </button>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Are you sure you want to delete{" "}
          <span className="font-bold">{productName}</span>? This action cannot
          be undone.
        </p>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
