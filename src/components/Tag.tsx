type TagProps = {
    label: string;
    onClick?: (tag: string) => void;
    active?: boolean;
  };
  
  export default function Tag({ label, onClick, active = false }: TagProps) {
    return (
      <span
        onClick={onClick ? () => onClick(label) : undefined}
        className={`
          inline-block
          px-3 py-1
          rounded-full
          text-xs
          font-medium
          border
          transition
          ${
            active
              ? "bg-black text-white border-black"
              : "bg-neutral-100 text-neutral-700 border-neutral-300"
          }
          ${onClick ? "cursor-pointer hover:bg-neutral-200" : ""}
        `}
      >
        {label}
      </span>
    );
  }
  