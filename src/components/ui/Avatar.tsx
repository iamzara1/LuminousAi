import clsx from "clsx";

interface AvatarProps {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-lg",
};

export default function Avatar({
  src,
  name = "User",
  size = "md",
}: AvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={clsx(
        "flex items-center justify-center overflow-hidden rounded-full border border-[#23293A] bg-[#171B26] font-semibold text-white",
        sizes[size]
      )}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
}
