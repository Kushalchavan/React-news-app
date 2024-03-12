const Card = ({ data }) => {
  return (
    <main className="grid grid-cols-3 gap-7 mt-9">
      {data.slice(0, 20).map((news, index) => (
        <div
          className="w-[20rem] h-[30rem] rounded shadow-md flex flex-col justify-between truncate transition duration-150 text-wrap hover:bg-gray-100"
          key={`${news.source.name}-${index}`}
        >
          <img
            src={news.urlToImage}
            alt="News Image"
            className="w-full h-1/3 object-cover hover:scale-110 transition duration-150 "
          />
          <div className="flex justify-start items-center px-2 py-1">
            <p className="font-bold text-sm">{news.author}</p>
          </div>
          <div className="px-2 py-1">
            <h1 className="text-gray-950">{news.title}</h1>
            <p className="opacity-70 text-sm">{news.description}</p>
          </div>
          <div className=" flex justify-start items-end px-2 py-1 mb-1">
            <p className="text-sm">
              Publish at: <span className="font-bold">{news.publishedAt}</span>
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Card;
