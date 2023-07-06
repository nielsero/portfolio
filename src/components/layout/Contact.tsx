import { BiCurrentLocation } from "react-icons/bi"
import { MdEmail } from "react-icons/md"

function Contact() {
  return (
    <section id="contacts" className="w-full p-4">
      <div className="container max-w-5xl mx-auto flex flex-wrap justify-center">
        <div className="w-[90%] md:w-[60%] py-4 px-2">
          <form className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Get in touch</h1>
            <p>Send me a message</p>
            <input
              className="border p-2 border-black"
              type="text"
              placeholder="Name"
            />
            <input
              className="border p-2 border-black"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="border p-2 h-40 border-black"
              placeholder="Message"
            ></textarea>

            <div>
              <button className="py-2 px-5 bg-sky-700 text-white rounded">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="w-[90%] md:w-[40%] py-4 px-2 md:pl-6">
          <h1 className="text-xl font-bold">Contact</h1>
          <div className="flex items-center gap-2 mt-2 bg-[#eeeeee] p-2 cursor-pointer hover:opacity-80">
            <BiCurrentLocation size={18} /> <span>Mozambique</span>
          </div>
          <div className="flex items-center gap-2 mt-2 bg-[#eeeeee] p-2 cursor-pointer hover:opacity-80">
            <MdEmail size={18} /> <span>niels.achimo@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
