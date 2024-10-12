"use client"; // Make sure this is at the top for client-side rendering
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedBackground from "../core/AnimatedBackground";

export function AnimatedTabsHover() {
  const pathname = usePathname(); // Get the current route

  const links = [
    {
      id: "1",
      name: "Home",
      link: "/",
    },
    {
      id: "2",
      name: "Practical Coding Interview",
      link: "/codingInterViewQuestion",
    },
    {
      id: "2",
      name: "React Interview Question",
      link: "/reactInterviewQuestion",
    },
    {
      id: "3",
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="flex flex-row gap-6 bg-black justify-center items-center py-4">
      <AnimatedBackground
        // defaultValue={links[0].link}
        className="rounded-lg bg-white transition-all"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {links.map((tab) => (
          <Link
            href={tab.link}
            key={tab.id}
            data-id={tab.link}
            className={`px-5 py-2 text-xl transition-colors duration-300 no-underline ${
              pathname === tab.link
                ? "bg-white text-black rounded-lg" // Active state
                : "text-gray-300 hover:text-black" // Default state
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </AnimatedBackground>
    </div>
  );
}
