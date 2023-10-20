const plusProps = (arr, prop) => {
    const sum = arr.reduce((curr, next) => {
        return curr + next[prop]
    }, 0)
    return sum
}

module.exports = plusProps
