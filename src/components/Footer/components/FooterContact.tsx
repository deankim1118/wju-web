type FooterContactProps = Record<string, never>;

export function FooterContact({}: FooterContactProps) {
  return (
    <div className='flex flex-col justify-start items-start gap-4'>
      <h5 className='font-garamond font-bold leading-tight'>
        Washington Jabez
        <br />
        University
      </h5>
      <address className='not-italic flex flex-col gap-1.5 text-sm leading-6'>
        <a
          href='tel:703-489-4168'
          className='hover:text-gray-300 transition-colors'
        >
          703-489-4168 (En)
        </a>
        <a
          href='tel:703-232-5452'
          className='hover:text-gray-300 transition-colors'
        >
          703-232-5452 (Ko)
        </a>
        <a
          href='mailto:admin@wjuin.org'
          className='hover:text-gray-300 transition-colors'
        >
          Admin@wjuin.org
        </a>
        <span>4421 Dale Blvd. Woodbridge, VA 22191</span>
      </address>
    </div>
  );
}
