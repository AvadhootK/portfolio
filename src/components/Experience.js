import { FaCircle, FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";

const Experience = () => {
  const expi = [
    {
      title: "BE, Information Technology",
      org: "PVGCOET",
      time: "2019-2023",
      desc: "Responsibility:",
    },
    {
      title: "Project Intern",
      org: "FTB Communications",
      time: "2021-2022",
      desc: "",
    },
    {
      title: "DS & ML Intern",
      org: "Tathasthu",
      time: "Mar 2022-April 2022",
      desc: "",
    },
  ];
  return (
    <div
      id="experience"
      className=" pt-[120px] w-full bg-white text-base-black"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full pb-8 text-center">
          <p className="text-4xl font-semibold">
            Experience
            <hr className="bg-base-violet w-20 h-0.5 border-none mx-auto mt-1"></hr>
          </p>
        </div>
        <div className="max-width-[1000px] w-full grid lg:grid-cols-2 py-10 px-20 text-lg">
          <div className="lg:mx-auto mx-0">
            <h2 className="text-3xl font-medium mb-10 flex items-center gap-3">
              <FaGraduationCap />
              Education
            </h2>
            <div className="border-l-[3px] border-base-violet">
              {expi.slice(0, 1).map((items) => {
                return (
                  <div>
                    <div className="flex ml-6 mb-10">
                      <div>
                        <FaCircle className="ml-[-33px] mt-[8px]" size={15} />
                      </div>
                      <div className="text-neutral-400">
                        <h2 className="text-2xl text-base-violet font-medium">
                          {items.title}
                        </h2>
                        <div>
                          <span className="text-base-black">{items.org}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRegCalendarAlt />
                          {items.time}
                        </div>
                        {/* <div>Some random text here(Responsibility)</div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:mx-auto mx-0">
            <h2 className="text-3xl font-medium mb-10 mt-10 lg:mt-0 flex items-center gap-3">
              <IoBagRemove /> Work Experience
            </h2>
            <div className="border-l-[3px] border-base-violet">
              {expi.slice(1).map((items) => {
                return (
                  <div>
                    <div className="flex ml-6 mb-10">
                      <div>
                        <FaCircle className="ml-[-33px] mt-[8px]" size={15} />
                      </div>
                      <div className="text-neutral-400">
                        <h2 className="text-2xl text-base-violet font-medium">
                          {items.title}
                        </h2>
                        <div>
                          <span className="text-base-black">{items.org}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRegCalendarAlt />
                          {items.time}
                        </div>
                        {/* <div>Some random text here(Responsibility)</div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
