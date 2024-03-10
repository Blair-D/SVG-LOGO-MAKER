function createSvg(data) {
    
    let svgProperties = ""; 

     const svgTriangle = `
        <svg height="250" width="250">
            <polygon points="0,200 300,200 150,0" style="fill:${data['shape-color']};stroke:black ;stroke-width:3" />
            <text x="50%" y="50%" fill="${data['text-color']}" text-anchor="middle" font-size="40px" dominant-baseline="text-before-edge">${data.letters}</text>
        </svg>`;

     const svgSquare = `
        <svg height="250" width="250" >
            <rect x="50" y="20" width="400" height="180" fill="${data['shape-color']}"/>
            <text x="50%" y="50%" fill="${data['text-color']}" text-anchor="middle" font-size="55px" dominant-baseline="central">${data.letters}</text>
        </svg>`;   

     const svgCircle = `
        <svg height="250" width="250">
            <circle cx="75%" cy="75%" r="50" stroke="black" stroke-width="3" fill="${data.shape.color}"/>
            <text x="60%" y="60%" fill="${data['text-color']}" text-anchor="middle" font-size="50px" dominant-baseline="central">${data.letters}</text>
        </svg>`;

    if (data.shape.includes('Triangle')) {
        svgProperties = svgTriangle;
    } else if (data.shape.includes('Square')) {
        svgProperties = svgSquare;
    } else if (data.shape.includes('Circle')) {
        svgProperties = svgCircle;
    } else {
        svgProperties = "No shapes chosen.";
    }
    return svgProperties;
}

module.exports = createSvg;

