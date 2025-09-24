import Image from "next/image";

export default function Banner() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-5">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="background">
          <h1 className="text-3xl sm:text-4xl md:text-[84px] font-bold text-[#212B36] pt-12 pb-4">
            All Your Jobs One Smart App
          </h1>
        </div>
        <p className="mt-4 text-sm sm:text-base md:text-base text-[#637381] w-full md:w-3/4">
          Built for business owners, employees, and clients streamline job
          scheduling, service tracking, and team management in one powerful app.
        </p>
        <div className="flex gap-5 mt-10 md:mt-14 ">
          <Image
            src="https://i.ibb.co/Q70qTW7t/Pstore.png"
            alt="App Store"
            width={150}
            height={50}
          />
          <Image
            src="https://i.ibb.co/cKKMFqQd/Istore.png"
            alt="Play Store"
            width={150}
            height={50}
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="https://i.ibb.co/dJDSjXN4/Banner-Pic.png"
          alt="Banner"
          width={720}
          height={665}
          className="w-full h-auto max-w-md md:max-w-full"
        />
      </div>
    </section>
  );
}
