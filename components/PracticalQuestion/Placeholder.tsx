'use client'
import { LinkData } from "@/data/LinkData";
import { GridProps } from "../animata/background/grid";
import Link from "next/link";

export default function Placeholder({ size = 20 }: Pick<GridProps, "size">) {
  const widthSpread = 100;
  const heightSpread = 20;
  return (
    <div
      style={{
        width: `${widthSpread * size + 1}px`,
        height: `${heightSpread * size + 1}px`,
      }}
      className=" min-h-screen max-w-full    "
    >
      <div className="rounded  px-4 py-2">
        <div className="container m-auto  py-20  flex gap-10 flex-wrap ">
          {LinkData.map((value) => {
            return (
              <Link
                className="bg-gray-950 text-white px-8 py-3 text-xl hover:bg-gray-800"
                href={value.url}
                key={value.id}
              >
                {value.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
