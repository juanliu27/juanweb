type HoverOverlayProps = {
    x: number;
    y: number;
    title: string;
    note?: string;
  };
  
  export default function MapHoverOverlay({
    x,
    y,
    title,
    note,
  }: HoverOverlayProps) {
    return (
      <div
        className="pointer-events-none absolute z-50 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm"
        style={{
          left: x + 2,
          top: y + 2,
        }}
      >
        <div className="font-medium">{title}</div>
        {note && (
          <div className="mt-1 text-xs text-neutral-500">{note}</div>
        )}
      </div>
    );
  }
  