export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] uppercase text-ras-green-500 mb-4 flex items-center gap-2">
      <span className="inline-block w-6 h-px bg-ras-green-400" />
      {children}
    </p>
  );
}
