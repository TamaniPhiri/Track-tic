const Bars = () => {
  return (
    <div>
      <div className="h-56 w-full flex justify-between">
        <div className="h-full rounded-full w-4 bg-gray-700 overflow-hidden flex items-end">
          <div className="h-[20%] w-full bg-red-400 rounded-full" />
        </div>
        <div className="h-full rounded-md w-4 bg-gray-700"></div>
        <div className="h-full rounded-md w-4 bg-gray-700"></div>
      </div>
    </div>
  );
};

export default Bars;
