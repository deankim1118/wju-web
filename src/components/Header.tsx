'use client';

import {
  HeaderActionButton,
  MainMenuButton,
  MobileActionButton,
  MobileMenuButton,
  TopMenuButton,
} from '@/components/header-buttons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const handleResize = () => {
      // 화면 너비에 따라 헤더 높이 계산 (100px ~ 80px)
      const width = window.innerWidth;
      // 900px 이상에서만 적용 (모바일은 고정)
      if (width >= 900) {
        // 화면이 작아질수록 헤더 높이도 줄어듦
        // 최대 100px (큰 화면), 최소 80px (작은 화면)
        const calculatedHeight = Math.max(
          80,
          Math.min(100, 80 + (width - 900) * 0.02),
        );
        setHeaderHeight(calculatedHeight);
      } else {
        setHeaderHeight(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleResize(); // 초기값 설정
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 헤더 높이에 따른 상단/하단 메뉴 높이 계산
  const topBarHeight = Math.round((headerHeight / 100) * 47); // 47px -> 38px
  const bottomBarHeight = headerHeight - topBarHeight; // 나머지가 하단

  // 공통 클래스 상수
  const containerPadding = 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16';
  const menuGap = 'gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6';
  const topMenuGap = 'gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8';

  return (
    <header
      className='sticky top-0 z-50 w-full transition-all duration-300'
      id='header'
      data-scrolldown={isScrolled}
    >
      {/* Skip to main content for accessibility */}
      <a
        href='#maincontent'
        className='sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-100 focus:bg-[#1e2d3d] focus:text-white focus:px-4 focus:py-2'
      >
        Skip to main content
      </a>

      {/* Logo Container - Always at top */}
      <Link
        href='/'
        className={`absolute left-1/2 -top-1 z-50 -translate-x-1/2 transition-all duration-300 w-[clamp(330px,29vw,370px)] ${
          isScrolled && headerHeight > 80 ? 'scale-90' : 'scale-100'
        }`}
        aria-label='Logo'
      >
        {/* Desktop Logo */}
        <Image
          src='/wju-logo.png'
          alt='Washington Jabez University Logo'
          width={320}
          height={80}
          className='hidden min-[900px]:block w-full h-auto object-contain transition-all duration-300'
        />
      </Link>

      {/* Mobile Logo - Centered in header */}
      <Link
        href='/'
        className={`absolute left-1/2 top-0 z-[100] -translate-x-1/2 min-[900px]:hidden transition-all duration-300 ${
          isScrolled ? 'scale-90' : 'scale-100'
        }`}
        aria-label='Logo'
      >
        <Image
          src='/wju-logo-mobile.png'
          alt='Washington Jabez University Logo'
          width={60}
          height={30}
          className='object-contain transition-all duration-300'
        />
      </Link>

      {/* Mobile Navigation Toggle - In top bar */}
      <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
        <SheetTrigger asChild>
          <Button
            id='mobileTogBtn'
            variant='ghost'
            size='icon'
            className='absolute left-4 z-50 min-[900px]:hidden text-white hover:bg-transparent hover:text-white h-auto p-2 '
            style={{
              top: `${topBarHeight / 2}px`,
              transform: 'translateY(-50%)',
            }}
            aria-label={isMobileNavOpen ? 'Hide main menu' : 'Show main menu'}
            aria-expanded={isMobileNavOpen}
          >
            <div className='flex flex-col gap-1.5'>
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileNavOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileNavOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMobileNavOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent
          side='top'
          noOverlay
          className='min-[900px]:hidden w-full border-0 p-0 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top [&>button]:hidden z-40'
          style={{ top: `${topBarHeight}px` }}
        >
          <div className='px-4 py-4 space-y-1'>
            {/* Main Navigation Items */}
            <MobileMenuButton variant='main'>ABOUT</MobileMenuButton>
            <MobileMenuButton variant='main'>ACADEMICS</MobileMenuButton>
            <MobileMenuButton variant='main'>ADMISSIONS</MobileMenuButton>
            <MobileMenuButton variant='main'>CHURCH MUSIC</MobileMenuButton>
            <MobileActionButton>APPLY</MobileActionButton>

            {/* Top Navigation Items (from Brand Bar) */}
            <Separator className='my-3' />
            <div className='space-y-1'>
              <MobileMenuButton variant='top'>QUICK LINKS</MobileMenuButton>
              <MobileMenuButton variant='top'>VISIT US</MobileMenuButton>
              <MobileMenuButton variant='top'>REQUEST INFO</MobileMenuButton>
              <MobileActionButton variant='secondary'>
                MY WJU
              </MobileActionButton>
              <MobileMenuButton variant='top'>LANGUAGE</MobileMenuButton>
              <MobileMenuButton variant='top'>SUPPORT</MobileMenuButton>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Header Navigation */}
      <div className='relative'>
        {/* Brand Bar - Top Navigation - Responsive height (34px ~ 42px) */}
        <div
          className='bg-[#1e2d3d] text-white transition-all duration-300'
          style={{ height: `${topBarHeight}px` }}
        >
          <div className='h-full max-w-[1920px] mx-auto'>
            {/* Desktop Menu */}
            <div
              className={`hidden min-[900px]:flex items-center justify-between h-full lg:tracking-wide ${containerPadding}`}
            >
              {/* Left side links */}
              <div className={`flex ${topMenuGap}`}>
                <TopMenuButton>QUICK LINKS</TopMenuButton>
                <TopMenuButton>VISIT US</TopMenuButton>
                <TopMenuButton>REQUEST INFO</TopMenuButton>
              </div>
              {/* Right side elements */}
              <div className={`flex ${menuGap}`}>
                <HeaderActionButton variant='secondary'>
                  MY WJU
                </HeaderActionButton>
                <TopMenuButton>LANGUAGE</TopMenuButton>
                <TopMenuButton>SUPPORT</TopMenuButton>
              </div>
            </div>
            {/* Mobile - Empty space to maintain background */}
            <div className='min-[900px]:hidden h-full'></div>
          </div>
        </div>

        {/* Main Navigation - Hidden on mobile */}
        <nav
          className='hidden min-[900px]:block bg-white shadow-sm tracking-wider'
          aria-label='Main'
        >
          <div
            className={`relative max-w-[1920px] mx-auto ${containerPadding}`}
          >
            {/* Desktop Navigation - Grid Layout with responsive height */}
            <div
              className='grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3 md:gap-24 lg:gap-22 xl:gap-20 transition-all duration-300'
              style={{ height: `${bottomBarHeight}px` }}
            >
              {/* Left Navigation */}
              <ul className={`flex items-center ${menuGap} justify-end`}>
                <li>
                  <MainMenuButton>ABOUT</MainMenuButton>
                </li>
                <li>
                  <MainMenuButton>ACADEMICS</MainMenuButton>
                </li>
                <li>
                  <MainMenuButton>ADMISSIONS</MainMenuButton>
                </li>
              </ul>

              {/* Center Logo Spacer - matches logo width, maintains consistent padding from logo */}
              <div
                className='shrink-0'
                style={{
                  width: 'clamp(180px, 20vw, 320px)',
                }}
              ></div>

              {/* Right Navigation */}
              <ul className={`flex items-center ${menuGap} justify-start`}>
                <li>
                  <MainMenuButton>CHURCH MUSIC</MainMenuButton>
                </li>
                <li>
                  <HeaderActionButton>APPLY</HeaderActionButton>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Skip link anchor */}
      <div id='maincontent' className='sr-only'>
        Main content
      </div>
    </header>
  );
}
