export const bubbleSort = (arrNotDisableLetter) => {
    for (let i = 0, endI = arrNotDisableLetter.length-1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arrNotDisableLetter[j].typeScore < arrNotDisableLetter[j + 1].typeScore) {
                [arrNotDisableLetter[j + 1], arrNotDisableLetter[j]]=[arrNotDisableLetter[j], arrNotDisableLetter[j + 1]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arrNotDisableLetter;
};