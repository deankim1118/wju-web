/**
 * Header 관련 상수 정의
 */

// 브레이크포인트
export const DESKTOP_BREAKPOINT = 1024; // px

// 헤더 높이 관련
export const HEADER_HEIGHT_MAX = 100; // px
export const HEADER_HEIGHT_MIN = 80; // px
export const HEADER_HEIGHT_MOBILE = 100; // px
export const HEADER_HEIGHT_BASE = 100; // px

// 스크롤 임계값
export const SCROLL_THRESHOLD = 50; // px

// 높이 계산 비율
export const TOP_BAR_HEIGHT_RATIO = 0.47; // 47%

// 로고 관련
export const LOGO_DESKTOP_WIDTH = 320;
export const LOGO_DESKTOP_HEIGHT = 80;
export const LOGO_MOBILE_WIDTH = 60;
export const LOGO_MOBILE_HEIGHT = 30;

// 로고 반응형 width (HeaderLogo와 DesktopMainNav 중앙 spacer에서 공유)
export const LOGO_RESPONSIVE_WIDTH = 'clamp(330px, 29vw, 370px)';

// 컨테이너 최대 너비
export const CONTAINER_MAX_WIDTH = 1920; // px

// Tailwind 클래스 상수
export const CONTAINER_PADDING = 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16';
export const MENU_GAP = 'gap-4 lg:gap-3 xl:gap-6';
export const MENU_GAP_CENTER = 'gap-2 sm:gap-3 md:gap-24 lg:gap-22 xl:gap-20';
export const TOP_MENU_GAP = 'gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8';

/**
 * Header menu typography & shared styles (single source of truth)
 * NOTE: Keep these in sync with existing header UI expectations.
 */
export const HEADER_MENU_STYLES = {
  // Desktop trigger (NavigationMenuTrigger) text style
  desktopTrigger:
    'btn-sm bg-transparent sm:text-xs lg:text-[13px] xl:text-sm font-medium hover:text-secondary hover:bg-transparent data-[state=open]:text-secondary data-[state=open]:bg-transparent rounded-none h-auto p-0 border-0',

  // Desktop simple link button (MainMenuButton)
  desktopMainButton:
    'btn-sm text-black sm:text-xs lg:text-[13px] xl:text-sm font-medium hover:text-secondary hover:bg-transparent rounded-none h-auto p-0',

  // Top bar menu button (TopMenuButton)
  topMenuButton:
    'btn-sm text-white sm:text-xs lg:text-[12px] xl:text-sm hover:text-white hover:bg-transparent hover:underline rounded-none h-auto p-0',

  // Mobile accordion trigger (MobileMainNav)
  mobileAccordionTrigger:
    'btn-sm w-full justify-start font-medium text-black hover:text-secondary hover:bg-transparent hover:no-underline rounded-none h-auto py-2 px-3 cursor-pointer',

  // Mobile menu button base (MobileMenuButton)
  mobileMenuButtonBase:
    'btn-sm w-full justify-start font-medium hover:text-secondary hover:bg-transparent rounded-none h-auto py-2',

  // Mobile submenu link (used inside accordion content)
  mobileSubmenuLink:
    'block text-sm py-2 text-black hover:text-secondary transition-colors',

  // Shared text styles
  itemText: 'text-sm font-medium leading-none',
  itemTextStrong: 'text-sm font-semibold leading-none',
  sectionLabel: 'text-xs font-semibold uppercase tracking-wide text-muted-foreground',
  mutedSmall: 'text-xs text-muted-foreground',

  // Desktop submenu (NavigationMenu content links)
  desktopSubmenuLinkBase:
    'block select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent',
  desktopSubmenuLinkPadding: 'p-3',
  desktopSubmenuTitle: 'text-sm font-medium leading-none',
  desktopSubmenuDescription: 'line-clamp-2 text-sm leading-snug text-muted-foreground',
} as const;
