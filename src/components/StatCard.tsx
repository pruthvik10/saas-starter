export default function StatCard({
  title,
  value,
  subtext,
}: { title: string; value: string; subtext: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 lg:p-6 shadow-sm">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-gray-500">{subtext}</div>
    </div>
  );
}
