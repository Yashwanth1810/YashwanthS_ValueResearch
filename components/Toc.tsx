interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TocProps {
  items: TocItem[];
}

export function Toc({ items }: TocProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm text-slate-700"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        On this page
      </div>
      <ul className="mt-3 space-y-1">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 2 ? 'font-medium' : 'pl-3 text-xs'}
          >
            <a
              href={`#${item.id}`}
              className="hover:text-brand"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

