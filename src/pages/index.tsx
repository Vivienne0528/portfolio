import Bottom from "./components/Bottom";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MyLatestWork from "./components/MyLatestWork";
import MyService from "./components/MyService";
import NavBar from "./components/NavBar";
import UseContextProvider from "./utils/UseContextProvider";

export default function Home() {
  return (
    <UseContextProvider>
      <section className="w-full h-screen font-[Poppins] xl:px-20 lg:px-10 flex flex-col items-center m-auto max-w-[1280px] min-w-[375px]">
        <NavBar />
        <Hero />
        <Intro />
        <MyService />
        <MyLatestWork />
        <GetInTouch />
        <Bottom />
      </section>
    </UseContextProvider>
  );
}
