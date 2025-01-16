import styles from "../styles";

const Loader = () => {
  return (
    <div className={`${styles.loaderContainer}`}>
      <div className="flex flex-col items-center mt-40">
        <div className={`${styles.loaderCircle}`}></div>
        <p className="mt-4 w-[400px] text-center text-gray-600 dark:text-gray-400 font-medium">
          The backend is hosted on a free environment, which may cause some
          initial delays. Thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default Loader;
