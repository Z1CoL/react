import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-full rounded-4xl flex flex-wrap ml-10">
      {/* head */}
      <div className="">{/* videos */}</div>
      <div className="flex gap-[24px] h-[347]">
        <div className="w-[100%] h-[226px] mt-[24px]">
          <div className="w-[419px] h-full bg-[url(./img/L1.jpg)] bg-cover bg-no-repeat rounded-[10px]"></div>

          <div className="flex mt-[12px]">
            <div className="bg-[url(./img/shorts.jpeg)] mr-[12px] w-[36px] h-[36px] bg-cover rounded-full"></div>
            <div className="h-[85px]">
              <p className="font-bold">Animation universe - The LADDER</p>
              <p className="text-gray-500 text-sm  ">Silo Entertainment</p>
              <p className="text-gray-500 text-sm  ">572K views • 4 days ago</p>
            </div>
            <div>
              <svg
                className="mt-[5px] bi bi-three-dots-vertical ml-18"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>
          </div>
        </div>
        {/* second video */}
        <div className="w-[100%] h-[226px] mt-[24px]">
          <div className="w-[419px] h-full bg-[url(./img/snake.jpg)] bg-cover rounded-[10px]"></div>

          <div className="flex mt-[12px] place-content-between">
            <div className="bg-[url(./img/shorts.jpeg)] mr-[12px] w-[36px] h-[36px] bg-cover rounded-full"></div>
            <div className="h-[85px]">
              <p className="font-bold">
                Mix - Rock That Body - The Black Eyed Peas
              </p>
              <p className="text-gray-500 text-sm  ">Silo Entertainment</p>
              <p className="text-gray-500 text-sm  ">572K views • 4 days ago</p>
            </div>
            <div>
              <svg
                className="mt-[5px]  bi bi-three-dots-vertical"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[24px] h-[347]">
        <div className="w-[100%] h-[226px] mt-[24px]">
          <div className="w-[419px] h-full bg-[url(./img/song.jpg)] bg-cover rounded-[10px]"></div>

          <div className="flex mt-[12px] place-content-between">
            <div className="bg-[url(./img/shorts.jpeg)] mr-[12px] w-[36px] h-[36px] bg-cover rounded-full"></div>
            <div className="h-[85px]">
              <p className="font-bold">
                Mix - Rock That Body - The Black Eyed Peas
              </p>
              <p className="text-gray-500 text-sm  ">Silo Entertainment</p>
              <p className="text-gray-500 text-sm  ">572K views • 4 days ago</p>
            </div>
            <div>
              <svg
                className="mt-[5px] bi bi-three-dots-vertical "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>
          </div>
        </div>
        {/* second video */}
        <div className="w-[100%] h-[226px] mt-[24px]">
          <div className="w-[419px] h-full bg-[url(./img/griffin.jpg)] bg-cover rounded-[10px]"></div>

          <div className="flex mt-[12px] place-content-between">
            <div className="bg-[url(./img/shorts.jpeg)] mr-[12px] w-[36px] h-[36px] bg-cover rounded-full"></div>
            <div className="h-[85px]">
              <p className="font-bold">
                Mix - Rock That Body - The Black Eyed Peas
              </p>
              <p className="text-gray-500 text-sm  ">Silo Entertainment</p>
              <p className="text-gray-500 text-sm  ">572K views • 4 days ago</p>
            </div>
            <div>
              <svg
                className="mt-[5px] bi bi-three-dots-vertical"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
