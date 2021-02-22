export const defaultValues = {
    specification: {
        ["X-Axis"]: new Set([]),
        ["Y-Axis"]: new Set([]),
        Color: new Set([]),
    }
}

export const filledTwoValues = {
    specification: {
        ["X-Axis"]: new Set(["age"]),
        ["Y-Axis"]: new Set(["size"]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    }
}

export const filledOneValues = {
    specification: {
        ["X-Axis"]: new Set(["age"]),
        ["Y-Axis"]: new Set([]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    }
}

export const defaultState = {
    "multispecifications": {
        "10": {
            "specification": {
                "Color": new Set([]),
                "X-Axis": new Set([]),
                "Y-Axis": new Set([]),
            }
        }
    }
}

export const filledOneState = {
    "multispecifications": {
        "10": {
            "specification": {
                "Color": new Set([]),
                "X-Axis": new Set(["time[s]"]),
                "Y-Axis": new Set([]),
            }
        }
    }
}

export const changedState = {

}