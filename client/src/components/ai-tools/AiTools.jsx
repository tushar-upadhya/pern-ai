import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";
import { AiToolsData } from "../../assets/assets";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

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
              onClick={() => navigate(user && navigate(tool.path))}
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
    </div>
  );
};

export default AiTools;
