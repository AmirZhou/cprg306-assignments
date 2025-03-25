import HeaderAuth from "@/components/header-auth";

export default function Layout({ children }) {
  return (
    <div className="dark flex h-screen w-full flex-col gap-4 bg-background px-4 pt-4 font-poppins text-foreground">
      <HeaderAuth />
      {children}
    </div>
  );
}
