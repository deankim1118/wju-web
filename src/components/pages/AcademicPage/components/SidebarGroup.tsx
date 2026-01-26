import type { DegreeProgram } from '@/config/academics-content';
import { academicProgramGroups } from '@/config/navigation';
import { SidebarLink } from './SidebarLink';

type SidebarGroupProps = {
  currentProgram: DegreeProgram;
};

export function SidebarGroup({ currentProgram }: SidebarGroupProps) {
  return (
    <>
      {academicProgramGroups.map((group) => (
        <div key={group.category}>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            {group.category}
          </h3>
          <ul className="space-y-0.5 border-b border-slate-200 pb-3">
            {group.items.map((item) => {
              const isCurrent = item.href === currentProgram.href;
              return (
                <li key={item.href}>
                  <SidebarLink
                    href={item.href}
                    label={item.label}
                    isActive={isCurrent}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}
