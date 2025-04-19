export function ProjectHeader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        Featured Projects
      </h2>
      <p className="max-w-[600px] text-slate-500 md:text-lg dark:text-slate-400">
        A selection of my recent work. Check out the projects page to see
        more.
      </p>
    </div>
  );
}