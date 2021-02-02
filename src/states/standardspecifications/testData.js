export const defaultValues = {
    specification: {
        "X-Axis": new Set([]),
        "Y-Axis": new Set([]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    },
    facets: {
        Aggregation: {
            model: false,
            data: false,
        },
        Samples: {
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
        "X-Axis": new Set(["age"]),
        "Y-Axis": new Set([]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    },
    facets: {
        Aggregation: {
            model: false,
            data: false,
        },
        Samples: {
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
        "X-Axis": new Set(["age"]),
        "Y-Axis": new Set(["size"]),
        Filter: new Set([]),
        Detail: new Set([]),
        Color: new Set([]),
        Shape: new Set([]),
        Size: new Set([]),
    },
    facets: {
        Aggregation: {
            model: false,
            data: false,
        },
        Samples: {
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

export const defaultState = {
    standardspecifications: {
        '10': {
            specification: {
                "X-Axis": new Set([]),
                "Y-Axis": new Set([]),
                Filter: new Set([]),
                Detail: new Set([]),
                Color: new Set([]),
                Shape: new Set([]),
                Size: new Set([]),
            },
            facets: {
                Aggregation: {
                    model: false,
                    data: false,
                },
                Samples: {
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
        }
    }
}

export const filledOneState = {
    standardspecifications: {
        '10': {
            specification: {
                "X-Axis": new Set(["time[s]"]),
                "Y-Axis": new Set([]),
                Filter: new Set([]),
                Detail: new Set([]),
                Color: new Set([]),
                Shape: new Set([]),
                Size: new Set([]),
            },
            facets: {
                Aggregation: {
                    model: false,
                    data: false,
                },
                Samples: {
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
        }
    }
}

export const changedPredictionModelState = {
    standardspecifications: {
        '10': {
            specification: {
                "X-Axis": new Set([]),
                "Y-Axis": new Set([]),
                Filter: new Set([]),
                Detail: new Set([]),
                Color: new Set([]),
                Shape: new Set([]),
                Size: new Set([]),
            },
            facets: {
                Aggregation: {
                    model: true,
                    data: false,
                },
                Samples: {
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
        }
    }
}