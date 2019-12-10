//to do
var d3;
var topBrcaGenes, topCoadGenes, topGbmGenes, topKircGenes, topLihcGenes, topStadGenes, topPradGenes;
var brcaData = [], coadData = [], gbmData = [], kircData = [], lihcData = [], stadData = [], pradData = [];


window.onload = function () {
    addListeners();
    d3.csv("data/TopGenes/BRCA_top_genes.csv", function (data) {
        window.brca = data;
        topBrcaGenes = Object.keys(brca[0]);
        topBrcaGenes.shift();
        for (i = 0; i < topBrcaGenes.length; i++) {
            brcaData.push(topBrcaGenes[i] = {gene: topBrcaGenes[i], data: []});
            for (j = 0; j < brca.length; j++) {
                current = topBrcaGenes[i].gene;
                brcaData[i].data.push(parseFloat(brca[j][current]));
            }
        }
    });
    d3.csv("data/TopGenes/COAD_top_genes.csv", function (data) {
        window.coad = data;
        topCoadGenes = Object.keys(coad[0]);
        topCoadGenes.shift();
        for (i = 0; i < topCoadGenes.length; i++) {
            coadData.push(topCoadGenes[i] = {gene: topCoadGenes[i], data: []});
            for (j = 0; j < coad.length; j++) {
                current = topCoadGenes[i].gene;
                coadData[i].data.push(parseFloat(coad[j][current]));
            }
        }
    });
    d3.csv("data/TopGenes/GBM_top_genes.csv", function (data) {
        window.gbm = data;
        topGbmGenes = Object.keys(gbm[0]);
        topGbmGenes.shift();
        for (i = 0; i < topGbmGenes.length; i++) {
            gbmData.push(topGbmGenes[i] = {gene: topGbmGenes[i], data: []});
            for (j = 0; j < gbm.length; j++) {
                current = topGbmGenes[i].gene;
                gbmData[i].data.push(parseFloat(gbm[j][current]));
            }
        }
    });
    d3.csv("data/TopGenes/KIRC_top_genes.csv", function (data) {
        window.kirc = data;
        topKircGenes = Object.keys(kirc[0]);
        topKircGenes.shift();
        for (i = 0; i < topKircGenes.length; i++) {
            kircData.push(topKircGenes[i] = {gene: topKircGenes[i], data: []});
            for (j = 0; j < kirc.length; j++) {
                current = topKircGenes[i].gene;
                kircData[i].data.push(parseFloat(kirc[j][current]));
            }
        }
    });
    d3.csv("data/TopGenes/LIHC_top_genes.csv", function (data) {
        window.lihc = data;
        topLihcGenes = Object.keys(lihc[0]);
        topLihcGenes.shift();
        for (i = 0; i < topLihcGenes.length; i++) {
            lihcData.push(topLihcGenes[i] = {gene: topLihcGenes[i], data: []});
            for (j = 0; j < lihc.length; j++) {
                current = topLihcGenes[i].gene;
                lihcData[i].data.push(parseFloat(lihc[j][current]));
            }
        }
    });
    d3.csv("data/TopGenes/STAD_top_genes.csv", function (data) {
        window.stad = data;
        topStadGenes = Object.keys(stad[0]);
        topStadGenes.shift();
        for (i = 0; i < topStadGenes.length; i++) {
            stadData.push(topStadGenes[i] = {gene: topStadGenes[i], data: []});
            for (j = 0; j < stad.length; j++) {
                current = topStadGenes[i].gene;
                stadData[i].data.push(parseFloat(stad[j][current]));
            }
        }
    });
    d3.csv("data/TopGenes/PRAD_top_genes.csv", function (data) {
        window.prad = data;
        topPradGenes = Object.keys(prad[0]);
        topPradGenes.shift();
        for (i = 0; i < topPradGenes.length; i++) {
            pradData.push(topPradGenes[i] = {gene: topPradGenes[i], data: []});
            for (j = 0; j < prad.length; j++) {
                current = topPradGenes[i].gene;
                pradData[i].data.push(parseFloat(prad[j][current]));
            }
        }
    });
};

