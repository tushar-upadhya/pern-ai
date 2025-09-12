import { Hash, Sparkles } from "lucide-react";
import { useState } from "react";
const blogCategories = [
  "General",
  "Technology",
  "Business",
  "Health",
  "LifeStyle",
  "Education",
  "Travel",
  "Food",
];

const BlogTitlePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(blogCategories[0]);
  const [input, setInput] = useState("");

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
          <Sparkles className="w-6 text-[#8e37eb]" />
          <h1 className="text-xl font-semibold">AI title generator</h1>
        </div>

        {/* Article Topic */}
        <p className="mt-6 text-sm font-medium">keyword</p>
        <input
          onClick={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="The future of artificial intelligence is ..."
          required
        />

        {/* Article Length */}
        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          {blogCategories.map((items, index) => (
            <span
              key={index}
              onClick={() => setSelectedCategory(items)}
              className={`text-sm px-4 py-1 border rounded-full cursor-pointer ${
                selectedCategory === items
                  ? "bg-purple-50 text-purple-700 border-blue-300"
                  : "text-gray-500 border-gray-300"
              }`}
            >
              {items}
            </span>
          ))}
        </div>

        <br />
        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#c341f6] to-[#8e37eb] text-white px-4 py-2 my-6 text-sm rounded-lg cursor-pointer">
          <Hash className="w-5" />
          Generate Title
        </button>
      </form>

      {/* right */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8e37eb]" />
          <h1 className="text-xl font-semibold">Generated Title</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Hash className="w-9 h-9" />
            <p>Enter a topic and click "generate title" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitlePage;
