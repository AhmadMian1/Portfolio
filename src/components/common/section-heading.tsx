type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-slate-100 md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-sm text-slate-400 md:text-base">{description}</p> : null}
    </div>
  );
}
