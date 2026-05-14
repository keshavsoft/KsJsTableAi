// /UI/mountTableUI.js

import { buildHeader } from "../BuildTableVersions/V4/BuildHeaderVersions/V2/start.js";
import { buildBody } from "../BuildTableVersions/V4/BuildBodyVersions/V2/start.js";
import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForSummary/V8/start.js";

import { buildFullUI } from "./compose/buildFullUI.js";

const startFunc = ({
    containerEl,
    dataStore,
    dom,
    services,
    options,
    endPoints,
    columnsConfig,
    uiClasses,
    callbacks,
    inConfig
}) => {
    // debugger
    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName
    });
    debugger;
    const visibleColumns = dataStore.getVisibleColumns();
    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();

    buildHeader({
        inContainerEl: containerEl,
        inDom: dom,
        inVisibleColumns: visibleColumns,
        inThClassName: uiClasses?.thead?.thClass,
        inTrClassName: uiClasses?.thead?.trClass,
        inThSerialClassName: uiClasses?.thead?.thSerialClass
    });

    buildBody({
        inDataStore: dataStore,
        inContainerEl: containerEl,
        inDom: dom
    });

    buildFooter({
        inContainerEl: containerEl,
        inDom: dom,
        options,
        inVisibleColumnsConfig: visibleColumnsConfig
    })
};

export default startFunc;