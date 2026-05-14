import { createTH } from "./createTH.js";

const startFunc = ({ inKey, inShowTotal }) => {
    const th = createTH({ inKey, inShowTotal });

    return th;
};

export default startFunc;