'use client';

import {
  DESKTOP_BREAKPOINT,
  HEADER_HEIGHT_BASE,
  HEADER_HEIGHT_MAX,
  HEADER_HEIGHT_MIN,
  HEADER_HEIGHT_MOBILE,
  SCROLL_THRESHOLD,
  TOP_BAR_HEIGHT_RATIO,
} from '@/components/layout/header/constants';
import { useEffect, useState } from 'react';

type UseHeaderControlReturn = {
  isScrolled: boolean;
  headerHeight: number;
  topBarHeight: number;
  bottomBarHeight: number;
};

/**
 * 헤더의 스크롤 및 리사이즈 상태를 관리하는 커스텀 훅
 * requestAnimationFrame을 사용하여 성능 최적화
 */
export function useHeaderControl(): UseHeaderControlReturn {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(HEADER_HEIGHT_BASE);

  useEffect(() => {
    let scrollFrameId: number | null = null;
    let resizeFrameId: number | null = null;

    const handleScroll = () => {
      if (scrollFrameId !== null) {
        cancelAnimationFrame(scrollFrameId);
      }

      scrollFrameId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > SCROLL_THRESHOLD);
        scrollFrameId = null;
      });
    };

    const handleResize = () => {
      if (resizeFrameId !== null) {
        cancelAnimationFrame(resizeFrameId);
      }

      resizeFrameId = requestAnimationFrame(() => {
        const width = window.innerWidth;

        if (width >= DESKTOP_BREAKPOINT) {
          // 데스크탑: 화면 너비에 따라 헤더 높이 계산 (100px ~ 80px)
          const calculatedHeight = Math.max(
            HEADER_HEIGHT_MIN,
            Math.min(
              HEADER_HEIGHT_MAX,
              HEADER_HEIGHT_MIN + (width - DESKTOP_BREAKPOINT) * 0.02,
            ),
          );
          setHeaderHeight(calculatedHeight);
        } else {
          // 모바일: 고정 높이
          setHeaderHeight(HEADER_HEIGHT_MOBILE);
        }

        resizeFrameId = null;
      });
    };

    // 초기값 설정
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (scrollFrameId !== null) {
        cancelAnimationFrame(scrollFrameId);
      }
      if (resizeFrameId !== null) {
        cancelAnimationFrame(resizeFrameId);
      }
    };
  }, []);

  // 헤더 높이에 따른 상단/하단 메뉴 높이 계산
  const topBarHeight = Math.round(headerHeight * TOP_BAR_HEIGHT_RATIO);
  const bottomBarHeight = headerHeight - topBarHeight;

  return {
    isScrolled,
    headerHeight,
    topBarHeight,
    bottomBarHeight,
  };
}
