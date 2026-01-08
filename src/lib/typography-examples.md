# Typography 사용 가이드

피그마 디자인 시스템에 맞춘 타이포그래피 유틸리티를 사용하는 방법입니다.

## 기본 사용법

### 1. 직접 클래스 사용

```tsx
import { typography } from '@/lib/typography';
import { cn } from '@/lib/utils';

// Hero Title
<h1 className={cn(typography.heroTitle, 'text-white')}>
  Your Calling Begins Here
</h1>

// H1
<h1 className={cn(typography.h1, 'text-primary')}>
  Why Washington Jabez University?
</h1>

// Button
<button className={cn(typography.button16, 'text-secondary')}>
  Apply Today
</button>
```

### 2. typoVariant 헬퍼 사용 (권장)

```tsx
import { typoVariant } from '@/lib/typography';

// H1 with additional classes
<h1 className={typoVariant('h1', 'text-primary', 'mb-4')}>
  Title
</h1>

// Button with custom styling
<button className={typoVariant('button16', 'text-white', 'bg-secondary')}>
  Click Me
</button>
```

## 사용 가능한 Typography Variants

### Playfair Display (제목용)

- `heroTitle` - 75px/100px, bold, center
- `h1` - 36px/51px, medium, tracking 0.02em
- `h1Bold` - 36px/51px, bold, tracking 0.02em
- `h2Playfair` - 28px/27px, bold, uppercase, tracking 0.05em
- `footerTitle` - 24px/27px, bold

### Inter (본문/버튼용)

- `button20` - 20px/22px, normal, uppercase
- `button16` - 16px/19px, semibold, uppercase, tracking 0.12em
- `button14` - 14px/17px, normal, uppercase
- `subtitle` - 20px/24px, normal
- `bodyBase` - 19.2px/28px, normal
- `description` - 16px/24px, normal
- `description14` - 14px/24px, normal
- `h2Inter` - 28px/27px, bold, uppercase, tracking 0.05em
- `text18` - 18px/22px, normal

### Garamond (인용구/특별한 텍스트)

- `quote` - 48px/54px, normal
- `footerTitleGaramond` - 24px/27px, bold

## 예시

### Hero Section

```tsx
<h1 className={typoVariant('heroTitle', 'text-white')}>
  Your Calling Begins Here
  <span className='block'>This Spring</span>
</h1>
```

### Section Heading

```tsx
<h2 className={typoVariant('h1', 'text-primary', 'mb-4')}>
  Why Washington Jabez University?
</h2>
```

### Button

```tsx
<button
  className={typoVariant('button16', 'text-white', 'bg-secondary', 'px-4 py-2')}
>
  Apply Today
</button>
```

### Body Text

```tsx
<p className={typoVariant('bodyBase', 'text-foreground')}>
  Washington Jabez University is a religious institution...
</p>
```

### Quote

```tsx
<blockquote
  className={typoVariant('quote', 'text-muted-foreground', 'text-center')}
>
  "Go therefore and make disciples of all nations..."
</blockquote>
```
