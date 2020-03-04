const BRACKETS = {
    "(": ")",
    "[": "]",
    "{": "}",
    "|": "|",
    "1": "2",
    "3": "4",
    "5": "6",
    "7": "7",
    "8": "8"
};

module.exports = function check(str, bracketsConfig) {
    let queue = [];
    for (let i = 0; i < str.length; i++) {
        // if open and open is not last in queue, add
        if (str[i] in BRACKETS && queue[queue.length - 1] !== str[i])
            queue.push(BRACKETS[str[i]]);
        // if queue and last element equal close
        else if (queue.length > 0 && queue[queue.length - 1] === str[i])
            queue.pop();
        // else str is failure
        else return false;
    }
    // if exist close elements
    if (queue.length > 0) return false;
    return true;
};
