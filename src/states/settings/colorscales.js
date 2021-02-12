function makeDensityScale(colorArray, dropSteps = 0) {
    colorArray = colorArray.slice(dropSteps);
    const threshhold = 0.000001;
    let colorScale = [[0, 'rgba(255,255,255,0)'], [threshhold, 'rgba(255,255,255,0)']];  // to make sure very small values are drawn in white
    // todo: this is ugly!
    // let split = ss.Splitter.equidist(new Domain.Numeric([0,1]), true, colorArray.length-1); // -1 is a BUG!!
    let split = ss.Splitter.equidist(new Domain.Numeric([0, 1]), true, colorArray.length - 1); // -1 is a BUG!!
    split.push(1);
    split[0] = threshhold;
    for (let i = 0; i < colorArray.length; ++i) {
        colorScale.push([split[i], colorArray[i]]);
    }
    return colorScale;
}

export const colorscales = {
    blues: d3chromatic.schemeBlues[9],
    density_blues: makeDensityScale(d3chromatic.schemeBlues[9]),
    greens: d3chromatic.schemeGreens[9],
    density_greens: makeDensityScale(d3chromatic.schemeGreens[9]),
    greys: d3chromatic.schemeGreys[9],
    density_greys_old: makeDensityScale(d3chromatic.schemeGreys[9], 0),
    density_pinks_old: makeDensityScale(d3chromatic.schemeRdPu[9], 0),
    density_greys: makeDensityScale(d3.range(0.2, 1.1, 0.1).map(i => d3chromatic.interpolateGreys(i))),
    density_pinks: makeDensityScale(d3.range(0.2, 1.1, 0.1).map(i => d3chromatic.interpolateRdPu(i))),
    oranges: d3chromatic.schemeOranges[9],
    reds: d3chromatic.schemeReds[9],
    rdBu: d3chromatic.schemeRdBu[11],
    rdYlBu: d3chromatic.schemeRdYlBu[9],
    rdYlBu_lessBright: [...d3chromatic.schemeRdYlBu[11].slice(0, 4), ...d3chromatic.schemeRdYlBu[11].slice(7)],
    rdYlGn: d3chromatic.schemeRdYlGn[9],
    ylOrBr: d3chromatic.schemeYlOrBr[9],
    ylOrBr_lessBright: d3chromatic.schemeYlOrBr[9].slice(2),
    set1: d3chromatic.schemeSet1,
    paired12: d3chromatic.schemePaired,
    discrete6light: d3.range(6).map(i => d3chromatic.schemePaired[i * 2]),
    discrete6dark: d3.range(6).map(i => d3chromatic.schemePaired[i * 2 + 1]),
    discrete9light: d3chromatic.schemeSet1.map(co => d3color.hsl(co).brighter(0.5).rgb().toString()),
    discrete9dark: d3chromatic.schemeSet1,
    discrete9dark2: d3chromatic.schemeDark2,
},