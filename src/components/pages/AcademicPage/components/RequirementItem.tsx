import { CheckCircle } from 'lucide-react';
import type { ReactNode } from 'react';

type RequirementItemProps = {
  children: ReactNode;
  note?: string;
  className?: string;
};

export function RequirementItem({
  children,
  note,
  className = '',
}: RequirementItemProps) {
  const isString = typeof children === 'string';
  
  return (
    <li className={`flex items-start gap-3 text-slate-900 ${className}`}>
      <CheckCircle
        className="size-4 shrink-0 text-secondary mt-1"
        aria-hidden
      />
      <div className="flex-1">
        {isString ? (
          <span className="text-base leading-relaxed">{children}</span>
        ) : (
          children
        )}
        {note && (
          <span className="text-xs text-muted-foreground ml-2">{note}</span>
        )}
      </div>
    </li>
  );
}
