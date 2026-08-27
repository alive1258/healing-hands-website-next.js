import Skeleton from "@/src/components/Common/Skeleton/Skeleton";

const HeroSectionSkeleton = () => (
  <section className="relative flex min-h-[560px] items-center overflow-hidden bg-cream-100 py-10 md:min-h-[640px] md:py-16">
    <div className="container relative grid items-center gap-12 lg:grid-cols-2">
      <div className="max-w-xl">
        <Skeleton className="h-7 w-40 rounded-full bg-brand-100" />
        <Skeleton className="mt-6 h-12 w-full bg-brand-100" />
        <Skeleton className="mt-3 h-12 w-2/3 bg-brand-100" />
        <Skeleton className="mt-6 h-4 w-full bg-brand-100" />
        <Skeleton className="mt-2 h-4 w-5/6 bg-brand-100" />
        <Skeleton className="mt-8 h-12 w-48 rounded-lg bg-brand-100" />
      </div>
      <Skeleton className="aspect-square w-full rounded-[3rem] bg-brand-100 sm:aspect-4/5" />
    </div>
  </section>
);

export default HeroSectionSkeleton;