function addListeners() {


    body = document.getElementById('humanInner');
    skin = document.getElementById('skin');
    brain = document.getElementById('brain');
    lungs = document.getElementById('lungs');
    stomach = document.getElementById('stomach');
    liver = document.getElementById('liver');
    kidney = document.getElementById('kidney');
    breast = document.getElementById('breast');
    colon = document.getElementById('colon');
    prostate = document.getElementById('prostate');
    infobox = document.getElementById('infobox');


    body.addEventListener('click', function (e) {
        //console.log("this is the body");
    });
    skin.addEventListener('click', function (e) {
        clearHighlight();
        infobox.innerHTML = "this is the skin";
    });
    brain.addEventListener('click', function (e) {
        clearHighlight();
        infobox.innerHTML = "this is the brain";
        for (i = 0; i < gbmData.length; i++) {
            console.log(gbmData[i]);
            drawGeneDistro(gbmData[i]);
        };
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

        plots("TCGA-GBM");
    });
    lungs.addEventListener('click', function (e) {
        clearHighlight();
        infobox.innerHTML = "this is the lungs";
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

    });
    stomach.addEventListener('click', function (e) {
        clearHighlight();
        infobox.innerHTML = "this is the stomach";
        for (i = 0; i < stadData.length; i++) {
            console.log(stadData[i]);
            drawGeneDistro(stadData[i]);
        };
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

        plots("TCGA-STAD");
    });
    liver.addEventListener('click', function (e) {
        clearHighlight();
        infobox.innerHTML = "this is the liver";
        for (i = 0; i < lihcData.length; i++) {
            console.log(lihcData[i]);
            drawGeneDistro(lihcData[i]);
        };
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

        plots("TCGA-LIHC");
    });
    kidney.addEventListener('click', function (e) {
        clearHighlight();
        infobox.innerHTML = "this is the kidney";
        for (i = 0; i < kircData.length; i++) {
            console.log(kircData[i]);
            drawGeneDistro(kircData[i]);
        };
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

        plots("TCGA-KIRC");
    });
    breast.addEventListener('click', function (e) {
        clearHighlight();
        infobox.innerHTML = "this is the breast";
        for (i = 0; i < brcaData.length; i++) {
            console.log(brcaData[i]);
            drawGeneDistro(brcaData[i]);
        };
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

        plots("TCGA-BRCA");
    });
    colon.addEventListener('click', function (e) {
        clearHighlight();
        infobox.innerHTML = "this is the colon";
        for (i = 0; i < coadData.length; i++) {
            console.log(coadData[i]);
            drawGeneDistro(coadData[i]);
        };
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

        plots("TCGA-COAD");
    });
    prostate.addEventListener('click', function (e) {
        clearHighlight();
        infobox.innerHTML = "this is the prostate";
        for (i = 0; i < pradData.length; i++) {
            console.log(pradData[i]);
            drawGeneDistro(pradData[i]);
        };
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "20");

        plots("TCGA-PRAD");
    });

}

function clearHighlight() {
    infobox.innerHTML = "";
    d3.select(skin).attr("stroke", "none");
    d3.select(brain).attr("stroke", "none");
    d3.select(lungs).attr("stroke", "none");
    d3.select(stomach).attr("stroke", "green").attr("stroke-width", "15");
    d3.select(liver).attr("stroke", "orange").attr("stroke-width", "15");
    d3.select(kidney).attr("stroke", "red").attr("stroke-width", "15");
    d3.select(breast).attr("stroke", "hotpink").attr("stroke-width", "15");
    d3.select(colon).attr("stroke", "brown").attr("stroke-width", "10");
    d3.select(prostate).attr("stroke", "blue").attr("stroke-width", "15");

}

function drawGeneDistro(cancer) {
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 10, bottom: 10, left: 40},
            width = 100 - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
    var svg = d3.select("#infobox")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("class", "plot")
            //.attr("class", "label")
            .append("g")
            .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

// create data
    var data = cancer.data;

// Compute summary statistics used for the box:
    var data_sorted = data.sort(d3.ascending);
    console.log(data_sorted);
    var q1 = d3.quantile(data_sorted, .25);
    var median = d3.quantile(data_sorted, .5);
    var q3 = d3.quantile(data_sorted, .75);
    var interQuantileRange = q3 - q1;
    var min = data_sorted[0]; //q1 - 1.5 * interQuantileRange;
    var max = q1 + 1.5 * interQuantileRange; //data_sorted[data_sorted.length-1];
    var axismin = q1 - 1.75 * interQuantileRange;
    var axismax = q1 + 1.75 * interQuantileRange;
    console.log(min, max)
// Show the Y scale
    var y = d3.scaleLinear()
            .domain([min, axismax])
            // .domain([0, 30000])
            .range([height, 0]);
    svg.call(d3.axisLeft(y));

// a few features for the box
    var center = 25;
    var width = 25;

// Show the main vertical line
    svg
            .append("line")
            .attr("x1", center)
            .attr("x2", center)
            .attr("y1", y(min))
            .attr("y2", y(max))
            .attr("stroke", "black");

// Show the box
    svg
            .append("rect")
            .attr("x", center - width / 2)
            .attr("y", y(q3))
            .attr("height", (y(q1) - y(q3)))
            .attr("width", width)
            .attr("stroke", "black")
            .style("fill", "#69b3a2");

// show median, min and max horizontal lines
    svg
            .selectAll("toto")
            .data([min, median, max])
            .enter()
            .append("line")
            .attr("x1", center - width / 2)
            .attr("x2", center + width / 2)
            .attr("y1", function (d) {
                return(y(d));
            })
            .attr("y2", function (d) {
                return(y(d));
            })
            .attr("stroke", "black");


// label
    svg.append("text")
            .attr("transform",
                    "translate(" + ((width  + 20)/ 2) + " ," +
                    (height - margin.top + 25) + ")")
            .attr("class", "label")
            .style("text-anchor", "middle")
            .text(cancer.gene);

}