//js 
var data = d3.csvParse(`Region,Country,App,Img,Score
Oceania,Australia,COVIDSafe,https://play-lh.googleusercontent.com/XVzoq3SW1hHpc-IJmqm-hayFKFrJlL-4uqNduzFg7QOYWW-B3cLf38ocxrGPx3Q3XmY,7
Europe,Austria,Stopp Corona,https://play-lh.googleusercontent.com/2NERfqltW9rIkNkgCY96ZHjxWRRAm_5UXVWI3KcZJ3c1b9TKJZbD95N_7vGv1gUIbBA,5
Asia,Azerbaijan,e-Tabib,https://play-lh.googleusercontent.com/d5pg46bNbEcwBHTgwEqeCOH212Dw2q0WTcLED1HwGo7Dpya8QP02M1TtG8WGTWY53hM,0.5
Middle East,Bahrain,BeAware Bahrain,https://play-lh.googleusercontent.com/8TMJmaOvTfeuiP18b4KWIvOE4nykZpMT5DCHj_tgPagGwz1mAEYNtPj2TdUiUMizC1Wu,0
Asia,Bangladesh,Corona Tracer BD,https://play-lh.googleusercontent.com/c3GC-pLkTDqxWLDvzydG1eMwGoQ8j1rPhf5BoGeCR1bivGlBl93RdMCNZxQEt-UiVWVk,3
America,Canada,Covid Alert,https://play-lh.googleusercontent.com/F4A_XuDdWN_zq4oUVyk9H2aUc12yI7K0ojFN2NkXTSp0MmM4vQePeRZ9BjUBxUdaSqg,8.5
Asia,China,Health Code,/,2
America,Colombia,MinSalud Digital,https://play-lh.googleusercontent.com/FHMR1_v-wm_1mEc-LMCFa86kUfFAIDBnA3TnrV2iQDziLD5lt7TyUHYh76hqLrjnqDQ,2.5
Europe,Czech Republic,eRouška (eFacemask),https://play-lh.googleusercontent.com/lSPzHqiQyG1oV7C-fz9Gv6O5g1YhfEGi6x2lhuKJPdqlRvL0M74-TaJP2kWEW8_EqQ,6
Europe,Denmark,Smittestop,https://play-lh.googleusercontent.com/ucXPOwW7AhYdQhzMFN_xm7Ha12Ga9D9QEBxztSA0ZP3BlI9z3rFrLf72FDrtiRxigA,5.5
America,Ecuador,ASI (SO),https://play-lh.googleusercontent.com/yVmhVhI1rRyuTp8ohYg99hTs0ybG0whv9U_kjZTU6NCrpO6fICl6NT3hhvzyeuBB3dY,3.5
Europe,Estonia,Hoia,https://play-lh.googleusercontent.com/l3dMzjhiPen78XS5bYhyNz_WAtpQA4-iyjEF3QdV2oEQRWhpvDOk_KgZ3mvCgEp6wus,6.5
Africa,Ethiopia,Debo,https://play-lh.googleusercontent.com/FfevbpkTP9e5_W05xqb1gh9HF1eG3-IUir5UZBuNkz1iIsOEaqC4fkzZfTSEZk39ZuqU,0.5
Europe,France,TousAntiCovid,https://play-lh.googleusercontent.com/HjlF5_gYtZmJVc2jbVBksjUHy-Q4-0UiO8InPswlsncZhBZmnfQVsmv7jUvv8Nw5WA,5.5
Oceania,Fiji,careFIJI,https://play-lh.googleusercontent.com/CvEpgtY0r6Ii3XS4nWKILEQFOQz4j4i4m0JjGJsuJc5UI0QW5Q17Vj3sh4mHy8SvLA,5
Europe,Finland,Koronavilkku,https://play-lh.googleusercontent.com/bL8luN5-7ewDJ7PiAJAZeWsGYIUQ1GgV8bpfA-3TB7aECKHJiWn_6aadGVmcgCJCgA,5
Europe,Germany,Corona-Warn-App,https://play-lh.googleusercontent.com/iESHh8CY2DB9Epwjxu4hBq08sLriQvwyHCK_f4wtdXk_vPGpwYvtQXC7r2l-r3cSaSY3,8
Africa,Ghana,GH Covid-19 Tracker App,https://play-lh.googleusercontent.com/zSljQl5NONvfmNhJ0ckzImJmonvkJZV2hCFWpT-oFyJ95rYSUuL3OkAe9QfgiPBmu-w,0.5
Europe,Gibraltar,Beat Covid Gibraltar,https://play-lh.googleusercontent.com/HRy_hVA1PHNBwk4S_R12rIZbNQI94pTdPlFWhY5JO4TrN1UUF0V3bFAeOj51ELY_MwY,2
Europe,Iceland,Rakning C-19,https://play-lh.googleusercontent.com/sOUUvLX0EQllNQDk2f85p8AJ2J2MtG2a6EQuX9msAZ9TuDwAs1mfNYVdSeZbOt2AsQ,6.5
Asia,India,Aarogya Setu,https://play-lh.googleusercontent.com/2FV06dPOPcV-vupN9_9zqPn-pUUio-OzbnqktzIVCdkPcBRRtqo-k63G1DLgIeuJD1np,4
Europe,Ireland,COVID Tracker,https://play-lh.googleusercontent.com/plQnUf0aq-vGnkr0Geh_QA6Wi_QIh9p14bne6SBK27D314E82NvZQfuAXvEZ_GbiaQ,7
Middle East,Israel,HaMagen,https://play-lh.googleusercontent.com/AVJm7zIOg7V35X9VUEKjYtEBQgcUWguVwQ_N-qTXlh2LOLphljpYmPOsLgTUvDhqyQ=w480-h960-rw,4.5
Europe,Italy,Immuni,https://play-lh.googleusercontent.com/QSb7_bHeT5dQZReUWLirWVSQygmr4CzBioyfxutL84IB-CFY6BuKPdDyKVSWuvIVbtk,6.5
Asia,Japan,COVID-19 Contact Conﬁrming Application,https://play-lh.googleusercontent.com/te1Ju0ipndVYxatCebbML63uxbZWzj0jJxUBTXFdDsZ8VbXhNgBbRbCsDISpALKkWC8,7
Middle East,Jordan,AMAN APP—Jordan,https://play-lh.googleusercontent.com/7TfZvJeRmhhk_YAG5CO6W6tM7D83dcanR06Ja6ternRovnF2K9xSCU3ZqFt7vdI8eQ,4
Asia,Kazakhstan,Saqbol,https://play-lh.googleusercontent.com/OiaRVZ_oCtDOgavtUu3QFx8EIQrCqzT6WpZS9PGEsYWOAlwn--9L-FEhfiNTKb7g1pk,5
Europe,Latvia,Apturi Covid,https://play-lh.googleusercontent.com/Ujk59m6SFhlsReiGlGGpsACrmY8pR858wlZuM0j84gPnAWFSK4E_bOf_ldfNKmojy7NR,5
Asia,Malaysia,MySejahtera,https://play-lh.googleusercontent.com/Owl00JWsYGY-mLZ7O53GSeIFse4j_KEXa53Q8qNAaQNFb2YVYimLoe6j4gczuVYaaQ,3.5
Europe,Netherlands,CoronaMelder,https://play-lh.googleusercontent.com/YEOKI5qswMdGi3oQEIEv1sAtfrvzdazbS65ZSW_KzO-IGDMKsJzWq8nIJUWIVeH8fQ,6.5
Oceania,New Zealand,NZ COVID Tracer,https://play-lh.googleusercontent.com/ZMA1dWRZWVPtipUtSx37rzC7jwY3AFwQwGhg5QiofY5CHDId19OZeYxAcVwj6odi1Q,4.5
Europe,North Macedonia,Stop Korona!,https://play-lh.googleusercontent.com/y3BZTRyHigR9zNgO2iIR9onZbK0Rr5r8D9GiVZ3D9MlySa6FvrcksokIgOLX13WMt5A=s360-rw,3.5
Europe,Northern Ireland,StopCOVID NI,https://play-lh.googleusercontent.com/u7Gu7Kl8W3lnEHGM_GlALPc6VnKPyFsukcTag6O3E2V8S3jdTylbghCFKVO7ivBdbw,7
Europe,Norway,Smittestopp,https://play-lh.googleusercontent.com/peGKk0T2DyYlpjzIv5Q3YchOrdc-R4l7vzhz1CiPaXencX-yv8hx7m9VROqj-OVMwQ,2
Europe,Poland,ProteGO Safe,https://play-lh.googleusercontent.com/hP4Sapo5uUnevomjxjRc7pHSVDw_336S90Uo50XEBzDyxLDsBHO3CvhhZSTHFvV9LMAo2uHRqE5_x63DQ84D,5
Europe,Portugal,STAYAWAY COVID,https://play-lh.googleusercontent.com/Q9o2K8noKKnFwsXn-JJRxmXpoGWzRrw4PaDDwNgbwctJc3AgldzZYOERu7e2xJorZ7c,6
Middle East,Qatar,Ehteraz,https://play-lh.googleusercontent.com/gZCsV0SrmqM-gl0dVIABAdxB6BsgwXqgBMRMFedLrFCwk90gS0XG_KiJfcVNWVqZvQ,0
Europe,Russia,Contact Tracer,https://play-lh.googleusercontent.com/-VG6zQu14sMNBlGus_rc6vmYBFD9e2A4H24Zk2OnxSYtzIUrq2fWR4zBbD5QbIwej4Q,1
Middle East,Saudi Arabia,Tabaud,https://play-lh.googleusercontent.com/woCQKXmq8-3us_tBqV8edoJs0s0KVAbOw9d6NVDgQ8-DqmV7diBR61r_z9EqjnBgcA,4.5
Europe,Scotland,Protect Scotland,https://play-lh.googleusercontent.com/l61Y45bG4-IVkBdFMJJnr9_buLB0pMMzKt-t3VbDrnSSzNLgiu9mpfKUEZTiXzfmG5w,6.5
Asia,Singapore,TraceTogether,https://play-lh.googleusercontent.com/KKFBXprCdip2XYNtKxB57hsBOezhvtRlxxZWOFKiatqU2IcI8LLsgcYGcHoFnxD3p1Lb,5.5
Europe,Slovenia,#OstaniZdrav,https://play-lh.googleusercontent.com/7Mi9M6hlpif91oqUKZ9QPtpZo_SmM26wExpuZPiwA1YjfvbfYUGR5_mH8-XjqnAxBVLm,6.5
Africa,South Africa,COVID Alert South Africa,https://play-lh.googleusercontent.com/lLbpBtXDCeiOkV0i4vCj68gzryl69MeSp-vu6xb_yx4ueDtChE4UMaWs7dkaLMHvmg,5
Europe,Spain,Radar COVID,https://play-lh.googleusercontent.com/CG1SrQhMAHr85BQWANnU-QhcSLMHcu8r5h9LnzHYqweIre7copRzMSPXa5MJP3G0PA,7
Europe,Switzerland,SwissCovid App,https://play-lh.googleusercontent.com/aqKA0KyE2W88K0GWkFJekgfG_vsGm35H0QdeCcSuo7TaZWQlUsZLnfd265ywVY69pf4,7
Europe,United Kingdom,NHS COVID-19,https://play-lh.googleusercontent.com/vwH4PnKo5zTCr7Cnw22rnd-7v_poiu3der-9CeJ5llv5u0dvTSbX8uYqtA_lUT2E3a0,4.5`,function(d,i){
  return d
})

    // 設定scale
    const colorScale = d3.scaleOrdinal()
	                        .domain(["Oceania", "Europe", "Asia", "Middle East", "America", "Africa"])
	                        .range(["yellow", "orange", "purple", "green", "blue", "red"])
    
   const xaxisScale = d3.scaleLinear()
                      .domain([0,9])
                      .range([0,800])
   
   
   const yaxisScale = d3.scaleOrdinal()
                      .domain(["Oceania", "Europe", "Asia", "Middle East", "America", "Africa"])
                      .range([50,100,150,200,250,300])

    // 建立圓點，全都位於正中央
    const node = d3.select('.forceGroup')
               .append('g')
               .selectAll("circle")
               .data(data)
               .enter()
              
               .append('circle')
               .attr('r', 5)
               // .attr('cx', d=>xaxisScale(d.Score))
               // .attr('cy', d=>yaxisScale(d.Region))
               .style('fill', d=>colorScale(d.Region))
               .style('opacity', '0.5')
    
    
    // 設定力模擬器
