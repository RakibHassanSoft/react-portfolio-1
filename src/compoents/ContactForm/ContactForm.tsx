import React, { useEffect, useState, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";

const inputInstructions = [
  { id: "name", label: "Full Name", placeholder: "John Doe", type: "text" },
  { id: "email", label: "Email Address", placeholder: "hello@example.com", type: "email" },
  { id: "subject", label: "Subject", placeholder: "Subject", type: "text" },
  { id: "message", label: "Message", placeholder: "Message in brief...", type: "textarea" },
];

const ContactForm: React.FC = () => {
  const [typedPlaceholders, setTypedPlaceholders] = useState<Record<string, string>>({});
  
  // Refs for inputs
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    inputInstructions.forEach(({ id, placeholder }, idx) => {
      let currentIndex = 0;

      const delay = idx * 1000;

      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setTypedPlaceholders((prev) => {
            if (currentIndex < placeholder.length) {
              currentIndex++;
              return { ...prev, [id]: placeholder.slice(0, currentIndex) };
            } else {
              clearInterval(interval);
              return prev;
            }
          });
        }, 100);
        timers.push(interval);
      }, delay);

      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  // Handler to focus inputs by id
  const focusInput = (id: string) => {
    switch (id) {
      case "name":
        nameRef.current?.focus();
        break;
      case "email":
        emailRef.current?.focus();
        break;
      case "subject":
        subjectRef.current?.focus();
        break;
      case "message":
        messageRef.current?.focus();
        break;
    }
  };

  return (
    <div id="contact" className="bg-gradient-to-r from-black to-green-800 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Contact Me</p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            LET'S TALK ABOUT <br /> YOUR PROJECT
          </h2>
          <p className="text-gray-400 mb-8">
            Let's embark on creative journey together by shaping a visual
            narrative of your brand in the crowded digital space.
          </p>

          {/* Make these clickable to focus inputs */}
          <div
            onClick={() => focusInput("name")}
            className="cursor-pointer bg-gradient-to-r border from-green-700 to-green-950 flex items-center gap-4 mb-4 p-4 rounded-full w-fit"
            title="Focus Name Input"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-xs text-gray-50">BOOK A CALL</p>
              <p className="text-white font-medium">+1 800 23 456 789</p>
            </div>
          </div>

          <div
            onClick={() => focusInput("email")}
            className="cursor-pointer flex items-center gap-4 p-4 bg-gradient-to-r from-green-700 to-green-950 border rounded-full w-fit"
            title="Focus Email Input"
          >
            <div className="bg-white text-green-950 p-2 rounded-full">
              <FaEnvelope size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-100">PREFER EMAIL COMMUNICATION</p>
              <p className="text-white font-medium">hello@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-gradient-to-r from-green-800 to-green-950 p-8 rounded-xl space-y-6">
          {inputInstructions.map(({ id, label, type }) => (
            <div key={id}>
              <p className="text-gray-300 text-sm mb-1 select-none">{label}</p>

              {type === "textarea" ? (
                <textarea
                  ref={id === "message" ? messageRef : null}
                  placeholder={typedPlaceholders[id] || ""}
                  className="w-full bg-transparent border border-gray-50 text-white px-4 py-3 rounded-md h-32 resize-none focus:outline-none"
                ></textarea>
              ) : (
                <input
                  ref={
                    id === "name"
                      ? nameRef
                      : id === "email"
                      ? emailRef
                      : id === "subject"
                      ? subjectRef
                      : undefined
                  }
                  type={type}
                  placeholder={typedPlaceholders[id] || ""}
                  className="w-full bg-transparent border border-gray-50 text-white px-4 py-3 rounded-md focus:outline-none"
                />
              )}
            </div>
          ))}

          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
