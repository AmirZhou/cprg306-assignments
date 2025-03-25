import HeaderAuth from "@/components/header-auth";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full flex-col gap-4 border border-red-700 px-4 pt-4">
      <HeaderAuth />
      {children}
    </div>
  );
}
