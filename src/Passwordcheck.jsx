import React, { useState } from "react";
import Passwordcard from "./components/PasswordCard";
import { HR } from "flowbite-react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Passwordcheck() {
  const features = [
    {
      id: "generate",
      title: "Generate strong passwords",
      description:
        "Generate strong, complex passwords, test their strength, and instantly save them in NordPass.",
      image:
        "https://sb.nordcdn.com/transform/2ded4e29-9557-4022-ace5-529c824a0ae5/laptop-password-generator-630x480?format=webp&quality=80&io=transform%3Afill%2Cwidth%3A1536",
    },
    {
      id: "store",
      title: "Store more than just passwords",
      description:
        "Securely store passkeys, personal information, credit card details, secure notes, and even files alongside your passwords in NordPass.",
      image:
        "https://sb.nordcdn.com/transform/ca4f40c6-9f59-4fb4-bcfc-23a044ea770f/secure-data-storage-630x488?format=webp&quality=80&io=transform%3Afill%2Cwidth%3A1536",
    },
    {
      id: "login",
      title: "Login with a click",
      description:
        "Save time and automatically fill in login details for all of your favorite and most important online accounts with just a few clicks.",
      image:
        "https://sb.nordcdn.com/transform/3e9340b5-06ad-4e96-bcc6-9e39ea0c63e2/login-it-teams-630x488?format=webp&quality=80&io=transform%3Afill%2Cwidth%3A1536",
    },
    {
      id: "scan",
      title: "Scan web for data leaks",
      description:
        "Discover whether any of your personal information has appeared in a data breach and set up proactive breach monitoring.",
      image:
        "https://sb.nordcdn.com/transform/a71bc48c-0919-4138-b2f9-94f25c312e19/data-breach-630x488?format=webp&quality=80&io=transform%3Afill%2Cwidth%3A1536",
    },
  ];

  const [activeTab, setActiveTab] = useState(features[0]);
  
  return (
    <div>
      <Header/>
    <div className="min-h-screen bg-[#0b0e14]">
      {/* Hero Section */}
      <div className="pt-20 pb-10 mb-10">
        <h1 className="text-white text-5xl font-semibold text-center mb-10">
          How secure is my password?
        </h1>
        <Passwordcard />
        <h2 className="text-pink-600 font-semibold text-center mt-7">
          We do not collect or store the passwords entered in the field.
        </h2>
      </div>

      {/* Interactive Features Section */}
      <div className="bg-white px-6 py-20 lg:px-[100px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl lg:text-5xl text-center mb-6 text-gray-900">
            A safer, more enjoyable online experience with NordPass
          </h2>
          <p className="text-gray-600 text-center text-md mx-auto mb-16 leading-relaxed">
            Besides using our online password strength checker to further
            improve your online security, be sure to also try NordPass — a
            single secure solution for all your digital valuables. Enjoy
            instant, effortless access to your favorite online accounts and
            passwords across multiple devices.
          </p>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* LEFT: Accordion List */}
            <div className="w-full lg:w-1/2">
              {features.map((item) => (
                <div key={item.id} className="relative">
                  {/* Top border that highlights when active */}
                  <div
                    className={`h-[2px] transition-all duration-300 ${
                      activeTab.id === item.id
                        ? "bg-teal-400 w-full"
                        : "bg-gray-200 w-full"
                    }`}
                  />

                  <button
                    onClick={() => setActiveTab(item)}
                    className="w-full py-6 flex flex-col items-start focus:outline-none group text-left"
                  >
                    <div className="flex items-center w-full">
                      <span
                        className={`text-2xl font-bold transition-colors duration-200 ${
                          activeTab.id === item.id
                            ? "text-gray-900"
                            : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Description: Expands when active */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeTab.id === item.id
                          ? "max-h-40 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
              <div className="h-[2px] bg-gray-200 w-full" />
            </div>

            {/* RIGHT: Dynamic Image Display */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-[600px] aspect-[4/3] transition-all duration-500 transform">
                <img
                  key={activeTab.id} // Key helps React trigger animation on change
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full object-contain rounded-2xl animate-in fade-in zoom-in duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*info */}
      <div className="bg-white px-6 py-20 lg:px-[100px]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center">
            A strong password — the cornerstone of your digital security
          </h1>
          <div className="flex my-20">
            <div className="w-[800px] mt-15 mr-5">
              <h2 className="text-4xl font-semibold">
                Don't lose passwords to hackers
              </h2>
              <p className="mt-5 text-gray-500">
                Weak, stolen, and reused passwords remain the primary cause of
                data breaches. However, you can significantly reduce the chances
                of falling victim to bad actors with the help of NordPass — a
                single, secure place for passwords, passkeys, credit cards, and
                personal info. Today, an individual password manager as well as
                a password manager for business should be an essential part of
                our lives if we wish to lead a secure and smooth life online.
              </p>
            </div>
            <div className="w-205">
              <img
                src="https://sb.nordcdn.com/transform/f095de0d-b7ce-4836-8410-763a20b93812/hacker?format=webp&quality=80&io=transform%3Afill%2Cwidth%3A1536"
                alt=""
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-205 mr-8">
              <img
                src="https://sb.nordcdn.com/transform/ff9a7697-884c-4a4b-afdd-6cfa808bebd6/weak-passwords?format=webp&quality=80&io=transform%3Afill%2Cwidth%3A1536"
                alt=""
              />
            </div>
            <div className="w-[800px] mt-15">
              <h2 className="text-4xl font-semibold">
                How weak passwords are cracked
              </h2>
              <p className="mt-5 text-gray-500">
                Hackers use a technique known as brute force, which is based on
                the idea of trying to blindly guess a user's passwords. It’s
                often a computer program that tries words until it hits the
                jackpot. All hackers need for it to work is to upload a database
                with popular passwords, words from a dictionary, or passwords
                leaked in the past. Therefore, the more complex the password is,
                the less likely they are to guess it — one of the best ways to
                ensure your passwords are strong is by performing a password
                check.
              </p>
            </div>
          </div>
        </div>
      </div>      
    </div>
    <Footer/>
    </div>    
  );
}

export default Passwordcheck;
