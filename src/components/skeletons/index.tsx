import "./skeletons.scss";

function Bar({ className = "" }: { className?: string }) {
  return <div className={`skeleton-bar ${className}`} />;
}

function Circle({ className = "" }: { className?: string }) {
  return <div className={`skeleton-circle ${className}`} />;
}

export { Bar, Circle };
