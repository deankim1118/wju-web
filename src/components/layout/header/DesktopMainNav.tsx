import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import type { MenuFeature, NavItemWithSubmenu } from '@/config/navigation';
import {
  academicProgramGroups,
  actionButtons,
  mainNavigation,
  menuFeatures,
} from '@/config/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import { HeaderActionButton, MainMenuButton } from './buttons';
import {
  CONTAINER_PADDING,
  HEADER_MENU_STYLES,
  LOGO_RESPONSIVE_WIDTH,
  MENU_GAP,
} from './constants';

// =============================================================================
// Types
// =============================================================================

type DesktopMainNavProps = {
  bottomBarHeight: number;
};

type NavMenuListProps = {
  items: NavItemWithSubmenu[];
  textColor: 'text-primary' | 'text-black';
  children?: React.ReactNode;
};

type FeaturedMenuCardProps = {
  item: NavItemWithSubmenu;
  feature: MenuFeature;
};

// =============================================================================
// Constants
// =============================================================================

// Consolidated NavigationMenuTrigger styles (single source of truth)
const TRIGGER_STYLE_BASE = HEADER_MENU_STYLES.desktopTrigger;

const SUBMENU_CONTAINER_STYLE =
  'grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] text-slate-900';

const ACADEMICS_MEGA_MENU_WIDTH = 'w-[860px]';

// =============================================================================
// Sub-components
// =============================================================================

function splitProgramLabel(label: string): { name: string; abbr?: string } {
  const match = label.match(/^(.*)\s+\(([^)]+)\)\s*$/);
  if (!match) return { name: label };
  return { name: match[1] ?? label, abbr: match[2] };
}

