export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark flex h-screen w-full flex-col items-center justify-center gap-12 bg-background text-foreground">
      {children}
    </div>
  );
}
