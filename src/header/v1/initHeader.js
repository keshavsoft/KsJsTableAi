export const initHeader = (config = {}) => {
    const menu = document.getElementById("menu");
    if (!menu) return;

    menu.innerHTML = "";

    (config.items || []).forEach(item => {
        const li = document.createElement("li");
        li.className = "px-3 py-2 cursor-pointer hover:text-blue-500";
        li.textContent = item.label;

        if (item.onClick) {
            li.addEventListener("click", item.onClick);
        }

        menu.appendChild(li);
    });
};