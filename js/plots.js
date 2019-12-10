function plots(key){

	d3.csv("data/Compendium_Clinical.csv", function (data) {
        d3.selectAll(".remove1").remove();
        let age = [20,40,60,80,100,120];
        let tempList = [];
        let count = [0,0,0,0,0];
        let maleCount  = 0;
        let femaleCount = 0;
        let race = ["white","american indian or alaska native","asian","black or african american",
                    "native hawaiian or other pacific islander","not reported"];
        let raceData = [0,0,0,0,0,0];
        let vitals = ["Alive","Dead","Not Reported"];
        let vitalsReport = [0,0,0];
        let malignant = ["YES","NO","not reported"];
        let malignantReport = [0,0,0];
        let tumor = ["stage i","stage ii","stage iii","stage iv","not reported"];
        let tumorReport = [0,0,0,0,0]

        data.forEach(function(l_data){
            if(l_data.project_id == key)
            {
                if(parseInt(l_data.age_at_index) <= 20)
                {
                    count[0] = count[0] + 1;
                }else if(parseInt(l_data.age_at_index) <= 40){
                    count[1] = count[1] + 1;
                }else if(parseInt(l_data.age_at_index) <= 60)
                {
                    count[2] = count[2] + 1;
                }else if(parseInt(l_data.age_at_index) <= 80)
                {
                    count[3] = count[3] + 1;
                }else
                {
                    count[4] = count[4] + 1;
                }
                if(l_data.gender.trim() == "male") maleCount = maleCount+1
                else femaleCount = femaleCount + 1
                
                if(l_data.race == race[0] ) raceData[0] = raceData[0] + 1;
                else if(l_data.race == race[1] ) raceData[1] = raceData[1] + 1;
                else if(l_data.race == race[2] ) raceData[2] = raceData[2] + 1;
                else if(l_data.race == race[3] ) raceData[3] = raceData[3] + 1;
                else if(l_data.race == race[4] ) raceData[4] = raceData[4] + 1;
                else raceData[5] = raceData[5] + 1;

                if(l_data.vital_status == vitals[0]) vitalsReport[0] = vitalsReport[0]+1;
                else if(l_data.vital_status == vitals[1]) vitalsReport[1] = vitalsReport[1]+1;
                else vitalsReport[2] = vitalsReport[2]+1;
                
                if(l_data.prior_malignancy.toUpperCase() == malignant[0]) malignantReport[0] = malignantReport[0] + 1;
                else if(l_data.prior_malignancy.toUpperCase() == malignant[1]) malignantReport[1] = malignantReport[1] + 1;
                else malignantReport[2] = malignantReport[2] + 1;

                if(l_data.tumor_stage == tumor[0]) tumorReport[0] = tumorReport[0] + 1;
                else if(l_data.tumor_stage == tumor[1]) tumorReport[1] = tumorReport[1] + 1;
                else if(l_data.tumor_stage == tumor[2]) tumorReport[2] = tumorReport[2] + 1;
                else if(l_data.tumor_stage == tumor[3]) tumorReport[3] = tumorReport[3] + 1;
                else tumorReport[4] = tumorReport[4] + 1;

            }
        })
        console.log("count : ", count);
        console.log("maleCount , FemaleCount : ", maleCount, femaleCount);
        console.log("malignantReport : ", malignantReport)
        drawAxis(age,count);
        drawPie(maleCount,femaleCount);
        drawPieRace(raceData);
        drawPieVitals(vitalsReport);
        drawPieMalignant(malignantReport);
        drawBoxTumor(tumor,tumorReport);
    });
}
function drawAxis(age,count)
{
    let svgId = "clinicalbox_svg";
    let width = 500;
    let height =  250;

    let svg = d3.select("#clinicalbox_svg") 
             .attr("width",width)
             .attr("height",height)

    svg = svg.append("g").attr("class","remove1");

    var xscale = d3.scaleLinear()
                  .domain([0, 120])
                  .range([0, width-100]);

    var yscale = d3.scaleLinear()
                  .domain([0, (d3.max(count)+30)])
                  .range([(height), 40]);

    var x_axis = d3.axisBottom(xscale).ticks(7);
                   
    var y_axis = d3.axisLeft(yscale).ticks(7);
                    
    svg.append("g").attr("transform","translate(40,"+(height-40)+")")
                    .call(x_axis);
    svg.append("g").attr("transform","translate(40,"+(-40)+")")
                    .call(y_axis);

    let rect = svg.append("g");             
    for(let i=0;i<count.length;i++)
    {
        let x1 = xscale(age[i])
    let x2 = xscale(age[i+1])
    let y1 = yscale(0)
    let y2 = yscale(count[i])

    rect.append("rect")
                .attr("x",x1)
                .attr("y",y2)
                .attr("width",x2-x1)
                .attr("height",y1-y2)
                .attr("transform","translate(40,-40)")
                .style("fill",'#99d8c9')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
    }
    svg.append("text").attr("x",width/4)
                    .attr("y", height-5)
                    .style("fill","black")
                    .text("Age of Patient at Diagnosis");
        
}
function drawPie(maleCount,FemaleCount)
{
    let width = 500
    let height =  250
    let radius = Math.min(width, height) / 3;
    let data = [maleCount,FemaleCount]
    var color = d3.scaleOrdinal(['#4daf4a','#377eb8']);
    let svg = d3.select("#clinicalpie_svg")
                .attr("width",width)
                .attr("height",height)
                .attr("radius",radius)
    svg = svg.append("g").attr("class","remove1");
    g = svg.append("g").attr("transform", "translate(" + width / 3 + "," + height / 2 + ")");
    
    var pie = d3.pie();

    var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);
    
    //Generate groups
    var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")    
    
    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);
    
    svg.append("text").attr("x",width/6)
                .attr("y", height-10)
                .style("fill","black")
                .text("Patient Gender Distribution");
    
    svg.append("text").attr("x",300)
                .attr("y", 100)
                .style("fill","black")
                .text("Male");

    svg.append("text").attr("x",300)
                .attr("y", 130)
                .style("fill","black")
                .text("Female");
    
    svg.append("rect")
            .attr("x",370)
            .attr("y",80)
            .attr("width",20)
            .attr("height",20)
            .style("fill",'#4daf4a')
            .attr("stroke-width", 1)
            .attr("stroke", "black");

    svg.append("rect")
                .attr("x",370)
                .attr("y",110)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#377eb8')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
}
function drawPieRace(raceData)
{
    let width = 500
    let height =  250
    let radius = Math.min(width, height) / 3;
    let data = raceData;
    var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c','#e41a6c']);
    let svg = d3.select("#clinicalpierace_svg")
                .attr("width",width)
                .attr("height",height)
                .attr("radius",radius)

    svg = svg.append("g").attr("class","remove1");
    g = svg.append("g").attr("transform", "translate(" + width / 3 + "," + height / 2 + ")");
    
    var pie = d3.pie();

    var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);
    
    //Generate groups
    var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")    
    
    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);
    
    svg.append("text").attr("x",width/6)
                .attr("y", height-10)
                .style("fill","black")
                .text("Patient Race Distribution");

    //Color labeling
    svg.append("text").attr("x",300)
                .attr("y", 70)
                .style("fill","black")
                .text("White");

    svg.append("text").attr("x",300)
                .attr("y", 100)
                .style("fill","black")
                .text("American Indian");
    
    svg.append("text").attr("x",300)
                .attr("y", 130)
                .style("fill","black")
                .text("Asian");

    svg.append("text").attr("x",300)
                .attr("y", 160)
                .style("fill","black")
                .text("African America");

    svg.append("text").attr("x",300)
                .attr("y", 190) 
                .style("fill","black")
                .text("Native Hawaiian");

    svg.append("text").attr("x",300)
                .attr("y", 220)
                .style("fill","black")
                .text("Not Reported");            
    
    svg.append("rect")
            .attr("x",440)
            .attr("y",50)
            .attr("width",20)
            .attr("height",20)
            .style("fill",'#4daf4a')
            .attr("stroke-width", 1)
            .attr("stroke", "black");

    svg.append("rect")
                .attr("x",440)
                .attr("y",80)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#377eb8')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
    
    svg.append("rect")
                .attr("x",440)
                .attr("y",110)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#ff7f00')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
    
    svg.append("rect")
                .attr("x",440)
                .attr("y",140)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#984ea3')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
    
    svg.append("rect")
                .attr("x",440)
                .attr("y",170)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#e41a1c')
                .attr("stroke-width", 1)
                .attr("stroke", "black");

    svg.append("rect")
                .attr("x",440)
                .attr("y",200)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#e41a6c')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
}
function drawPieVitals(vitalsReport)
{
    let width = 500
    let height =  250
    let radius = Math.min(width, height) / 3;
    let data = vitalsReport;
    var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00']);
    let svg = d3.select("#clinicalpievital_svg")
                .attr("width",width)
                .attr("height",height)
                .attr("radius",radius)

    svg = svg.append("g").attr("class","remove1");
    g = svg.append("g").attr("transform", "translate(" + width / 3 + "," + height / 2 + ")");
    
    var pie = d3.pie();

    var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);
    
    //Generate groups
    var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")    
    
    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);
    
    svg.append("text").attr("x",width/6)
                .attr("y", height-10)
                .style("fill","black")
                .text("Patient Vitals Status");
    
    svg.append("text").attr("x",300)
                .attr("y", 100)
                .style("fill","black")
                .text("Alive");

    svg.append("text").attr("x",300)
                .attr("y", 130)
                .style("fill","black")
                .text("Dead");
    
    svg.append("text").attr("x",300)
                .attr("y", 160)
                .style("fill","black")
                .text("Not Reported");
    
    svg.append("rect")
            .attr("x",420)
            .attr("y",80)
            .attr("width",20)
            .attr("height",20)
            .style("fill",'#4daf4a')
            .attr("stroke-width", 1)
            .attr("stroke", "black");

    svg.append("rect")
                .attr("x",420)
                .attr("y",110)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#377eb8')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
                
    svg.append("rect")
                .attr("x",420)
                .attr("y",140)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#ff7f00')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
}
function drawPieMalignant(malignantReport)
{
    let width = 500
    let height =  250
    let radius = Math.min(width, height) / 3;
    let data = malignantReport;
    var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00']);
    let svg = d3.select("#clinicalpiemalign_svg")
                .attr("width",width)
                .attr("height",height)
                .attr("radius",radius)
    
    svg = svg.append("g").attr("class","remove1");
    g = svg.append("g").attr("transform", "translate(" + width / 3 + "," + height / 2 + ")");
    
    var pie = d3.pie();

    var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);
    
    //Generate groups
    var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")    
    
    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);
    
    svg.append("text").attr("x",width/6)
                .attr("y", height-10)
                .style("fill","black")
                .text("Patient Malignancy History");
    
                //Color Labels
    svg.append("text").attr("x",300)
                .attr("y", 100)
                .style("fill","black")
                .text("Yes");

    svg.append("text").attr("x",300)
                .attr("y", 130)
                .style("fill","black")
                .text("No");
    
    svg.append("text").attr("x",300)
                .attr("y", 160)
                .style("fill","black")
                .text("Not Reported");
    
    svg.append("rect")
            .attr("x",420)
            .attr("y",80)
            .attr("width",20)
            .attr("height",20)
            .style("fill",'#4daf4a')
            .attr("stroke-width", 1)
            .attr("stroke", "black");

    svg.append("rect")
                .attr("x",420)
                .attr("y",110)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#377eb8')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
                
    svg.append("rect")
                .attr("x",420)
                .attr("y",140)
                .attr("width",20)
                .attr("height",20)
                .style("fill",'#ff7f00')
                .attr("stroke-width", 1)
                .attr("stroke", "black");
}
function drawBoxTumor(tumor,tumorReport)
{
    console.log("tumor : ", tumor);
    console.log("tumorReport : ", tumorReport);
    let width = 500;
    let height =  250;

    let val = [0,1,2,3,4,5]
    let svg = d3.select("#clinicalboxtumor_svg") 
             .attr("width",width)
             .attr("height",height)

    svg = svg.append("g").attr("class","remove1");         
    var xscale = d3.scaleLinear()
                  .domain([0, 5])
                  .range([0, width-100]);

    var yscale = d3.scaleLinear()
                  .domain([0, (d3.max(tumorReport)+30)])
                  .range([(height), 40]);

    var x_axis = d3.axisBottom(xscale).ticks(7);
                   
    var y_axis = d3.axisLeft(yscale).ticks(7);
                    
    svg.append("g").attr("class","x-axisremove").attr("transform","translate(40,"+(height-40)+")")
                    .call(x_axis);
    svg.append("g").attr("transform","translate(40,"+(-40)+")")
                    .call(y_axis);

    let rect = svg.append("g");             
    for(let i=0;i<tumorReport.length;i++)
    {
        let x1 = xscale(val[i])
        let x2 = xscale(val[i+1])
        let y1 = yscale(0)
        let y2 = yscale(tumorReport[i])

        rect.append("rect")
                    .attr("x",x1)
                    .attr("y",y2)
                    .attr("width",x2-x1)
                    .attr("height",y1-y2)
                    .attr("transform","translate(40,-40)")
                    .style("fill",'#99d8c9')
                    .attr("stroke-width", 1)
                    .attr("stroke", "black");

        svg.append("text").attr("x",(x1+18))
                    .attr("y", height-10)
                    .attr("transform","translate(40,-15)")
                    .style("fill","black")
                    .style("font-size","10px")
                    .text(tumor[i]);
    }
    svg.append("text").attr("x",width/4)
                    .attr("y", height-5)
                    .style("fill","black")
                    .text("Pathologic Tumor Stage");
    
   d3.selectAll(".x-axisremove").selectAll(".tick").remove();
}

