import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <section className="w-full h-screen font-[Poppins] px-20 py-5 flex flex-col items-center ">
      <NavBar />
      <Hero />
    </section>
  );
}
