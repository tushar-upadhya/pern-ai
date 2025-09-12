import { assets, dummyTestimonialData } from "../../assets/assets";

const Testimonial = () => {
  const CreateCard = ({ card }) => (
    <div className="p-6 m-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 w-72 shrink-0 border border-red-100/50">
      <div className="flex gap-3 items-center">
        <img
          className="size-12 rounded-full border-2 border-red-200"
          src={card.image}
          alt={`${card.name} avatar`}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <p className="text-base font-bold text-gray-800">{card.name}</p>
            <svg
              className="mt-0.5"
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                fill="#EF4444"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-600 font-medium">
            {card.title}
          </span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-700 leading-relaxed">
        {card.content}
      </p>
      <div className="flex items-center justify-between text-gray-600 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < card.rating ? assets.star_icon : assets.star_dull_icon}
                alt={i < card.rating ? "Filled star" : "Empty star"}
                className="w-4 h-4"
              />
            ))}
          </div>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-red-500 transition-colors"
          >
            <svg
              width="12"
              height="11"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p>Posted on {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 20s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }

        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
      `}</style>

      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-12 pb-6">
          {[...dummyTestimonialData, ...dummyTestimonialData].map(
            (card, index) => (
              <CreateCard key={index} card={card} />
            )
          )}
        </div>
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-12 pb-6">
          {[...dummyTestimonialData, ...dummyTestimonialData].map(
            (card, index) => (
              <CreateCard key={index} card={card} />
            )
          )}
        </div>
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </>
  );
};

export default Testimonial;
