import { CheckCircle } from 'lucide-react';

type AdmissionsSectionProps = {
  intro: string[];
  sections: {
    id: string;
    title: string;
    items: string[];
  }[];
};

export function AdmissionsSection({ intro, sections }: AdmissionsSectionProps) {
  return (
    <section aria-labelledby="admissions-heading" className="space-y-6">
      <h2
        id="admissions-heading"
      >
        Admission Requirements
      </h2>

      <div className="space-y-4 text-muted-foreground">
        {intro.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id}>
            <h3 className="mb-3 font-semibold text-slate-900">
              {section.title}
            </h3>
            <ul className="space-y-2.5" role="list">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-900"
                >
                  <CheckCircle
                    className="size-5 shrink-0 text-primary mt-0.5"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
