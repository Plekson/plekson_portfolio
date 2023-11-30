import React from "react";
import ContactAnimations from "./ContactAnimations";

const Contact = () => {
  return (
    <div
      className="container h-screen mx-auto flex flex-col items-center py-16 gap-16 relative"
      id="contact"
    >
      <ContactAnimations />
      <div className="flex flex-col items-center contact__title opacity-0 absolute top-16">
        <h2>Contact</h2>
        <hr className="w-32 bg-[#6ACFC7] border-[#6ACFC7] border-2" />
      </div>

      <div className="h-full w-full flex justify-center inputs">
        <form
          className="flex flex-col gap-8 items-center w-3/4 md:w-1/2 mx-auto justify-center"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          method="POST"
        >
          <div className="input relative w-full">
            <input
              name="user_name"
              type="text"
              className="peer w-full border-b text-lg placeholder:text-transparent p-2 focus:outline-[#6ACFC7] bg-transparent"
              placeholder="name"
              required
            />
            <label
              htmlFor="name"
              className="absolute pointer-events-none left-0 ml-1 -translate-y-3 bg-[#0c1a1a] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-[#6ACFC7]"
            >
              Imię i nazwisko
            </label>
          </div>
          <div className="input relative w-full">
            <input
              name="user_email"
              type="email"
              className="peer w-full border-b text-lg placeholder:text-transparent p-2 focus:outline-[#6ACFC7] bg-transparent"
              placeholder="email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 ml-1 -translate-y-3 bg-[#0c1a1a] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-[#6ACFC7]"
            >
              E-mail
            </label>
          </div>
          <div className="input relative w-full">
            <textarea
              name="message"
              className="peer w-full border-b text-lg placeholder:text-transparent p-2 focus:outline-[#6ACFC7] resize-none bg-transparent"
              placeholder="message"
              required
            />
            <label
              htmlFor="message"
              className="absolute left-0 ml-1 -translate-y-3 bg-[#0c1a1a] px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-[#6ACFC7]"
            >
              Wiadomość
            </label>
          </div>
          <div className="input">
            <input
              type="submit"
              value="Send"
              className="cursor-pointer px-4 py-2 rounded bg-transparent hover:bg-[#6ACFC7] duration-200 text-white border-2 border-[#6ACFC7] text-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
