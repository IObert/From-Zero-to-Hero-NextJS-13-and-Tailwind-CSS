import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("Home page rendered")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/sendMessage">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </Link>

      <Link
        className="animate-bounce absolute bottom-10 right-10"
        target="_blank"
        href={`https://wa.me/${process.env.NEXT_PUBLIC_TWILIO_NUMBER}?text=Send this message!`}
      >
        <button className="flex items-center justify-center rounded-full bg-[#F22F46] h-[80px] w-[80px]">
          <img
            className="invert w-2/3 h-2/3"
            src="https://img.icons8.com/?size=512&id=16733&format=png"
          />
        </button>
      </Link>
    </main>
  );
}
