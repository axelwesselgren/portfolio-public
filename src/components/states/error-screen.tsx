export function ErrorScreen({ title, description }: { title: string; description: string }) {
  return (
    <div className="py-16">
      <div className="mx-auto container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}