const Speed = (state) => {
    if (state.currentLetter > 3) {
        return Math.ceil(state.speed * 1000 * 60)
    }
    return "0"
}
export default Speed