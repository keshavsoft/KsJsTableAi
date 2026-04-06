import { initTable } from "./KSTableAi/V5/entry.js";

const dataToShow = [
    {
        "StockItemName": "AABL 2-Elec Goods-nos-8513-18%",
        "StockItemReservedName": "",
        "StockItemType": "Stock Item"
    },
    {
        "StockItemName": "Adaptor-Nos-8504-18%",
        "StockItemReservedName": "",
        "StockItemType": "Stock Item"
    },
    {
        "StockItemName": "ADFL-300W-LED Flood Light-Nos-9405-18%",
        "StockItemReservedName": "",
        "StockItemType": "Stock Item"
    },
    {
        "StockItemName": "ADFL-50W-LED Flood Light-Nos-9405-18%",
        "StockItemReservedName": "",
        "StockItemType": "Stock Item"
    },
    {
        "StockItemName": "Adhesive Tapes-Nos-3919-18%",
        "StockItemReservedName": "",
        "StockItemType": "Stock Item"
    }
];

let startFunc = () => {
    initTable({
        containerId: 'kSTableContainer',
        data: dataToShow,
        tableName: "Ledgers"
    });
};

startFunc();