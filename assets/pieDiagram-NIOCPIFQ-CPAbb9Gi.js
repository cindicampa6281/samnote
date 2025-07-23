import{p as B}from"./chunk-353BL4L5-CI7IejoB.js";import{A as U,m as j,n as H,s as V,g as Z,c as q,b as J,_ as i,l as C,r as K,d as Q,B as X,F as Y,H as tt,j as et}from"./mermaid.core-DSCa4uCV.js";import{p as at}from"./treemap-6Y5VK53G-D9Pd_8XY.js";import"./isEmpty-CSxBrAqN.js";import{a as z}from"./arc-DiztR7sX.js";import{o as rt}from"./ordinal-Cboi1Yqb.js";import{p as it}from"./pie-C_ZGERAl.js";import"./index-BggU8r53.js";import"./line-DoQWntb8.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./_baseUniq-CtGWKJh2.js";import"./_basePickBy-C8JI2Ps7.js";import"./has-BbjaJ7oL.js";import"./clone-Bsm9zN2t.js";import"./init-Gi6I4Gst.js";var F=U.pie,D={sections:new Map,showData:!1,config:F},u=D.sections,w=D.showData,ot=structuredClone(F),st=i(()=>structuredClone(ot),"getConfig"),nt=i(()=>{u=new Map,w=D.showData,K()},"clear"),lt=i(({label:t,value:a})=>{u.has(t)||(u.set(t,a),C.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ct=i(()=>u,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),G={getConfig:st,clear:nt,setDiagramTitle:j,getDiagramTitle:H,setAccTitle:V,getAccTitle:Z,setAccDescription:q,getAccDescription:J,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,a)=>{B(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),mt={parse:i(async t=>{const a=await at("pie",t);C.debug(a),gt(a,G)},"parse")},ft=i(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),ut=ft,ht=i(t=>{const a=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,n)=>n.value-o.value);return it().value(o=>o.value)(a)},"createPieArcs"),St=i((t,a,W,o)=>{C.debug(`rendering pie chart
`+t);const n=o.db,$=Q(),y=X(n.getConfig(),$.pie),T=40,s=18,d=4,l=450,h=l,S=Y(a),c=S.append("g");c.attr("transform","translate("+h/2+","+l/2+")");const{themeVariables:r}=$;let[A]=tt(r.pieOuterStrokeWidth);A??(A=2);const _=y.textPosition,g=Math.min(h,l)/2-T,M=z().innerRadius(0).outerRadius(g),O=z().innerRadius(g*_).outerRadius(g*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=n.getSections(),v=ht(b),P=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=rt(P);c.selectAll("mySlices").data(v).enter().append("path").attr("d",M).attr("fill",e=>p(e.data.label)).attr("class","pieCircle");let E=0;b.forEach(e=>{E+=e}),c.selectAll("mySlices").data(v).enter().append("text").text(e=>(e.data.value/E*100).toFixed(0)+"%").attr("transform",e=>"translate("+O.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(l-50)/2).attr("class","pieTitleText");const x=c.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(e,m)=>{const f=s+d,I=f*p.domain().length/2,L=12*s,N=m*f-I;return"translate("+L+","+N+")"});x.append("rect").attr("width",s).attr("height",s).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",s+d).attr("y",s-d).text(e=>{const{label:m,value:f}=e.data;return n.getShowData()?`${m} [${f}]`:m});const R=Math.max(...x.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),k=h+T+s+d+R;S.attr("viewBox",`0 0 ${k} ${l}`),et(S,l,k,y.useMaxWidth)},"draw"),vt={draw:St},Mt={parser:mt,db:G,renderer:vt,styles:ut};export{Mt as diagram};
