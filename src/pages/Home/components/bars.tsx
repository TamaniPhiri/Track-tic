const Bars = () => {
  return (
    <div className="relative inline-flex group w-full my-5">
      <div className="absolute transitiona-all duration-1000 opacity-20 -inset-px bg-gradient-to-r from-[#44BCFF] via-lime-300 to-purple-300 rounded-xl blur-3xl group-hover:opacity-40 group-hover:inset-0 group-hover:duration-200 animate-tilt"></div>
      <div className="relative inline-flex border items-end border-neutral-800 rounded-xl p-12 bg-black w-full justify-between">
        <h1>
          <span className="font-bold">K </span>{" "}
          <span className="text-4xl font-bold">765</span>
        </h1>
        <h2 className="text-gray-500">ZMW</h2>
      </div>
    </div>
  );
};

export default Bars;
