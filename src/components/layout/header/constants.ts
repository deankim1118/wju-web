/**
 * Header 관련 상수 정의
 */

// 브레이크포인트
export const DESKTOP_BREAKPOINT = 1024; // px
export const DESKTOP_ONLY = 980; // px

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
