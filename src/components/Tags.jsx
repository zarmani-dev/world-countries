const Tags = ({ label, wrap, children }) => {
  return (
    <p className="font-semibold">
      {label}:{" "}
      <span className={`font-light text-white/80 ${wrap}`}>{children}</span>
    </p>
  );
};
export default Tags;
