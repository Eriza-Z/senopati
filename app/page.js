import Footer from "@/components/other/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-8 mx-16">
      <h1 className="font-bold">Senopati SMANSA Medan</h1>
      <Image src="https://ik.imagekit.io/erz/head.jpg?updatedAt=1690815901380"
            alt="Senopati SMANSA"
            className="pt-2 rounded-full"
            id="HeroImage"
            width={225}
            height={225}/>
      <h2>Check our socmed and song playlist at:<br/></h2>
      <p className="font-mono font-thin"><Link href={"/link"}> HERE!</Link></p>
      <Footer />
    </main>
  );
}
