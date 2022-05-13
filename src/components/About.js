import about from "../assets/aboutme.svg";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-white text-base-black pt-[120px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full grid md:grid-cols-2 py-10 px-20 text-lg">
          <div>
            <img className="w-6/12 mx-auto" src={about} alt="..."></img>
          </div>
          <div className="py-10 w-full md:w-3/4">
            <div className="max-width-[1000px] w-full pb-8">
              <p className="text-4xl font-semibold">
                About Me
                <hr className="bg-base-violet w-20 h-0.5 border-none ml-10 mt-1"></hr>
              </p>
            </div>
            <p className="text-base-gray">
              I am Avadhoot Kulkarni, currently in third year of IT engineering.
              I am passionate about web development and machine learning with
              experience working across full-stack web development.
            </p>
            <div>
              <button className="text-white bg-base-violet group mt-14 px-4 py-4 my-2 flex items-center rounded-lg gap-2">
                Download CV
                <AiOutlineDownload size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
