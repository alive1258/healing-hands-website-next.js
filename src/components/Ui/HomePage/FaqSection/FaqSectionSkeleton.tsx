import Skeleton from "@/src/components/Common/Skeleton/Skeleton";

const FaqSectionSkeleton = () => (
  <section className="bg-cream-100 py-16 md:py-24">
    <div className="container">
      <div className="text-center mb-12">
        <Skeleton className="mx-auto h-3 w-28 bg-brand-900/10" />
        <Skeleton className="mx-auto mt-3 h-9 w-80 max-w-full bg-brand-900/10" />
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="divide-y divide-brand-900/10 rounded-2xl border border-brand-900/10 bg-white">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between gap-4 px-6 py-5">
              <Skeleton className="h-4 w-2/3 bg-brand-900/10" />
              <Skeleton className="h-4 w-4 shrink-0 rounded-full bg-brand-900/10" />
            </div>
          ))}
        </div>

        <Skeleton className="mx-auto aspect-square w-full max-w-sm rounded-full bg-brand-900/10 lg:max-w-none" />
      </div>
    </div>
  </section>
);

export default FaqSectionSkeleton;
