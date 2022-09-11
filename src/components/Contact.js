// import code from "../assets/codethinking.svg";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-white text-black pt-[120px]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full pb-8 text-center">
          <p className="text-4xl font-semibold">
            Contact Me
            <hr className="bg-base-blue w-20 h-0.5 border-none mx-auto mt-1"></hr>
          </p>
        </div>
        <div class="lg:w-2/5 w-3/4 mx-auto pt-10 pb-20 ">
          {/* <img src={code} alt="..."></img> */}
          <div class="rounded-md bg-base-blue text-white p-10 shadow-2xl">
            <form>
              <label class="block mb-6">
                <span className="text-xl">Name</span>
                <input
                  type="text"
                  name="name"
                  class="
                  text-black
            block
            w-full
            p-2
            mt-2.5
            border-b-[1px]
            border-base-gray
            focus:outline-none
            shadow-sm
          "
                  placeholder="Your name"
                />
              </label>
              <label class="block mb-6">
                <span className="text-xl">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="
                  text-black
            block
            w-full
            p-2
            border-b-[1px]
            mt-2.5
            border-base-gray
            focus:outline-none
            shadow-sm
          "
                  placeholder="Your email"
                  required
                />
              </label>
              <label class="block mb-6">
                <span className="text-xl">Message</span>
                <textarea
                  name="message"
                  class="
                  text-black
            block
            w-full
            p-2
            mt-2.5
            border-[1px]
            border-base-gray
            focus:outline-none
            shadow-sm
          "
                  rows="3"
                  placeholder="Write a message..."
                ></textarea>
              </label>
              <div class="py-3 text-center">
                <div
                  type="submit"
                  style={{
                    cursor: "pointer",
                    borderRadius: "50px",
                  }}
                  class="
                  text-lg
            py-2.5
            mx-auto
            text-white
            bg-black
            hover:bg-black
            transition-colors
            duration-150
            focus:shadow-outline
            w-28
          "
                >
                  Send
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
