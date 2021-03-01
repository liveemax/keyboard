
export const speedAverage = (speed:Array<number>) => {
    if (speed.length <= 2) {

        return "0"
    }
    else {
        let speeda = speed.reduce((acc, el, index, arr) => {
            return (arr[0] - arr[index - 1])
        })
        return Math.ceil((speed.length / speeda) * 1000 * 60)
    }
}