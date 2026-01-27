import { ResourcesSidebar } from '@/components/pages/AcademicPage/components/ResourcesSidebar';
import { Button } from '@/components/ui/button';
import { callToActionContent } from '@/config/home-content';
import { ArrowRight, CircleAlert } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { href, buttonText } = callToActionContent;

  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 lg:px-10 xl:px-14 lg:pt-20 lg:pb-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Academics
              </p>
              <h1 className="hero-title-sm text-start font-light tracking-tight text-primary lg:tracking-tighter max-w-2xl">
                Academic Resources
              </h1>
              {/* <p className="mt-3 font-sans text-base text-muted-foreground md:text-lg max-w-xl">
                Calendar, course list, and catalog — in one place.
              </p> */}
              <div className="mt-6 h-0.5 w-12 bg-secondary" aria-hidden />
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <Button
                variant="outline"
                size="icon-sm"
                className="text-sm md:text-base font-semibold md:font-normal uppercase rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto px-4 py-3"
                asChild
              >
                <Link href={href} className="flex items-center justify-center gap-2">
                  <CircleAlert className="size-4 md:size-5 shrink-0" />
                  <span className="truncate">{buttonText}</span>
                  <ArrowRight className="size-4 md:size-5 shrink-0" />
                </Link>
              </Button>
              <Button
                size="icon-sm"
                className="text-sm md:text-base font-semibold md:font-normal uppercase rounded-none bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto px-4 py-3"
                asChild
              >
                <Link href={href} className="flex items-center justify-center gap-2">
                  <span>Apply</span>
                  <ArrowRight className="size-4 md:size-5 shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 section-padding-sm lg:px-10 xl:px-14">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
            <ResourcesSidebar />
            <main className="min-w-0 flex-1 space-y-20 lg:max-w-208">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
