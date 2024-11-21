import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-screen flex justify-between items-center flex-col md:flex-row ">
            <div className="flex flex-col justify-center  items-center md:items-start md:w-[50%] px-0 md:px-[12%] py-12 ">
                
                <div className=" flex flex-col justify-center items-center md:items-start gap-5">
                    <h1 className="font-roboto font-bold text-3xl md:text-4xl w-72">Learn new skills online with ease</h1>
                    <p className="font-roboto font-medium w-72 md:w-[400px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                </div>

                <div className="mt-6 px-4 flex justify-center items-center gap-2 md:gap-4">
                    <button className="w-[150px] font-roboto md:w-[178px] h-[48px] bg-black text-white rounded-md">Start learning now</button>
                    <button className="w-[150px] md:w-[178px] font-roboto h-[48px] border-[1px] border-black rounded-md">Explore Courses</button>
                </div>
            </div>

            <div className="w-screen md:w-[600px] h-96 md:h-[600px] mt">
                <Image src={"/images/Hero_image.png"} alt="hero image" height={900} width={400} className="h-full w-full object-cover" />
            </div>
        </div>
    )
}
