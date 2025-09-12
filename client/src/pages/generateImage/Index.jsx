import { Image, Sparkles } from "lucide-react";
import { useState } from "react";
const imageStyle = [
  "Realistic",
  "Ghibli style",
  "Anime style",
  "Cartoon style",
  "Fantasy style",
  "Realistic style",
  "3D style",
  "Portrait style",
];

const GenerateImagePage = () => {
  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full capitalize overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* left */}
      <form
        onSubmit={onSubmit}
        action=""
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00ad25]" />
          <h1 className="text-xl font-semibold">AI image generator</h1>
        </div>

        {/* Article Topic */}
        <p className="mt-6 text-sm font-medium">Describe your image</p>
        <textarea
          onClick={(e) => setInput(e.target.value)}
          value={input}
          rows={5}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="Describe what you want to see in the image..."
          required
        />

        {/* Article Length */}
        <p className="mt-4 text-sm font-medium">Style</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          {imageStyle.map((items, index) => (
            <span
              key={index}
              onClick={() => setSelectedStyle(items)}
              className={`text-sm px-4 py-1 border rounded-full cursor-pointer ${
                selectedStyle === items
                  ? "bg-purple-50 text-purple-700 border-blue-300"
                  : "text-gray-500 border-gray-300"
              }`}
            >
              {items}
            </span>
          ))}
        </div>

        <div className="my-6 flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setPublish(e.target.checked)}
              checked={publish}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>
            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
          </label>
          <p className="text-sm">Make this image public</p>
        </div>

        <br />
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00ab25] to-[#00ff50] text-white px-4 py-2 my-6 text-sm rounded-lg cursor-pointer">
          <Image className="w-5" />
          Generate image
        </button>
      </form>

      {/* right */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-[#8e37eb]" />
          <h1 className="text-xl font-semibold">Generated image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Image className="w-9 h-9" />
            <p>Enter a topic and click "generate image" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateImagePage;
