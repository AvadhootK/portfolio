import code from "../assets/codethinking.svg";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-white text-base-black pt-[120px]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full pb-8 text-center">
          <p className="text-4xl font-semibold">
            Contact Me
            <hr className="bg-base-violet w-20 h-0.5 border-none mx-auto mt-1"></hr>
          </p>
        </div>
        <div class="w-96 mx-auto pt-10 pb-20">
          <img src={code} alt="..."></img>
          <div class="p-6 border border-base-gray sm:rounded-md">
            <form>
              <label class="block mb-6">
                <span className="text-xl">Name</span>
                <input
                  type="text"
                  name="name"
                  class="
                  text-base-black
            block
            w-full
            p-1
            mt-1
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
                  text-base-black
            block
            w-full
            p-1
            border-b-[1px]
            mt-1
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
                  text-base-black
            block
            w-full
            p-1
            mt-1
            border-[1px]
            border-base-gray
            focus:outline-none
            shadow-sm
          "
                  rows="3"
                  placeholder="Write a message..."
                ></textarea>
              </label>
              <div class="mb-6 text-center">
                <button
                  type="submit"
                  class="
                  text-lg
            py-2
            px-8
            text-white
            bg-base-violet
            rounded-md
            transition-colors
            duration-150
            focus:shadow-outline
          "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
