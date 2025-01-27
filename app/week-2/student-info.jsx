import Link from 'next/link';
import Image from 'next/image';

export default function StudentInfo({ name, repoAddress }) {
  return (
    <div className="flex flex-col text-base text-slate-900">
      <p>{name}</p>
      <Link
        className="font-semibold text-blue-600 hover:text-slate-300 underline hover:underline-offset-2 transition-colors duration-200 flex gap-1.5 group"
        href={repoAddress}
      >
        <Image
          src="/images/github.svg"
          width={16}
          height={16}
          alt="Github Icon"
          className="group-hover:fill-blue-600 transition-transform duration-200 transform group-hover:scale-110"
        />
        Github Repo Address
      </Link>
    </div>
  );
}
