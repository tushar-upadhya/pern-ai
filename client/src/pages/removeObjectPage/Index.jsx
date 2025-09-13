import { Scissors, Sparkles } from "lucide-react";
import { useState } from "react";

const RemoveObjectPage = () => {
  const [input, setInput] = useState("");
  const [object, setObject] = useState("");

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
          <Sparkles className="w-6 text-[#4a7aff]" />
          <h1 className="text-xl font-semibold">object removal</h1>
        </div>

        <p className="mt-6 text-sm font-medium">upload image</p>
        <input
          onClick={(e) => setInput(e.target.files[0])}
          accept="image/*"
          type="file"
          className="w-full p-2 px-3 mt-2 outline-none text-gray-600 text-sm rounded-md border border-gray-300"
          required
        />

        <p className="mt-6 text-sm font-medium">
          Describe object name to remove
        </p>
        <textarea
          onClick={(e) => setObject(e.target.value)}
          value={object}
          rows={5}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="e.g watch or spoon, ONLY SINGLE OBJECT NAMES"
          required
        />

        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417df6] to-[#8e37eb] text-white px-4 py-2 my-6 text-sm rounded-lg cursor-pointer">
          <Scissors className="w-5" />
          remove object
        </button>
      </form>

      {/* right */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Scissors className="w-5 h-5 text-[#ff4938]" />
          <h1 className="text-xl font-semibold">processed image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Scissors className="w-9 h-9" />
            <p>upload an image and click "remove object" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveObjectPage;
