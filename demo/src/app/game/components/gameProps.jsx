export function Balloon() {
    return (
        <div className="w-full h-screen items-center flex flex-col justify-center animate-bounce">
            <div className="w-[100px] h-[100px] rounded-[50%] bg-radial-[at_25%_25%]  from-pink-200 to-yellow-600">
            </div>
            <div className="h-[50px] bg-yellow-200 w-[1px]">

            </div>
        </div>
    );
}