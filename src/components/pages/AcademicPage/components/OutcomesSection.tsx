import {
  ScrollText,
  Target,
  Users,
  Heart,
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { OutcomeItem } from '@/config/academics/program-extended-types';

const ICON_MAP = {
  ScrollText,
  Target,
  Users,
  Heart,
  Globe,
} as const;

type OutcomesSectionProps = {
  outcomes: OutcomeItem[];
};

export function OutcomesSection({ outcomes }: OutcomesSectionProps) {
  return (
    <section aria-labelledby="outcomes-heading" className="space-y-8">
      <h2
        id="outcomes-heading"
        className="font-serif text-2xl font-semibold text-primary md:text-3xl"
      >
        Learning Outcomes
      </h2>
      <p className="text-muted-foreground">Upon successful completion of the MDiv program, students will be able to:</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((outcome) => {
          const Icon = ICON_MAP[outcome.icon as keyof typeof ICON_MAP];
          return (
            <Card
              key={outcome.id}
              className="rounded-lg border border-border/60 bg-card shadow-sm"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  {Icon && (
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                  )}
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    {outcome.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