const simulation = d3.forceSimulation()
    .force("x", d3.forceX().strength(0.5).x(d => xaxisScale(d.Score)))
    .force("y", d3.forceY().strength(0.1).y( d => yaxisScale(d.Region)))
    .force("center", d3.forceCenter().x(600).y(200)) 
    .force("charge", d3.forceManyBody().strength(1)) 
    .force("collide", d3.forceCollide().strength(0.1).radius(5).iterations(1))



// 將力模擬器的節點綁定資料
simulation.nodes(data)
          .on("tick", function(d){
               node.attr("cx", d => d.x)
                   .attr("cy", d => d.y)
            // node.attr("cx", d=>xaxisScale(d.Score))
            //     .attr('cy', d=>yaxisScale(d.Region))
            });



// 建立tooltips
const tooltips = d3.select(".privacyscoretable")
                .append("div")
                .style("opacity", 0)
                .style('position', 'absolute')
                .attr("class", "tooltip")
                .style("background-color", "white")
                .style("border", "solid")
                .style("border-width", "2px")
                .style("border-radius", "5px")
                .style("padding", "5px")
// hover
node.on('mouseover', mouseover)
    .on('mouseleave', mouseleave)



function mouseover(event, d){
    console.log(d)
    d3.select(this)
      .attr('stroke', 'black')
      .attr('stroke-width', '3px')
      .attr('opacity', 0.7)
      .style('cursor', 'pointer')
    
    let pt = d3.pointer(event, this)
    tooltips.style('opacity', 1)
            .style('left', pt[0]+ 10 +'px')
            .style('top', pt[1]+'px')
            .html("<img src='"+d.Img+"'width='50px'>"+`<div><b>${d.Country}</b></div>`+`<div> App: ${d.App}</div>`+`<div> Score: ${d.Score}</div>`)
}

