

function ImageBox({ image, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl">
      <img src={image} alt={title} className="w-full h-auto rounded-t-xl" />
      <div className="p-4 space-y-4">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageBox;
