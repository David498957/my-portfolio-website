import { useState } from "react";
const Img: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = "",
}) => {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-linear-to-br from-zinc-800 to-zinc-900 text-xs text-zinc-500 ${className}`}
      >
        Add image: {alt}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
export default Img;
