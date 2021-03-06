export const defaultValues = {
    specification: {
        X_Axis: new Set([]),
        Y_Axis: new Set([]),
        Color: new Set([]),
    }
}

export const filledTwoValues = {
    specification: {
        X_Axis: new Set(["age"]),
        Y_Axis: new Set(["size"]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    }
}

export const filledOneValues = {
    specification: {
        X_Axis: new Set(["age"]),
        Y_Axis: new Set([]),
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
                "X_Axis": new Set([]),
                "Y_Axis": new Set([]),
            }
        }
    }
}

export const filledOneState = {
    "multispecifications": {
        "10": {
            "specification": {
                "Color": new Set([]),
                "X_Axis": new Set(["time[s]"]),
                "Y_Axis": new Set([]),
            }
        }
    }
}

export const changedState = {

}