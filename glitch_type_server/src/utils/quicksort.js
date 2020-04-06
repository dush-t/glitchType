const swap = (array, i, j) => {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

const partition = (items, left, right) => {
    let pivot = items[Math.floor((right + left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
        while (items[i].score < pivot.score) {
            i++
        }
        while (items[j].score > pivot.score) {
            j--
        }
        if (i <= j) {
            swap(items, i, j)
            i++
            j--
        }
    }
    return i
}

const quickSort = (items, left, right) => {
    var index
    if (items.length > 1) {
        index = partition(items, left, right)
        if (left < index - 1) {
            quickSort(items, left, index - 1)
        }
        if (index < right) {
            quickSort(items, index, right)
        }
    }
    return items
}
