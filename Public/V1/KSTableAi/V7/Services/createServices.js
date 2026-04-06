import { createItem } from "./createItem.js";

export const createServices = ({ tableName }) => {
    return {
        actions: {
            create: (payload) => createItem({ tableName, payload }),
            update: (id, payload) => updateItem({ tableName, id, payload }),
            remove: (id) => deleteItem({ tableName, id })
        }
    };
};