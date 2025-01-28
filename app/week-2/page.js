import StudentInfo from './student-info';
import { dotenv } from 'dotenv';

export default function Page() {
  return (
    <div className="in-w-screen min-h-screen p-2 flex flex-col gap-4 bg-slate-700">
      <h1 className="text-slate-300 text-4xl">Shopping List</h1>
      <main>
        <StudentInfo name={"Yue (Amir) Zhou"} repoAddress={process.env.REPO_ADDRESS} />
      </main>
    </div>
  );
}
