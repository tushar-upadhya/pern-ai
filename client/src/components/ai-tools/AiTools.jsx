import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AiToolsData } from "../../assets/assets";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = (tool) => {
    if (user) {
      navigate(tool.path);
    } else {
      setShowDialog(true);
    }
  };

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      <div className="text-center capitalize">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          PowerFull ai tools
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          everything you need to create, enhance, and optimize your content with
          cutting-edge ai technology
        </p>
      </div>

      <div className="flex flex-wrap mt-10 justify-center">
        {AiToolsData.map((tool, index) => {
          return (
            <div
              key={index}
              className="p-8 m-4 max-w-xs rounded-lg bg-[#fdfdfe] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => handleClick(tool)}
            >
              <tool.Icon
                className="h-12 w-12 p-3 text-white rounded-xl"
                style={{
                  background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
                }}
              />
              <h3 className="mt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
              <p className="text-gray-400 text-sm max-w-[95%]">
                {tool.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Zomato-inspired Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-[90%] max-w-sm border border-red-100 animate-bounceIn">
            <h2 className="text-2xl font-bold text-red-600 mb-3 tracking-wide">
              Hungry for AI?
            </h2>
            <p className="text-gray-700 mb-5 text-sm font-medium leading-relaxed">
              Sign in to savor the full power of our AI tools!
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDialog(false)}
                className="px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 transition-all duration-200"
              >
                Not Now
              </button>
              <button
                onClick={() => {
                  setShowDialog(false);
                  navigate("/sign-in");
                }}
                className="px-5 py-2 rounded-full text-sm font-semibold bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition-all duration-200"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiTools;
