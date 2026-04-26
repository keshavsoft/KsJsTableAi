import { buildHeaderRow } from "../builders/buildHeaderRow.js";
import { buildDataListContainer } from "../builders/buildDataListContainer.js";
import { buildTableShell } from "../builders/buildTableShell.js";

export const buildFullUI = ({ containerEl, inTableName }) => {
    const root = containerEl;
    root.className = "max-w-6xl mx-auto p-2";

    const { header } = buildHeaderRow({ inTitleText: inTableName });
    const { container: dataList } = buildDataListContainer();
    const { wrapper } = buildTableShell();

    root.replaceChildren(header, wrapper, dataList);
};