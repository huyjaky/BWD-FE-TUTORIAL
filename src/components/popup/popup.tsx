export const Popup = () => {
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
        className="w-[200px] h-[200px] relative  overflow-hidden
            after:block after:top-0 after:left-0 after:w-[20px] after:h-[100%]
            after:bg-slate-400 after:absolute after:animate-slideDown
        "
        id="popup-panel"
      >
        <button
          className="w-[100%] h-[100%] bg-slate-400 absolute animate-slideWidth translate-x-[-200px]"
        >
          asdfasdfasdfasfdsadf
        </button>
      </div>
    </div>
  );
};
