const Banner = () => {
  return (
    <div
      className="bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10"
      style={{ backgroundImage: "url(https://i.ibb.co.com/qmZ7VzT/cover.png)" }}
    >
      <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
        <h1 className="font-bold text-green-400 md:text-[3.25rem]">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-lg text-white font-normal">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex gap-4 text-xl font-semibold">
          <button className="btn bg-green-400 rounded-full border-none">
            <a href="">Explore Now</a>
          </button>
          <button className="btn btn-outline border text-white hover:bg-green-400 rounded-full border-none">
            <a href="">Our Feedback</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
