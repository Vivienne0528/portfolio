import Bottom from "./components/Bottom";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MyLatestWork from "./components/MyLatestWork";
import MyService from "./components/MyService";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <section className="w-full h-screen font-[Poppins] xl:px-20 lg:px-10 p-1 py-5 flex flex-col items-center m-auto max-w-[1280px] min-w-[375px]">
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
