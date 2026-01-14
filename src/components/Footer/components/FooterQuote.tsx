type FooterQuoteProps = Record<string, never>;

export function FooterQuote({}: FooterQuoteProps) {
  return (
    <div className='w-full max-w-[1440px] px-6 py-6 flex justify-center items-center'>
      <blockquote className='text-center text-gray-400 text-2xl md:text-3xl lg:text-4xl font-garamond leading-relaxed'>
        "Go therefore and make disciples of all nations, teaching them to
        observe all that I have commanded you." (Matthew 28:19-20)
      </blockquote>
    </div>
  );
}
