import createFooterCell from "./CreateFooterCell/start.js";

const startFunc = ({ inVisibleColumnsConfig, tr }) => {
    for (const [key, value] of Object.entries(inVisibleColumnsConfig)) {
        console.log("value : ", value);

        tr.appendChild(createFooterCell({
            inKey: key,
            inShowTotal: value.showTotal
        }));
    };
};

export { startFunc };