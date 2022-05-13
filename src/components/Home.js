import self from "../assets/self.jpg";
import { BiRightArrow } from "react-icons/bi";

const Home = () => {
  return (
    <div id="home" className="bg-white w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="max-width-[1000px] w-full grid md:grid-cols-2 justify-center items-center">
          <div>
            <p className="text-base-black text-2xl font-medium">Hello,</p>
            <h1 className="text-4xl font-bold text-base-black my-3">
              I'm Avadhoot Kulkarni
            </h1>
            <h2 className="text-base-violet text-3xl">Full Stack Developer.</h2>
            <div>
              <a
                className="text-white bg-base-violet group w-40 mt-14 px-6 py-3 my-2 flex items-center gap-2 border-2
                border-white
                hover:bg-white
                hover:border-base-violet
                hover:text-base-black"
                href="/#about"
              >
                View Work
                <BiRightArrow size={17} />
              </a>
            </div>
          </div>
          <div className="pt-10 md:pt-0">
            <img
              src={self}
              alt="..."
              className="rounded-full md:w-5/6 w-3/5 md:mx-auto mx-0"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
