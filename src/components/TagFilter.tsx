type Props = {
    tags: string[];
    activeTag: string | null;
    onSelect: (tag: string | null) => void;
  };
  
  export default function TagFilter({ tags, activeTag, onSelect }: Props) {
    return (
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect(null)}
          className={`px-3 py-1 rounded-full text-sm border ${
            activeTag === null
              ? "bg-black text-white"
              : "border-neutral-300"
          }`}
        >
          All
        </button>
  
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onSelect(tag)}
            className={`px-3 py-1 rounded-full text-sm border ${
              activeTag === tag
                ? "bg-black text-white"
                : "border-neutral-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    );
  }
  