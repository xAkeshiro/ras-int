export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-ras-green-600 mb-3">
      {children}
    </p>
  );
}
