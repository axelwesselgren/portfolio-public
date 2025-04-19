export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-24">
      <div className="mx-auto container px-4 md:px-6">{children}</div>
    </section>
  )
}

Section.Header = function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-10">
      <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
      <p className="text-muted-foreground max-w-[700px]">{description}</p>
    </div>
  );
}