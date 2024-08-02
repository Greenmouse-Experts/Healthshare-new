
interface ImageBoxProps{
  image?: string;
  title?: string;
  description?: string;
}


const ImageBox: React.FC<ImageBoxProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl ">
      <img src={image} alt={title} className="w-full h-auto rounded-t-xl" />
      <div className="p-4 pt-8 space-y-4 min-h-64">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageBox;
