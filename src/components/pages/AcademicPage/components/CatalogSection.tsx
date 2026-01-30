'use client';

import { ResourcePageHeader } from '@/components/pages/AcademicPage/components/ResourcePageHeader';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { getPdfFilename, getPdfUrl } from '@/lib/file-utils';
import { Download, ExternalLink, FileText, Maximize2 } from 'lucide-react';

/** Catalog Global에서 오는 데이터 구조 (depth 1 시 file 풀 populated) */
export type CatalogData = {
  title: string;
  subtitle: string;
  file?: { url?: string | null; filename?: string | null } | number | null;
} | null;

type CatalogSectionProps = {
  catalog: CatalogData;
};

function PdfLinkButton({
  href,
  download,
  variant = 'outline',
  size = 'sm',
  className,
  children,
}: {
  href: string;
  download?: string;
  variant?: 'outline' | 'secondary' | 'ghost';
  size?: 'sm';
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a href={href} download={download} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    </Button>
  );
}

export function CatalogSection({ catalog }: CatalogSectionProps) {
  const pdfUrl = catalog ? getPdfUrl(catalog.file) : null;

  if (!catalog || !pdfUrl) {
    return (
      <section aria-labelledby='academic-catalog-heading' className='space-y-6'>
        <ResourcePageHeader
          title='Academic Catalog'
          description='Programs, policies, and course descriptions.'
          id='academic-catalog-heading'
        />
        <div className='rounded-md border border-border bg-card p-8 text-center'>
          <FileText className='mx-auto size-10 text-muted-foreground/60' />
          <p className='mt-3 text-sm text-muted-foreground'>
            No catalog has been added yet. Upload the admission PDF in the
            admin.
          </p>
        </div>
      </section>
    );
  }

  const downloadFilename = getPdfFilename(catalog.file);

  return (
    <section aria-labelledby='academic-catalog-heading' className='space-y-6'>
      <ResourcePageHeader
        title='Academic Catalog'
        description='Programs, policies, and course descriptions.'
        id='academic-catalog-heading'
      />

      <div className='rounded-md border border-border bg-card overflow-hidden'>
        <div className='border-b border-border bg-muted/40 px-4 py-3 sm:px-6'>
          <h3 className='font-medium text-black'>{catalog.title}</h3>
          <p className='mt-0.5 text-sm text-slate-500'>{catalog.subtitle}</p>
        </div>

        <div className='p-4 sm:p-6 space-y-4'>
          <div className='flex flex-wrap gap-2'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='default'
                  size='sm'
                  className='rounded-md gap-2 bg-secondary'
                >
                  <Maximize2 className='size-4' />
                  View PDF
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='flex w-full max-w-3xl flex-col gap-0 sm:max-w-5xl'
              >
                <SheetHeader className='shrink-0 border-b border-border pb-4 pr-10'>
                  <SheetTitle>{catalog.title}</SheetTitle>
                  <SheetDescription>{catalog.subtitle}</SheetDescription>
                </SheetHeader>
                <div className='relative min-h-0 flex-1 overflow-hidden'>
                  <iframe
                    src={pdfUrl}
                    title={catalog.title}
                    className='absolute inset-0 h-full w-full border-0'
                  />
                </div>
                <div className='flex shrink-0 flex-wrap gap-2 border-t border-border px-4 pb-4 pt-4'>
                  <PdfLinkButton
                    href={pdfUrl}
                    variant='outline'
                    className='rounded-md gap-2 text-primary border-primary'
                  >
                    <ExternalLink className='size-4' />
                    Open in new tab
                  </PdfLinkButton>
                  <PdfLinkButton
                    href={pdfUrl}
                    download={downloadFilename}
                    variant='secondary'
                    className='rounded-md gap-2'
                  >
                    <Download className='size-4' />
                    Download
                  </PdfLinkButton>
                </div>
              </SheetContent>
            </Sheet>
            <PdfLinkButton
              href={pdfUrl}
              download={downloadFilename}
              variant='outline'
              className='rounded-md gap-2 text-primary border-primary'
            >
              <Download className='size-4' />
              Download PDF
            </PdfLinkButton>
            <PdfLinkButton
              href={pdfUrl}
              variant='ghost'
              className='rounded-md gap-2 text-primary'
            >
              <ExternalLink className='size-4' />
              Open in new tab
            </PdfLinkButton>
          </div>
          <p className='text-sm text-slate-700'>
            Click &quot;View PDF&quot; to open a larger viewer, or download /
            open in a new tab.
          </p>
        </div>
      </div>
    </section>
  );
}
