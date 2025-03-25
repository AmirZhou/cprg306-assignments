import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <h1 className="text-4xl">Week 9</h1>
      <p className="text-green-800">Only logged in users can see this.</p>
    </div>
  );
}
