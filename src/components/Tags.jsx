const Tags = ({ label, wrap, children }) => {
  return (
    <p className="font-semibold text-darkBlueText dark:text-white">
      {label}:{" "}
      <span
        className={`font-light text-darkBlueText dark:text-white/80 ${wrap}`}
      >
        {children}
      </span>
    </p>
  );
};
export default Tags;
