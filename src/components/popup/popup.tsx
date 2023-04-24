import { themeContext } from "@/contexts";
import { useContext, useEffect } from "react";

export const Popup = () => {
  const {theme, toggleTheme} = useContext(themeContext)

  useEffect(()=> {
    console.log(theme);
  }, [theme])

  const handleOnClick = () => {
    const panel = document.getElementById("popup-panel");
    if (panel?.classList.contains("hidden")) {
      panel.classList.remove("hidden");
    } else {
      panel?.classList.add("hidden");
    }
  };


  return (
    <div className="flex">
      <button
        className="w-[200px] h-[200px] bg-blue-400 rounded-xl"
        onClick={handleOnClick}
        id="popup-btn"
      >
        popup
      </button>
      <div
        className={`w-[200px] h-[200px] relative  overflow-hidden
            after:block after:top-0 after:left-0 after:w-[20px] after:h-[100%]
            after:${theme} after:absolute after:animate-slideDown`}
        id="popup-panel"
      >
        <button
          className={`w-[100%] h-[100%] ${theme} absolute animate-slideWidth translate-x-[-200px]`}
          onClick={toggleTheme.bind(this, theme === 'bg-slate-500' ? 'bg-slate-900' : 'bg-slate-500' )}
        >
          Check color
        </button>
      </div>
    </div>
  );
};
