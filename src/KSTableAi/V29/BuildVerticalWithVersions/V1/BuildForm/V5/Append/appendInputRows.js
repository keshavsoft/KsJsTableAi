import { createInputRow } from "../Create/CreateInputRow/createInputRow.js";

const appendInputRows = ({
    inFieldset,
    inVisibleColumnsConfig,
    inDefaultRow,
    inInputs,
    inUiClasses
}) => {
    // debugger;
    inVisibleColumnsConfig.forEach(localColumn => {
        appendInputRow({
            inFieldset,
            inColumn: localColumn,
            inDefaultRow,
            inInputs,
            inUiClasses,
            isDate: localColumn.isDate,
            defaultToday: localColumn.defaultToday,
            isReadonly: localColumn.isReadonly,
            autoFocus: localColumn.autoFocus,
            isSearch: localColumn.isSearch
        });
    });
};

const appendInputRow = ({
    inFieldset,
    inColumn,
    inDefaultRow,
    inInputs,
    inUiClasses,
    isDate,
    defaultToday,
    isReadonly,
    autoFocus,
    isSearch

}) => {

    const localRow = createInputRow({
        inCol: inColumn,
        inDefaultRow,
        inInputs,
        inInputClass: inUiClasses.inputClass,
        inRowClass: inUiClasses.rowClass,
        inLabelClass: inUiClasses.labelClass,
        isDate,
        defaultToday,
        isReadonly,
        autoFocus,
        isSearch

    });

    inFieldset.appendChild(localRow);
};

export { appendInputRows };