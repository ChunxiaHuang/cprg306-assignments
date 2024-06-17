import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-teal-900">
      <h1 className="text-4xl font-bold text-teal-100 pt-20 pl-20 pb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className="text-lg pl-20 text-teal-100"><Link href="./week-2">Week-2 Assignment</Link></li>
        <li className="text-lg pl-20 text-teal-100"><Link href="./week-3">Week-3 Assignment</Link></li>
        <li className="text-lg pl-20 text-teal-100"><Link href="./week-4">Week-4 Assignment</Link></li>
        <li className="text-lg pl-20 text-teal-100"><Link href="./week-5">Week-5 Assignment</Link></li>
      </ul>
    </main>
  );
}
