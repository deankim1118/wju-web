/**
 * Hero 오버레이 컴포넌트
 * title/버튼이 있으면 강한 그라데이션, 없으면 최소 오버레이를 표시합니다.
 */
type HeroOverlayProps = {
  hasContent: boolean;
};

export function HeroOverlay({ hasContent }: HeroOverlayProps) {
  if (hasContent) {
    return (
      <>
        {/* 하단에서 상단으로 그라데이션 오버레이 (텍스트 가독성 향상) */}
        <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/25' />
        {/* 중앙 영역 약간 밝게 (텍스트 영역 강조) - radial gradient */}
        <div className='absolute inset-0 bg-gradient-radial' />
        {/* 추가 깊이감을 위한 미묘한 오버레이 */}
        <div className='absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20' />
      </>
    );
  }

  /* title이 없을 때: 이미지가 잘 보이도록 최소한의 오버레이 */
  return (
    <div className='absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent' />
  );
}