/**
 * ListItem component for submenu items with title and description
 */
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { title: string; description?: string }
>(({ className, title, description, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href ?? '#'}
          className={cn(
            HEADER_MENU_STYLES.desktopSubmenuLinkBase,
            HEADER_MENU_STYLES.desktopSubmenuLinkPadding,
            'space-y-1 hover:text-accent-foreground focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className={HEADER_MENU_STYLES.desktopSubmenuTitle}>{title}</div>
          {description && (
            <p className={HEADER_MENU_STYLES.desktopSubmenuDescription}>
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

/**
 * AcademicsListItem - Same layout as ListItem, but with bold title.
 * Kept separate to avoid affecting other dropdown items.
 */
const AcademicsListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { title: string; description?: string }
>(({ className, title, description, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href ?? '#'}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className={HEADER_MENU_STYLES.itemTextStrong}>{title}</div>
          {description && (
            <p className='line-clamp-2 text-xs leading-snug text-muted-foreground'>
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
AcademicsListItem.displayName = 'AcademicsListItem';

function AcademicsOverviewCard({ item }: { item: NavItemWithSubmenu }) {
  const feature = menuFeatures[item.label];
  if (!feature) return null;

  return (
    <NavigationMenuLink asChild>
      <Link
        href={feature.href}
        className='block rounded-md bg-muted/30 px-3 py-3 no-underline outline-none transition-colors hover:bg-accent focus:bg-accent'
      >
        <div className={cn(HEADER_MENU_STYLES.itemTextStrong, 'text-slate-900')}>
          {feature.title}
        </div>
        <div className={cn(HEADER_MENU_STYLES.mutedSmall, 'mt-2 text-secondary font-medium')}>
          View all programs
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

/**
 * FeaturedMenuCard - Displays the featured section with gradient background
 */
function FeaturedMenuCard({ item, feature }: FeaturedMenuCardProps) {
  return (
    <li className='row-span-4'>
      <NavigationMenuLink asChild>
        <Link
          className='flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
          href={feature.href}
        >
          <div className='mb-2 mt-4 text-lg font-medium'>{feature.title}</div>
          <p className='text-sm leading-tight text-muted-foreground'>
            {feature.description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

/**
 * NavMenuList - Reusable component for rendering navigation items
 */
function NavMenuList({ items, textColor, children }: NavMenuListProps) {
  return (
    <>
      {items.map((item) =>
        item.submenu ? (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuTrigger
              className={cn(
                TRIGGER_STYLE_BASE,
                textColor,
                'cursor-pointer data-[state=open]:hover:bg-transparent ',
              )}
            >
              {item.label.toUpperCase()}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {item.label === 'Academics' ? (
                <div className={cn(ACADEMICS_MEGA_MENU_WIDTH, 'p-3')}>
                  <AcademicsMegaMenu item={item} />
                </div>
              ) : (
                <ul className={SUBMENU_CONTAINER_STYLE}>
                  {/* Featured section */}
                  <FeaturedMenuCard
                    item={item}
                    feature={menuFeatures[item.label]}
                  />
                  {/* List items */}
                  {item.submenu.map((subItem) => (
                    <ListItem
                      key={subItem.href}
                      href={subItem.href}
                      title={subItem.label}
                      description={subItem.description}
                    />
                  ))}
                </ul>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem key={item.href}>
            <MainMenuButton asChild>
              <Link href={item.href}>{item.label.toUpperCase()}</Link>
            </MainMenuButton>
          </NavigationMenuItem>
        ),
      )}
      {children}
    </>
  );
}
function AcademicsMegaMenu({ item }: { item: NavItemWithSubmenu }) {
  type AcademicCategory = (typeof academicProgramGroups)[number]['category'];

  // 1. 초기값 설정 (Graduate 우선, 없으면 첫 번째)
  const defaultCategory: AcademicCategory =
    academicProgramGroups.find((g) => g.category === 'Graduate')?.category ??
    academicProgramGroups[0]?.category ??
    'Undergraduate';

  const [activeCategory, setActiveCategory] =
    React.useState<AcademicCategory>(defaultCategory);

  const activeGroup =
    academicProgramGroups.find((g) => g.category === activeCategory) ??
    academicProgramGroups[0];

  return (
    // w-[900px] 정도로 고정폭을 주면 가장 안정적입니다.
    <div className='w-[850px] overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-slate-900/5'>
      
      {/* 1. Header: 타이틀과 전체보기 링크만 남겨서 깔끔하게 */}
      <div className='flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4'>
        <div>
          <h4 className='text-sm font-medium text-slate-900'>
            Academic Programs
          </h4>
          <p className='mt-1 text-xs text-muted-foreground'>
            Explore our academic programs.
          </p>
        </div>
        
        {/* All Programs 버튼을 눈에 띄게 배치 */}
        <NavigationMenuLink asChild>
          <Link
            href={item.href}
            className='flex flex-row items-center justify-between gap-1.5 text-xs font-medium text-secondary hover:text-secondary/80 hover:underline'
          >
            <span>View All Programs</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </NavigationMenuLink>
      </div>

      {/* 2. Body: 좌우 분할 레이아웃 */}
      <div className='flex min-h-[400px]'> {/* 최소 높이를 주어 안정감 확보 */}
        
        {/* Left Sidebar: Categories + Quick Links */}
        <div className='flex w-[240px] shrink-0 flex-col justify-between border-r border-slate-100 bg-slate-50/50 p-3'>
          
          {/* Categories (Tabs) */}
          <div className='space-y-1'>
            {academicProgramGroups.map((group) => {
              const isActive = group.category === activeCategory;
              return (
                <button
                  key={group.category}
                  type='button'
                  // 클릭과 호버 둘 다 지원 (UX 접근성)
                  onClick={() => setActiveCategory(group.category)}
                  onMouseEnter={() => setActiveCategory(group.category)}
                  className={cn(
                    'group flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    isActive
                      ? 'bg-white text-secondary shadow-sm ring-1 ring-slate-200'
                      : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900'
                  )}
                >
                  <span>{group.category}</span>
                  {/* Active일 때 화살표 아이콘 표시 (선택됨을 강조) */}
                  {isActive && (
                    <div className='h-1.5 w-1.5 rounded-full bg-secondary' />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Links (하단으로 이동 - 안정적 배치) */}
          <div className='mt-auto pt-6'>
            <div className='mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
              Resources
            </div>
            <ul className='space-y-0.5'>
              {item.submenu?.map((subItem) => (
                <li key={subItem.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={subItem.href}
                      className='block rounded-md px-3 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 hover:text-secondary'
                    >
                      {subItem.label}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content: Programs Grid */}
        <div className='flex-1 bg-white p-6'>
          {/* Active Category Title (선택사항 - 없어도 됨) */}
          <div className='mb-4 flex items-center gap-2'>
            <span className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
              {activeGroup?.category}
            </span>
            <div className='h-px flex-1 bg-slate-100' />
          </div>

          {/* Grid Layout - Scroll 제거하고 높이 자동 조절 */}
          <ul className='grid grid-cols-2 gap-3'>
            {activeGroup?.items.map((program) => {
              const { name, abbr } = splitProgramLabel(program.label);
              return (
                <li key={program.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={program.href}
                      className='group flex h-full items-start gap-3 rounded-lg border border-slate-100 bg-white p-3 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5'
                    >
                      {/* Abbreviation Badge */}
                      <span className='mt-0.5 inline-flex h-6 min-w-12 items-center justify-center rounded bg-slate-100 px-1.5 text-[11px] font-semibold text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary transition-colors'>
                        {abbr || 'DEG'}
                      </span>
                      
                      {/* Title & Description */}
                      <div className='flex flex-col gap-0.5'>
                        <span className='text-sm font-medium text-slate-900 group-hover:text-secondary transition-colors'>
                          {name}
                        </span>
                        {/* description이 있다면 보여주기 (옵션) */}
                        {/* {program.description && (
                          <span className='text-xs text-slate-500 line-clamp-1'>
                            {program.description}
                          </span>
                        )} */}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// Main Component
// =============================================================================

export function DesktopMainNav({ bottomBarHeight }: DesktopMainNavProps) {
  // Split navigation items for left and right sides
  const leftNavItems = mainNavigation.slice(0, 3); // First 3 items
  const rightNavItems = mainNavigation.slice(3); // Remaining items

  return (
    <nav
      className='hidden desktop:block bg-white shadow-sm tracking-wide'
      aria-label='Main'
    >
      <div className={cn('relative max-w-[1440px] mx-auto', CONTAINER_PADDING)}>
        {/* Desktop Navigation - Grid Layout with responsive height */}
        <div
          className='grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 md:gap-x-2 xl:gap-x-10'
          style={{ height: `${bottomBarHeight}px` }}
        >
          {/* Left Navigation */}
          <NavigationMenu className='justify-end max-w-none'>
            <NavigationMenuList className={cn('gap-0', MENU_GAP)}>
              <NavMenuList items={leftNavItems} textColor='text-primary' />
            </NavigationMenuList>
          </NavigationMenu>

          {/* Center Logo Spacer - matches logo width exactly */}
          <div className='shrink-0' style={{ width: LOGO_RESPONSIVE_WIDTH }} />

          {/* Right Navigation */}
          <NavigationMenu className='justify-start max-w-none'>
            <NavigationMenuList className={cn('gap-0', MENU_GAP)}>
              <NavMenuList items={rightNavItems} textColor='text-black'>
                {/* Apply Button - only appears in right navigation */}
                <NavigationMenuItem>
                  <HeaderActionButton asChild>
                    <Link href={actionButtons.apply.href}>
                      {actionButtons.apply.label.toUpperCase()}
                    </Link>
                  </HeaderActionButton>
                </NavigationMenuItem>
              </NavMenuList>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
