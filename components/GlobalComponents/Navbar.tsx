"use client"; // Ensure client-side rendering
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation"; // Import both hooks
import AnimatedBackground from "../core/AnimatedBackground";

 function Navbar() {
  const pathname = usePathname();
  const selectedSegment = useSelectedLayoutSegment();

  const links = [
    {
      id: "1",
      name: "Home",
      link: "/",
    },
    {
      id: "2",
      name: "Coding Interview",
      link: "/codingInterViewQuestion",
    },
    {
      id: "3",
      name: "React Interview",
      link: "/reactInterviewQuestion",
    },
    {
      id: "4",
      name: "Contact",
      link: "/contact",
    },
    {
      id: "5",
      name: "Javascript",
      link: "/javascriptKnow",
    },
  ];

  return (
    <div className=" z-50  bg-black  py-4 sticky top-0 left-0 right-0 ">
      <div className=" max-w-7xl m-auto flex flex-row gap-6 justify-between items-center ">
        <div className="flex items-center text-white text-2xl font-bold">
          <Link
            href="/"
            className="no-underline text-white hover:text-gray-300"
          >
            InterViewPrap
          </Link>
        </div>
        <div className="space-x-4">
          <AnimatedBackground
            className="rounded-lg bg-white transition-all"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {links.map((tab) => {
              // Check if the selected layout segment matches the link
              const isActiveSegment =
                selectedSegment === tab.link.split("/")[1];

              return (
                <Link
                  href={tab.link}
                  key={tab.id}
                  data-id={tab.link}
                  className={`px-5 py-2 text-md transition-colors duration-300 no-underline ${
                    pathname === tab.link || isActiveSegment
                      ? "bg-white text-black rounded-lg"
                      : "text-gray-300 hover:text-black"
                  }`}
                >
                  {tab.name}
                </Link>
              );
            })}
          </AnimatedBackground>
        </div>
      </div>
    </div>
  );
}

export default Navbar
