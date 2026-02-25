type FooterContactProps = {
  universityName?: string;
  phoneEn?: string;
  phoneKo?: string;
  email?: string;
  address?: string;
};

export function FooterContact({
  universityName = 'Washington Jabez University',
  phoneEn = '123-456-7890',
  phoneKo = '123-456-7890',
  email = 'admin@wjuin.org',
  address = '4421 Dale Blvd. Woodbridge, VA 22191',
}: FooterContactProps) {
  // Split university name by spaces for line breaks
  const nameParts = universityName.split(' ');
  const shouldBreak = nameParts.length >= 2;

  return (
    <div className='flex flex-col justify-start items-start gap-4'>
      <h5 className='font-garamond font-bold leading-tight'>
        {shouldBreak ? (
          <>
            {nameParts.slice(0, -1).join(' ')}
            <br />
            {nameParts[nameParts.length - 1]}
          </>
        ) : (
          universityName
        )}
      </h5>
      <address className='not-italic flex flex-col gap-1.5 text-sm leading-6'>
        <span className='hover:text-gray-300 transition-colors'>
          {phoneEn} (En)
        </span>
        <span className='hover:text-gray-300 transition-colors'>
          {phoneKo} (Ko)
        </span>
        <a
          href={`mailto:${email}`}
          className='hover:text-gray-300 transition-colors'
        >
          {email}
        </a>
        <span>{address}</span>
      </address>
    </div>
  );
}
