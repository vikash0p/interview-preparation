import ImageContainer from "./ImageContainer";
import { myImage } from "./ImageData";


export default function HomeImageCard() {
  return (
    <div className="">
      <main className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {myImage.map((value, index) => {
          return (
            <div key={index} className="">
              {/* Parent container with relative position */}
              <ImageContainer value={value} />
            </div>
          );
        })}
      </main>
    </div>
  );
}
