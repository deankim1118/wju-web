type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  id,
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h2
        id={id}
        className="uppercase tracking-wide text-slate-900"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
