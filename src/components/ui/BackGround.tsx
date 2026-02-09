const Background = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {Array.from({ length: 22 }).map((_, i) => (
        <img
          key={i}
          src={`/assets/bg/bg${i + 1}.svg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}

      {/* Your page content */}
      <div className="relative z-10">
        <h1 className="text-white text-4xl">Content on top</h1>
      </div>
    </div>
  );
};

export default Background;
