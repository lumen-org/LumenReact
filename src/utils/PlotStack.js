export class PlotStack {
    static push(arr, item) {
        arr.push(item)
        return arr
    }

    static pop(arr) {
        if (!this.isEmpty(arr)) {
            arr.pop()
            return arr
        }
        return []
    }

    static includes(arr, item) {
        return arr.includes(item)
    }

    static remove(arr, item) {
        if (!this.isEmpty(arr)) {
            arr.splice(arr.indexOf(item), 1)
            return arr
        }
        return []
    }

    static moveToTop(arr, item) {
        if (!this.isEmpty(arr)) {
            return this.push(this.remove(arr, item), item);
        }
        return []
    }

    static peek(arr) {
        return arr[arr.length - 1]
    }

    static isEmpty(arr) {
        return arr.length === 0
    }
}