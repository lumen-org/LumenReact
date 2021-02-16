const marker = [{ value: "Square", name: "Square" },
{ value: "Circle", name: "Circle" },
{ value: "Triangle", name: "Triangle" }]

export let defaultSettings = {
    plotsettings: {
        title: "Plots",
        subSettings: {
            datapoints: {
                title: "Data-Settings",
                settings: {
                    symbole: {
                        name: "Test1",
                        type: "enum",
                        extend: marker,
                        value: "Circle",
                        hint: "Can't touch that"
                    },
                    other_stuff: {
                        name: "Other Stuff",
                        type: "enum",
                        extend: marker,
                        value: "Square",
                        hint: "Can't touch that"
                    },
                }
            },
            predictionpoints: {
                title: "Prediction-Settings",
                settings: {
                    symbole: {
                        name: "Test2",
                        type: "enum",
                        extend: marker,
                        value: "Square",
                        hint: "Can't touch that"
                    },
                }
            }
        }
    },
    othersettings: {
        title: "Other Settings",
        subSettings: {
            datapoints: {
                title: "Data-Settings",
                settings: {
                    symbole: {
                        name: "Test1",
                        type: "enum",
                        extend: marker,
                        value: "Circle",
                        hint: "Can't touch that"
                    },
                    other_stuff: {
                        name: "Other Stuff",
                        type: "enum",
                        extend: marker,
                        value: "Square",
                        hint: "Can't touch that"
                    },
                }
            },
            predictionpoints: {
                title: "Prediction-Settings",
                settings: {
                    symbole: {
                        name: "Test2",
                        type: "enum",
                        extend: marker,
                        value: "Square",
                        hint: "Can't touch that"
                    },
                }
            }
        }
    }

}

