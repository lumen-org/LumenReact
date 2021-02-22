const marker = [{ value: "Square", name: "Square" },
{ value: "Circle", name: "Circle" },
{ value: "Triangle", name: "Triangle" }]

export let defaultSettings = {
    plotsettings: {
        title: "Plots",
        hint: "This is the area to change the global Plots stuff",
        subSettings: {
            datapoints: {
                title: "Data-Settings",
                hint: "This is the area to change the data-settings stuff",
                settings: {
                    symbole: {
                        hint: "A symbole is nice to see things",
                        name: "Test1",
                        type: "enum",
                        extend: marker,
                        value: "Circle",
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
    },
    histogrammsettings: {
        title: "Histogramm Plot",
        subSettings: {
            datapoints: {
                title: "Marker",
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
            }
        }
    }

}

