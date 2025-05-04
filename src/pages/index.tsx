import Bottom from "./components/Bottom";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MyLatestWork from "./components/MyLatestWork";
import MyService from "./components/MyService";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <section className="w-full h-screen font-[Poppins] px-20 py-5 flex flex-col items-center m-auto max-w-[1280px]">
      <NavBar />
      <Hero />
      <Intro />
      <MyService />
      <MyLatestWork />
      <GetInTouch />
      <Bottom />
    </section>
  );
}
