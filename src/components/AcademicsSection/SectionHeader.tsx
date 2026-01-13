type SectionHeaderProps = {
  title: string;
  showDivider?: boolean;
  showAccentLine?: boolean;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
};

export function SectionHeader({
  title,
  showDivider = true,
  showAccentLine = true,
  alignment = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <div className={`relative section-header-padding ${className}`}>
      {/* Accent Line at Top */}
      {showAccentLine && (
        <div className='absolute left-0 top-0 h-1.5 w-full max-w-md bg-secondary' />
      )}

      {/* Title and Divider */}
      <div
        className={`flex flex-col justify-start gap-2 md:gap-4 ${alignmentClasses[alignment]}`}
      >
        <h2 className='text-primary uppercase tracking-wider'>{title}</h2>
        {showDivider && <div className='w-24 h-0.5 bg-primary' />}
      </div>
    </div>
  );
}
