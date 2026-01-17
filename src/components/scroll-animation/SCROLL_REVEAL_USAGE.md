# ScrollReveal Component 사용 가이드

`framer-motion`을 기반으로 한 스크롤 트리거 애니메이션 컴포넌트입니다.

## 기본 사용법

```tsx
'use client';

import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function MyComponent() {
  return (
    <section>
      <ScrollReveal variant="fade-up" delay={0} duration={0.6}>
        <h1>제목</h1>
        <p>본문 내용</p>
      </ScrollReveal>
    </section>
  );
}
```

## Props

### ScrollReveal

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | 애니메이션을 적용할 내용물 |
| `variant` | `'fade-up' \| 'zoom-in' \| 'fade-only'` | `'fade-up'` | 애니메이션 종류 |
| `delay` | `number` | `0` | 시작 지연 시간 (초) |
| `duration` | `number` | `0.6` | 애니메이션 지속 시간 (초, 0.5-0.7 권장) |
| `stagger` | `boolean` | `false` | 자식 요소들에 시차 효과 적용 여부 |
| `className` | `string` | - | 추가 CSS 클래스 |

### ScrollRevealChild

stagger 효과를 사용할 때 각 자식 요소를 감쌀 때 사용합니다.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | 애니메이션을 적용할 내용물 |
| `variant` | `'fade-up' \| 'zoom-in' \| 'fade-only'` | `'fade-up'` | 애니메이션 종류 |
| `duration` | `number` | `0.6` | 애니메이션 지속 시간 (초) |
| `className` | `string` | - | 추가 CSS 클래스 |

## 애니메이션 Variant

### `fade-up` (기본값)
- **사용 대상**: 텍스트 (제목, 본문), 일반 콘텐츠
- **효과**: 아래에서 위로 30px 이동하며 페이드 인

### `zoom-in`
- **사용 대상**: 이미지, 카드, 시각적 요소
- **효과**: 95% 크기에서 100%로 확대되며 페이드 인

### `fade-only`
- **사용 대상**: 단순히 나타나기만 하면 되는 요소
- **효과**: 페이드 인만 (이동 없음)

## 사용 예시

### 예시 1: 단일 요소 (텍스트)

```tsx
'use client';

import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function TextSection() {
  return (
    <section>
      <ScrollReveal variant="fade-up" delay={0} duration={0.6}>
        <h1>제목</h1>
        <p>본문 내용입니다.</p>
      </ScrollReveal>
    </section>
  );
}
```

### 예시 2: 이미지 (zoom-in)

```tsx
'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function ImageSection() {
  return (
    <section>
      <ScrollReveal variant="zoom-in" delay={0.15} duration={0.7}>
        <div className="relative w-full aspect-4/3">
          <Image
            src="/image.jpg"
            alt="이미지"
            fill
            className="object-cover"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
```

### 예시 3: 순차 애니메이션 (Stagger)

여러 요소가 순차적으로 나타나게 하려면 `stagger` prop과 `ScrollRevealChild`를 사용합니다.

```tsx
'use client';

import { ScrollReveal, ScrollRevealChild } from '@/components/ui/scroll-reveal';

export function StaggeredSection() {
  return (
    <section>
      <ScrollReveal variant="fade-up" delay={0} duration={0.6} stagger>
        <div className="flex flex-col gap-4">
          <ScrollRevealChild variant="fade-up" duration={0.6}>
            <h2>제목</h2>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up" duration={0.6}>
            <p>첫 번째 단락</p>
          </ScrollRevealChild>
          
          <ScrollRevealChild variant="fade-up" duration={0.6}>
            <p>두 번째 단락</p>
          </ScrollRevealChild>
        </div>
      </ScrollReveal>
    </section>
  );
}
```

### 예시 4: 텍스트와 이미지 함께 사용

```tsx
'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function TextWithImageSection() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* 텍스트: fade-up */}
        <ScrollReveal variant="fade-up" delay={0} duration={0.6}>
          <div className="flex-1">
            <h1>제목</h1>
            <p>본문 내용입니다.</p>
          </div>
        </ScrollReveal>

        {/* 이미지: zoom-in, 약간의 지연 */}
        <ScrollReveal variant="zoom-in" delay={0.15} duration={0.7}>
          <div className="flex-1 relative aspect-4/3">
            <Image
              src="/image.jpg"
              alt="이미지"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

### 예시 5: 카드 그리드 (순차적 delay)

```tsx
'use client';

import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function CardGrid({ items }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <ScrollReveal
            key={item.id}
            variant="zoom-in"
            delay={index * 0.1}  // 각 카드마다 0.1초씩 지연
            duration={0.7}
          >
            <div className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

## 조정 팁

### 애니메이션을 더 빠르게
```tsx
<ScrollReveal duration={0.4} delay={0}>
```

### 애니메이션을 더 느리게
```tsx
<ScrollReveal duration={0.8} delay={0}>
```

### 더 많은 지연
```tsx
<ScrollReveal delay={0.2} duration={0.6}>
```

### zoom-in 대신 fade-up 사용
```tsx
<ScrollReveal variant="fade-up" delay={0} duration={0.6}>
```

## 현재 적용된 컴포넌트

다음 컴포넌트들에 ScrollReveal이 적용되어 있습니다:

- ✅ `CallToAction` - stagger 효과로 순차 애니메이션
- ✅ `TextWithImageSection` - 텍스트: fade-up, 이미지: zoom-in
- ✅ `AcademicsSection` - 헤더: fade-up, 카드: zoom-in (순차적)
- ✅ `InformationResourcesSection` - 헤더: fade-up, 카드: zoom-in (순차적)
- ✅ `TwoColumnTextSection` - 제목과 콘텐츠에 순차적 fade-up

## 성능 최적화

- `viewport={{ once: true, margin: '-10% 0px' }}` 설정으로 요소가 화면 하단 10% 지점에 도달하면 애니메이션이 시작됩니다
- `once: true`로 애니메이션은 한 번만 실행되어 성능을 최적화합니다
- 부드러운 easing 곡선 `[0.25, 0.46, 0.45, 0.94]`를 사용하여 자연스러운 움직임을 제공합니다
