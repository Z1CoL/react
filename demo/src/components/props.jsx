export function head(header) {}

export function Videos(props) {
  return (
    <div className="flex ml-[12px] mb-17 h-[347]">
      <div className="w-[100%] h-[250px] mt-[24px]">
        <div className="w-[419px] h-full">
          <img
            className="w-[419px] h-full  bg-cover bg-no-repeat rounded-[10px]"
            src={props.image}
            alt=""
          />
        </div>

        <div className="flex mt-[12px] place-content-between">
          <div>
            <img
              className=" mr-[12px] w-[36px] h-[36px] bg-contain rounded-full"
              src={props.icon}
              alt=""
            />
          </div>
          <div className="h-[85px] ">
            <p className="font-bold">{props.title}</p>
            <p className="text-gray-500 text-sm  ">{props.channelName}</p>
            <p className="text-gray-500 text-sm  ">{props.views}</p>
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
    </div>
  );
}
