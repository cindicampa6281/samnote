import{p as y}from"./chunk-353BL4L5-r3HgrSLc.js";import{A as B,s as S,g as F,m as z,n as P,b as E,c as W,_ as l,l as v,B as w,C as T,r as A,F as D,j as _}from"./mermaid.core-DeGFs2MN.js";import{p as N}from"./treemap-6Y5VK53G-ihh--mse.js";import"./index-C41JetTc.js";import"./isEmpty-lV85MA_z.js";import"./line-BjOtd6c7.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./_baseUniq-DzxVQ8xq.js";import"./_basePickBy-C0o-fvHq.js";import"./has-BnAOge3T.js";import"./clone-Cw6n7wR0.js";var x={packet:[]},m=structuredClone(x),L=B.packet,Y=l(()=>{const t=w({...L,...T().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),I=l(()=>m.packet,"getPacket"),M=l(t=>{t.length>0&&m.packet.push(t)},"pushWord"),O=l(()=>{A(),m=structuredClone(x)},"clear"),u={pushWord:M,getPacket:I,getConfig:Y,clear:O,setAccTitle:S,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:P,getAccDescription:E,setAccDescription:W},j=1e4,G=l(t=>{y(t,u);let e=-1,o=[],i=1;const{bitsPerRow:n}=u.getConfig();for(let{start:a,end:r,bits:c,label:f}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??(a=e+1),a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(c===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??(r=a+(c??1)-1),c??(c=r-a+1),e=r,v.debug(`Packet block ${a} - ${e} with label ${f}`);o.length<=n+1&&u.getPacket().length<j;){const[d,p]=H({start:a,end:r,bits:c,label:f},i,n);if(o.push(d),d.end+1===i*n&&(u.pushWord(o),o=[],i++),!p)break;({start:a,end:r,bits:c,label:f}=p)}}u.pushWord(o)},"populate"),H=l((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const i=e*o-1,n=e*o;return[{start:t.start,end:i,label:t.label,bits:i-t.start},{start:n,end:t.end,label:t.label,bits:t.end-n}]},"getNextFittingBlock"),K={parse:l(async t=>{const e=await N("packet",t);v.debug(e),G(e)},"parse")},R=l((t,e,o,i)=>{const n=i.db,a=n.getConfig(),{rowHeight:r,paddingY:c,bitWidth:f,bitsPerRow:d}=a,p=n.getPacket(),s=n.getDiagramTitle(),k=r+c,g=k*(p.length+1)-(s?0:r),b=f*d+2,h=D(e);h.attr("viewbox",`0 0 ${b} ${g}`),_(h,g,b,a.useMaxWidth);for(const[C,$]of p.entries())U(h,$,C,a);h.append("text").text(s).attr("x",b/2).attr("y",g-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=l((t,e,o,{rowHeight:i,paddingX:n,paddingY:a,bitWidth:r,bitsPerRow:c,showBits:f})=>{const d=t.append("g"),p=o*(i+a)+a;for(const s of e){const k=s.start%c*r+1,g=(s.end-s.start+1)*r-n;if(d.append("rect").attr("x",k).attr("y",p).attr("width",g).attr("height",i).attr("class","packetBlock"),d.append("text").attr("x",k+g/2).attr("y",p+i/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(s.label),!f)continue;const b=s.end===s.start,h=p-2;d.append("text").attr("x",k+(b?g/2:0)).attr("y",h).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(s.start),b||d.append("text").attr("x",k+g).attr("y",h).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(s.end)}},"drawWord"),X={draw:R},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=w(q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),ct={parser:K,db:u,renderer:X,styles:J};export{ct as diagram};
