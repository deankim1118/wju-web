'use client';

import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from '@/components/ui/chart';
import {
  APPLICATION_FEE_NOTE,
  SEMESTER_COST_ESTIMATES,
  SEMESTER_ESTIMATE_NOTE,
  formatCurrency,
  type SemesterEstimate,
} from '@/config/tuition-content';
import { Info } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';

// ─── Chart color per program index ───────────────────────────────────────────

const PROGRAM_COLORS = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
] as const;

const CHART_CONFIG = {
  ba: { label: 'B.A.', color: 'var(--chart-1)' },
  masters: { label: "Master's", color: 'var(--chart-2)' },
  doctoral: { label: 'Doctoral', color: 'var(--chart-3)' },
} satisfies ChartConfig;

// ─── Data transformer ─────────────────────────────────────────────────────────

type ChartRow = { program: string; tuition: number; books: number };

function toChartRows(estimates: SemesterEstimate[]): ChartRow[] {
  return estimates.map((e) => ({
    program: e.program.replace(' Program', ''),
    tuition: e.tuitionTotal,
    books: e.estimatedBooks,
  }));
}

// ─── Custom tooltip ───────────────────────────────────────────────────────────

type TooltipPayloadEntry = { name: string; value: number };

type CustomTooltipProps = {
  active?: boolean;
  payload?: TooltipPayloadEntry[];
  label?: string;
};

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  const tuition = payload.find((p) => p.name === 'tuition')?.value ?? 0;
  const books = payload.find((p) => p.name === 'books')?.value ?? 0;

  return (
    <div className='min-w-[180px] space-y-1.5 rounded-lg border bg-card p-3 shadow-md text-sm'>
      <p className='font-semibold text-slate-900'>{label}</p>
      <div className='flex justify-between gap-8'>
        <span className='text-muted-foreground'>Tuition</span>
        <span className='tabular-nums font-medium'>
          {formatCurrency(tuition)}
        </span>
      </div>
      <div className='flex justify-between gap-8'>
        <span className='text-muted-foreground'>Est. Books</span>
        <span className='tabular-nums font-medium'>
          {formatCurrency(books)}
        </span>
      </div>
      <div className='flex justify-between gap-8 border-t pt-1.5'>
        <span className='font-semibold text-slate-900'>Total Est.</span>
        <span className='tabular-nums font-bold'>
          {formatCurrency(tuition + books)}
        </span>
      </div>
    </div>
  );
}

// ─── Custom legend ────────────────────────────────────────────────────────────

const LEGEND_ITEMS = Object.values(CHART_CONFIG) as Array<{
  label: string;
  color: string;
}>;

function ProgramLegend() {
  return (
    <div className='mt-2 flex flex-wrap justify-center gap-x-5 gap-y-1.5'>
      {LEGEND_ITEMS.map((item) => (
        <div
          key={item.label}
          className='flex items-center gap-1.5 text-xs text-slate-600'
        >
          <span
            className='inline-block h-2.5 w-2.5 rounded-sm'
            style={{ backgroundColor: item.color }}
          />
          {item.label}
          <span className='text-slate-400'>Tuition</span>
        </div>
      ))}
      <div className='flex items-center gap-1.5 text-xs text-slate-400'>
        <span className='inline-block h-2.5 w-2.5 rounded-sm border border-slate-300 bg-muted' />
        Est. Books (lighter)
      </div>
    </div>
  );
}

// ─── Axis formatters ──────────────────────────────────────────────────────────

function yAxisTickFormatter(value: number): string {
  return `$${(value / 1000).toFixed(0)}k`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SemesterCostChart() {
  const data = toChartRows(SEMESTER_COST_ESTIMATES);

  return (
    <div className='space-y-3'>
      {/* <p className='text-sm text-muted-foreground'>{SEMESTER_ESTIMATE_NOTE}</p> */}

      <ChartContainer config={CHART_CONFIG} className='h-[270px] w-full'>
        <BarChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} strokeDasharray='3 3' />
          <XAxis
            dataKey='program'
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={yAxisTickFormatter}
            tick={{ fontSize: 11 }}
            width={42}
          />
          <ChartTooltip
            cursor={{ fill: 'hsl(var(--muted))' }}
            content={<CustomTooltip />}
          />

          {/* Tuition — solid program color */}
          <Bar
            dataKey='tuition'
            stackId='cost'
            name='tuition'
            radius={[0, 0, 4, 4]}
          >
            {data.map((_, i) => (
              <Cell key={`tuition-${i}`} fill={PROGRAM_COLORS[i]} />
            ))}
          </Bar>

          {/* Est. Books — same program color, 35% opacity */}
          <Bar
            dataKey='books'
            stackId='cost'
            name='books'
            radius={[4, 4, 0, 0]}
          >
            {data.map((_, i) => (
              <Cell
                key={`books-${i}`}
                fill={PROGRAM_COLORS[i]}
                fillOpacity={0.35}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>

      <ProgramLegend />

      <div className='flex gap-2.5 rounded-md border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-slate-800'>
        <Info className='mt-0.5 size-4 shrink-0 text-blue-500' aria-hidden />
        <span>{APPLICATION_FEE_NOTE}</span>
      </div>
    </div>
  );
}
