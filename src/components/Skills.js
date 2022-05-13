import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const Skills = () => {
  const frontend = (
    <div>
      <h3 className="text-2xl text-base-violet font-medium my-10 lg:text-left text-center ml-0 md:ml-20">
        Web Development
      </h3>
      <div className="ml-0 lg:ml-6 w-full grid lg:grid-cols-4 text-base-gray">
        <motion.button whileHover={{ scale: 1.1 }} className="px-4 m-2 mx-auto">
          HTML5
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          CSS3
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          Javascript
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          ReactJs
        </motion.button>
      </div>
      <div className="ml-0 lg:ml-6 w-full grid lg:grid-cols-4 text-base-gray">
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          Figma
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          NodeJs
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          ExpressJs
        </motion.button>
      </div>
    </div>
  );
  const database = (
    <div>
      <h3 className="text-2xl text-base-violet font-medium my-10 lg:text-left text-center ml-0 md:ml-20">
        Database Management
      </h3>
      <div className="ml-0 lg:ml-6 w-full grid lg:grid-cols-4 text-base-gray">
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          MySQL
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          MongoDB
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          PostgreSql
        </motion.button>
      </div>
    </div>
  );
  const programming = (
    <div>
      <h3 className="text-2xl text-base-violet font-medium my-10 lg:text-left text-center ml-0 md:ml-20">
        Programming
      </h3>
      <div className="ml-0 lg:ml-6 w-full grid lg:grid-cols-4 text-base-gray">
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          C++
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          C
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          Python
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          Javascript
        </motion.button>
      </div>
      <div className="ml-0 lg:ml-6 w-full grid lg:grid-cols-4 text-base-gray">
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          Typescript
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          Java
        </motion.button>
      </div>
    </div>
  );
  const other = (
    <div>
      <h3 className="text-2xl text-base-violet font-medium my-10 lg:text-left text-center ml-0 md:ml-20">
        Other
      </h3>
      <div className="ml-0 lg:ml-6 w-full grid lg:grid-cols-4 text-base-gray">
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          Blockchain
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          Deep Learning
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} className="px-2 m-2 mx-auto">
          Machine Learning
        </motion.button>
      </div>
    </div>
  );
  const total = [frontend, database, programming, other];
  return (
    <div
      id="skills"
      className="w-full pb-20 pt-[120px] bg-white text-base-black"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full pb-8 text-center">
          <p className="text-4xl font-semibold">
            Skills
            <hr className="bg-base-violet w-20 h-0.5 border-none mx-auto mt-1"></hr>
          </p>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-10 px-20">
          <div>
            {" "}
            {total.map((skill) => {
              return <div>{skill}</div>;
            })}
          </div>
          <div>
            <div className="w-full grid lg:grid-cols-2 gap-20 lg:gap-0 py-16">
              <div className="w-40 mx-auto">
                <CircularProgressbar
                  value={80}
                  text="80%"
                  strokeWidth={5}
                  styles={buildStyles({
                    textSize: "17px",
                    textColor: "#6d6a7c",
                    pathColor: "#6e57e0",
                    trailColor: "#c1b6fc",
                  })}
                />
                <h2 className="text-center pt-2 text-xl font-medium">
                  Web Development
                </h2>
              </div>
              <div className="w-40 mx-auto">
                <CircularProgressbar
                  value={85}
                  text="85%"
                  strokeWidth={5}
                  styles={buildStyles({
                    textSize: "17px",
                    textColor: "#6d6a7c",
                    pathColor: "#6e57e0",
                    trailColor: "#c1b6fc",
                  })}
                />
                <h3 className="text-center pt-2 text-xl font-medium">
                  Machine Learning
                </h3>
              </div>
            </div>
            <div className="w-full grid lg:grid-cols-2 gap-20 lg:gap-0">
              <div className="w-40 mx-auto">
                <CircularProgressbar
                  value={85}
                  text="85%"
                  strokeWidth={5}
                  styles={buildStyles({
                    textSize: "17px",
                    textColor: "#6d6a7c",
                    pathColor: "#6e57e0",
                    trailColor: "#c1b6fc",
                  })}
                />
                <h3 className="text-center pt-2 text-xl font-medium">
                  Programming
                </h3>
              </div>
              <div className="w-40 mx-auto">
                <CircularProgressbar
                  value={75}
                  text="75%"
                  strokeWidth={5}
                  styles={buildStyles({
                    textSize: "17px",
                    textColor: "#6d6a7c",
                    pathColor: "#6e57e0",
                    trailColor: "#c1b6fc",
                  })}
                />
                <h3 className="text-center pt-2 text-xl font-medium">
                  Database
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
