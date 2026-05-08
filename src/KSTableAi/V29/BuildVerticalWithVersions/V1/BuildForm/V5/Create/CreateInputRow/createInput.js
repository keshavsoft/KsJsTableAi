// createInput.js

const createInput = ({
    col,
    inputClass,
    value,
    inShowDataList,
    isDate,
    defaultToday,
    isReadonly,
    autoFocus,
    isSearch
}) => {

    const input = document.createElement("input");

    input.className = inputClass;
    input.name = col;

    if (value !== undefined) {
        input.dataset.defaultValue = value ?? "";
    };

    input.value = value ?? "";

    if (inShowDataList) {
        input.setAttribute("list", `${col}List`);
    };

    if (isDate) {
        debugger
        input.setAttribute("type", "date");
    };

    if (isDate && defaultToday) {
        input.valueAsDate = new Date();
    };

    if (isReadonly) {
        input.readOnly = true;
    };

    if (autoFocus) {
        input.autofocus = true;
    };

    if (isSearch) {
        input.setAttribute("type", "search");
    };

    return input;
};

export { createInput };