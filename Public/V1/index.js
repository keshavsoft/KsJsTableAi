import { initTable } from "./KSTableAi/V7/entry.js";

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

const ledgerDataToShow = [
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
    // initTable({
    //     containerId: 'kSTableContainer',
    //     data: dataToShow,
    //     tableName: "Stock Items",
    //     endPoints: {
    //         create: "",
    //         update: "",
    //         delete: ""
    //     },
    //     options: {
    //         showVertical: false,
    //         showRowOptions: false,
    //         showFooter: true
    //     }
    // });
debugger;
    initTable({
        containerId: 'kSTableContainerForLedgers',
        data: ledgerDataToShow,
        tableName: "Ledgers",
        endPoints: {
            create: "",
            update: "",
            delete: ""
        },
        options: {
            vertical: {
                showVertical: false
            },
            table: {
                showRowOptions: false,
                showFooter: true
            }
        }
    });
};

startFunc();