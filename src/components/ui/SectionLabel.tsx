export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-ras-green-600 mb-4">
      <span className="w-6 h-px bg-ras-green-400 mr-2" />
      {children}
    </p>
  );
}
