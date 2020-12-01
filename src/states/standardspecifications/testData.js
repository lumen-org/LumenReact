export const defaultValues = {
    specification: {
        X_Axis: new Set([]),
        Y_Axis: new Set([]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    },
    facets: {
        Prediction: {
            model: false,
            data: false,
        },
        "Data Points": {
            model: false,
            data: true,
        },
        Marginals: {
            model: false,
            data: true,
        },
        Density: {
            model: false,
            data: false,
        },
    },
};

export const filledOneValue = {
    specification: {
        X_Axis: new Set(["age"]),
        Y_Axis: new Set([]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    },
    facets: {
        Prediction: {
            model: false,
            data: false,
        },
        "Data Points": {
            model: false,
            data: true,
        },
        Marginals: {
            model: false,
            data: true,
        },
        Density: {
            model: false,
            data: false,
        },
    },
};

export const filledTwoValues = {
    specification: {
        X_Axis: new Set(["age"]),
        Y_Axis: new Set(["size"]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    },
    facets: {
        Prediction: {
            model: false,
            data: false,
        },
        "Data Points": {
            model: false,
            data: true,
        },
        Marginals: {
            model: false,
            data: true,
        },
        Density: {
            model: false,
            data: false,
        },
    },
};
