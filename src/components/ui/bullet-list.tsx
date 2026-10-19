export function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-1.5 text-sm ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="text-highlight">
            ▹
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
