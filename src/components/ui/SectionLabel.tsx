export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] font-medium tracking-[0.1em] uppercase text-neutral-400 mb-5">
      {children}
    </p>
  );
}
