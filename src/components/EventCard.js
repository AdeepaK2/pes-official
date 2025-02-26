import ImageCarousel from "@/components/ImageCarousel";

const EventCard = ({ name, images, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full">
      <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800 tracking-wide border-b-2 border-blue-400 pb-2">
  {name}
</h3>


      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Carousel (Left or Right dynamically) */}
        <div className="w-full md:w-1/2">
          <ImageCarousel images={images} />
        </div>

        {/* Text Content (First few paragraphs beside carousel) */}
        <div className="w-full md:w-1/2 text-gray-700">
          {content.slice(0, 3).map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Remaining Paragraphs */}
      {content.length > 2 && (
        <div className="mt-4 text-gray-700">
          {content.slice(2).map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventCard;
