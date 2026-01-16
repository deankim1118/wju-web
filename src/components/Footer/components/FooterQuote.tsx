export type FooterQuoteProps = {
  quote: string;
};

export function FooterQuote({ quote }: FooterQuoteProps) {
  return (
    <div className='w-full max-w-[1560px] px-6 py-6 flex justify-center items-center'>
      <blockquote className='text-center text-gray-400 text-2xl md:text-3xl lg:text-4xl font-garamond leading-relaxed'>
        {quote}
      </blockquote>
    </div>
  );
}