function mouseleave(event, d){
    d3.select(this)
      .attr('stroke', 'none')
      .attr('stroke-width', '0')
      .attr('opacity', 0.3)
    
    tooltips.style('opacity', 0)
}

// -----------------------------------------------------



// 設定比例尺
const xScale = d3.scaleLinear()
                 .domain([0,9])
                 .range([191.3829946528069,800+191.3829946528069]);

// 建立X軸線
const xAxis = d3.axisBottom()
                .scale(xScale)
                // .tickSize(400);

const xAxisLine = d3.select('.forceGroup')
                  .append('g')
                  .attr('class', 'xAxis')
    .attr('transform', `translate(0,400)`)
                  .call(xAxis)




// 建立X軸線
const yScale = d3.scaleOrdinal()
       .domain(["Oceania", "Europe", "Asia", "Middle East", "America", "Africa"])
                      .range([50,100,150,200,250,300])

const yAxis = d3.axisLeft()
                .scale(yScale)
                


const yAxisLine = d3.select('.forceGroup')
                  .append('g')
                  .attr('class', 'yAxis')
    .attr('transform', `translate(150,60)`)
                  .call(yAxis)



d3.select('.forceGroup')
  .append("g")
  .attr("class", "xaxistitle")
 .append("text")
 .attr("x",546.8873852540141)
 .attr("y",450)
 .text("Privacy Score")
 .style("opacity",0.5);


// Legend

var colorset = [
  {
   "Color": "red",
   "Title": "Africa"
  },{
   "Color": "purple",
   "Title": "Asia"
  },{
   "Color": "orange",
   "Title": "Europe"
  },{
   "Color": "blue",
   "Title": "America"
  },{
   "Color": "yellow",
   "Title": "Oceania"
  },{
   "Color": "green",
   "Title": "Middle East"
  }        
]

		var legend = d3.select('.forceGroup')
                  .selectAll(".legend")
                    .data(colorset)
                    .enter()
                    .append("g")
                    .attr("class", "legend")
                    .attr("transform", function (d, i) {return "translate("+i*100+",60)";});


			legend.append("rect")
            .attr("x", 200)
            .attr("y", 0)
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", d=>d.Color);

			legend.append("text")
            .attr("x", 18+200)
            .attr("y", 5)
            .attr("width", 40)
            .attr("dy", ".35em")
            .style("text-anchor", "start")
            .text(d=>d.Title)