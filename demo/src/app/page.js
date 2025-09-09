import { Videos } from "@/components/props";
import Image from "next/image";
#3c82f6

export default function Home() {
  return (
    <div>
      <div className=" w-[]"></div>
      <div className="flex">
        <div className="w-[20px]"></div>
        <div className="w-[64px] bg-white">

        </div>

        <div className=" w-full h-full flex flex-wrap ml-10">
          <Videos
            title="Animation universe - The LADDER (·)"
            image={"L1.jpg"}
            channelName="Chinese artist"
            views="572K views • 4 days ago"
            icon={"images.png"}
          />
          <Videos
            title="Perfect snake AI - Skibidi hacker (·)"
            image={"snake.jpg"}
            channelName="skibidi hacker"
            views="5M views • 1 days ago"
            icon={"images.jpeg"}
          />
          <Videos
            title="Mix - 【MAD】新劇場版 頭版文字D (·)"
            image={"song.jpg"}
            channelName="Exotic"
            views="378M views • 5 months ago"
            icon={"images.jpeg"}
          />
          <Videos
            title="IRL Petter Griffin finnaly found JR (·)"
            image={"griffin.jpg"}
            channelName="skibidi hacker"
            views="5M views • 4 days ago"
            icon={"images.jpeg"}
          />
        </div>
      </div>

      {/* head 1 */}

      {/* head 2 */}

      {/* Videos */}
    </div>
  );
}
