import { createStore } from "./tableStore.js";
import { createState } from "./HtmlState/start.js";
import { getDomManipulation } from "./DomManipulation/start.js";
import { createServices } from "./Services/createServices.js";

import { render } from "./BuildTotal/start.js";
// validate initTable config (call inside constructor before usage)

const validateConfig = (cfg = {}) => {
    const errors = [];
    debugger;
    // required
    if (!cfg.containerId || typeof cfg.containerId !== "string")
        errors.push("containerId is required (string)");

    if (!Array.isArray(cfg.data))
        errors.push("data must be an array");

    if (!cfg.tableName || typeof cfg.tableName !== "string")
        errors.push("tableName is required (string)");

    // endpoints
    if (cfg.endpoints) {
        ["create", "update", "delete"].forEach((k) => {
            if (cfg.endpoints[k] && typeof cfg.endpoints[k] !== "string")
                errors.push(`endpoints.${k} must be a string`);
        });
    }

    // options
    if (cfg.options) {
        if (cfg.options.vertical) {
            if (
                "showVertical" in cfg.options.vertical &&
                typeof cfg.options.vertical.showVertical !== "boolean"
            ) {
                errors.push("options.vertical.showVertical must be boolean");
            }
        }

        if (cfg.options.table) {
            ["showRowOptions", "showFooter"].forEach((k) => {
                if (
                    k in cfg.options.table &&
                    typeof cfg.options.table[k] !== "boolean"
                ) {
                    errors.push(`options.table.${k} must be boolean`);
                }
            });
        }
    }

    if (errors.length) {
        throw new Error("Invalid initTable config:\n" + errors.join("\n"));
    }
};

class KSAiTable {
    constructor(config) {
        debugger
        validateConfig(config);

        const { containerId, data, tableName, endpoints, options } = config;

        const isValid = validateInputs({
            inTableContainerId: containerId,
            inDataAsCollection: data
        });
        if (!isValid) return; // 🚫 stop execution

        this.containerEl = document.getElementById(containerId);

        this.dataStore = createStore();
        this.uiState = createState();
        this.dom = getDomManipulation();

        updateStore({
            inDataAsCollection: data,
            inTableName: tableName,
            inDataStore: this.dataStore
        });

        this.services = createServices({
            tableName: this.dataStore.getTableName()
        });

        this.uiState.setTableContainerId(containerId);

        render({
            inContainerEl: this.containerEl,
            inDataStore: this.dataStore,
            inDom: this.dom,
            inServices: this.services,
            inOptions: options
        });
    };
};

const updateStore = ({ inDataAsCollection, inTableName, inDataStore }) => {
    inDataStore.setData(inDataAsCollection); // ✅ move data into store
    inDataStore.setTableName(inTableName); // ✅ move data into store
};

const validateInputs = ({ inTableContainerId, inDataAsCollection }) => {
    const htmlContainer = document.getElementById(inTableContainerId);

    if (!htmlContainer) {
        console.error(`div '${inTableContainerId}' not found`);
        return false;
    };

    if (!Array.isArray(inDataAsCollection) || inDataAsCollection.length === 0) {
        console.warn("Empty or invalid data");
        return false;
    };

    return true;
};

export { KSAiTable };
