import Footer from "@/components/other/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-8 mx-16">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex  w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 content-center">
          Pilih Paslon Ketos SMANSA Medan No.&nbsp;
          <code className="font-mono font-extrabold">03!</code>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="https://s6.imgcdn.dev/9t5rd.jpg"
          alt="Paslon No. 3 Ketos SMANSA 24/25"
          width={360}
          height={74}
          priority
        />
      </div>

      <div className="pb-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 mt-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Pasangan Calon{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 `}>
            <span className="list-item">Annas Muti Al-Muhtadi (Calon Ketua OSIS / XI MIPA 4)<br/></span>
            <span className="list-item my-2">Achmad Adhzrar Ali Saragih (Calon Wakil Ketua OSIS / X IKM 1).</span>
          </p>
        </Link>

        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 mt-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Visi{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none font-light">
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-light`}>
            Menjadikan OSIS SMAN 1 Medan organisasi yang CERDAS (Cekatan, Empatik, Responsive, Disiplin, Amanah, Solid) sebagai wadah yang inklusif dan inspiratif bagi siswa demgan fokus pada pengembangan potensi individu dan pemberdayaan komunitas sekolah.
          </p>
        </Link>

        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 mt-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Misi{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <ol className={`m-0 max-w-[30ch] text-sm opacity-50 font-light`}>
            <li>1. Memaksimalkan ekstrakulikuler dan fungsi kerja tiap SIE yang ada di dalam organisasi.<br/></li>
            <li className="marmis">2. Membangun komunikasi yang efektif dan harmonis antara OSIS dengan elemen sekolah lainnya.<br/></li>
            <li>3. Menjadin kemitraan dengan OSIS SMA lain untuk memperluas wawasan dan jaringan OSIS.</li>
          </ol>
        </Link>

        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 mt-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Program Kerja{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-light`}>
            - Festival Kebudayaan,<br/>
            <span className="marprog">- Recycle Day of SMANSA,</span><br/>
            - SMANSA Discussing Forum.
          </p>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
