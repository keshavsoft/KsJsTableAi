const createTH = ({ inKey, inShowTotal }) => {
    // Create table header cell
    const th = document.createElement("th");
    // Attach key for sorting / identification
    if (inShowTotal) {

        th.innerHTML = inKey;

    };

    // Return configured header cell
    return th;
};

export { createTH };