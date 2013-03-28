/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-rc1-development Build: 2013-03-28 02:21 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.fn.chartsGraph={generate:function(ab){var E={},U,s=b(ab),ac=s,p,T;if(typeof(wet_boew_charts)!=="undefined"&&wet_boew_charts!==null){E=wet_boew_charts}U=b.extend(true,{"default-namespace":["wb-charts","wb-chart","wb-graph"],"graphclass-autocreate":true,"graphclass-overwrite-array-mode":true,"graphclass-typeof":"string","noencapsulation-autocreate":true,uniformtick:true,"uniformtick-typeof":"boolean","uniformtick-autocreate":true,"labelposition-typeof":"number","labelposition-autocreate":true,"legendinline-typeof":"boolean","legendinline-autocreate":true,"nolegend-typeof":"boolean","nolegend-autocreate":true,"topvalue-autocreate":true,"topvalue-typeof":"number","topvaluenegative-autocreate":true,"topvaluenegative-typeof":"boolean","bottomvalue-autocreate":true,"bottomvalue-typeof":"number","bottomvaluenegative-autocreate":true,"bottomvaluenegative-typeof":"boolean","steps-autocreate":true,"steps-typeof":"number","decimal-autocreate":true,"decimal-typeof":"number","default-option":"type",type:"bar","type-autocreate":true,width:b(ab).width(),"width-typeof":"number",height:b(ab).height(),"height-typeof":"number",maxwidth:"9999","maxwidth-typeof":"number",colors:["#be1e2d","#666699","#92d5ea","#ee8310","#8d10ee","#5a3b16","#26a4ed","#f45a90","#e9e744"],parsedirection:"x","parsedirection-typeof":"string","parsedirection-autocreate":true,drawDirection:"x"},E);U=n(U,(b(s).attr("class")!==undefined?b(s).attr("class"):""));function e(i){var j={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c","indigo ":"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32","accent-1":"#8d201c","accent-2":"#EE8310","accent-3":"#2a7da6","accent-4":"#5a306b","accent-5":"#285228","accent-6":"#154055","accent-7":"#555555","accent-8":"#f6d200","accent-9":"#d73d38","accent-10":"#418541","accent-11":"#87aec9","accent-12":"#23447e","accent-13":"#999999"};if(typeof(i)==="number"){i="accent-"+(i+1)}return(j[i.toLowerCase()]!=="undefined"?j[i.toLowerCase()]:(b.isArray(U.colors)?U.colors[0]:U.colors))}function n(j,aj,o){var ai="",ah="",af=false,ag,i;if(typeof(j)!=="object"){return{}}j=jQuery.extend(true,{},j);if(typeof(aj)!=="string"||aj.lenght===0){return j}if(typeof(o)!=="string"||o.lenght===0){if(j["default-namespace"]&&(typeof(j["default-namespace"])==="string"||b.isArray(j["default-namespace"]))){o=j["default-namespace"]}else{return j}}if(j["default-namespace-separator"]&&typeof(j["default-namespace-separator"])==="string"){ai=j["default-namespace-separator"]}else{ai="-"}if(j["default-separator"]&&typeof(j["default-separator"])==="string"){ah=j["default-separator"]}else{ah=" "}if(j["default-autocreate"]){af=true}i=aj.split(ah);b.each(i,function(){var aw,ap=j,ar,aq,ax,ao,at,al,ak,an=false,au=false,av,am;if(b.isArray(o)){for(aq=0,ax=o.length;aq<ax;aq+=1){if(o[aq]===(this.length>o[aq].length+ai.length?this.slice(0,o[aq].length):"")){ag=o[aq].split(ai);aw=this.split(ai).slice(ag.length);ar=ag[ag.length-1];break}}}else{if(o===(this.length>o.length+ai.length?this.slice(0,o.length):"")){ag=o.split(ai);aw=this.split(ai).slice(ag.length);ar=ag[ag.length-1]}}if(aw&&ar){for(aq=0,ax=aw.length;aq<ax;aq+=1){at=(aq+2===ax?true:false);al=(aq+1===ax?true:false);if(al&&ax===1&&j["default-option"]){ar=j["default-option"]}else{if(!al){ar=aw[aq]}}if(ap[ar+"-typeof"]){ak=[];for(ao=(aq+1);ao<ax;ao+=1){ak.push(aw[ao])}aw[aq]=ak.join(ai);at=false;al=true;switch(ap[ar+"-typeof"]){case"boolean":if(aw[aq]==="true"||aw[aq]==="1"||aw[aq]==="vrai"||aw[aq]==="yes"||aw[aq]==="oui"){aw[aq]=true}else{if(aw[aq]==="false"||aw[aq]==="0"||aw[aq]==="faux"||aw[aq]==="no"||aw[aq]==="non"){aw[aq]=false}else{aw[aq]=undefined}}break;case"number":if(!isNaN(parseInt(aw[aq],10))){aw[aq]=parseInt(aw[aq],10)}else{aw[aq]=undefined}break;case"string":break;case"undefined":case"function":case"locked":aw[aq]=undefined;break;default:break}}if(ap[ar+"-overwrite-array-mode"]){an=true}if(ap[ar+"-autocreate"]){au=true}if(at&&aw[aq]!==undefined){ar=aw[aq]}else{if(al&&aw[aq]!==undefined){if(ap[ar]&&an){if(b.isArray(ap[ar])){ap[ar].push(aw[aq])}else{am=ap[ar];ap[ar]=[];ap[ar].push(am);ap[ar].push(aw[aq])}}else{if(ap[ar]||af||au||ap[ar]===0||ap[ar]===false){av="";if(typeof(aw[aq])==="boolean"||typeof(aw[aq])==="number"){av='{"'+ar+'": '+aw[aq]+"}"}else{av='{"'+ar+'": "'+aw[aq]+'"}'}ap=jQuery.extend(true,ap,jQuery.parseJSON(av))}}aq=ax}else{if(aw[aq]!==undefined&&ap[aw[aq]]){ap=ap[aw[aq]];ar=aw[aq]}else{if((af||au)&&aw[aq]!==undefined){av='{"'+aw[aq]+'": {}}';ap=jQuery.extend(true,ap,jQuery.parseJSON(av));ap=ap[aw[aq]]}else{aq=ax}}}}}}});return j}function Z(ak){var al,aj,ai,ah,au;for(al=0;al<ak.theadRowStack.length;al+=1){au=ak.theadRowStack[al];for(aj=0;aj<au.cell.length;aj+=1){o=au.cell[aj];if((o.type===1||o.type===7)&&(!(aj>0&&o.uid===au.cell[aj-1].uid)&&!(al>0&&o.uid===ak.theadRowStack[al-1].cell[aj].uid))){if(!o.header){o.header=[]}if(!o.headers){o.headers=[]}if(!o.child){o.child=[]}if(!o.childs){o.childs=[]}if(al>0){for(ai=0;ai<ak.theadRowStack[al-1].cell[aj].header.length;ai+=1){o.headers.push(ak.theadRowStack[al-1].cell[aj].header[ai]);ak.theadRowStack[al-1].cell[aj].header[ai].childs.push(o)}o.headers.push(ak.theadRowStack[al-1].cell[aj]);o.header.push(ak.theadRowStack[al-1].cell[aj]);ak.theadRowStack[al-1].cell[aj].child.push(o)}if(o.descCell){o.descCell.header=o;o.descCell.headers=o}}}}for(al=0;al<ak.row.length;al+=1){au=ak.row[al];var at=[],aq=[],ar=[],ao=[];if(au.headerset&&!au.idsheaderset){for(aj=0;aj<au.headerset.length;aj+=1){at=at.concat(au.headerset[aj])}au.idsheaderset=at}if(au.header){for(aj=0;aj<au.header.length;aj+=1){aq=aq.concat(au.header[aj])}}aq=au.idsheaderset.concat(aq);for(aj=0;aj<au.cell.length;aj+=1){if((aj===0)||(aj>0&&au.cell[aj].uid!==au.cell[(aj-1)].uid)){var o=au.cell[aj],af=[];if(!o.header){o.header=[]}if(!o.headers){o.headers=[]}if(o.col&&!o.col.dataheader){var ag=o.col;var an=[],ap=[];if(ag.headerLevel){for(ah=0;ah<ag.headerLevel.length;ah+=1){ap=ap.concat(ag.headerLevel[ah])}}if(ag.header){for(ah=0;ah<ag.header.length;ah+=1){an=an.concat(ag.header[ah])}}if(!ag.dataheader){ag.dataheader=[]}ag.dataheader=ag.dataheader.concat(ap);ag.dataheader=ag.dataheader.concat(an)}if(o.col&&o.col.dataheader){af=o.col.dataheader}if(o.type===1){if(!o.child){o.child=[]}if(!o.childs){o.childs=[]}for(ah=0;ah<ao.length;ah+=1){if(o.colpos===(ao[ah].colpos+ao[ah].width)){var am=ao[ah].child.length;if(am===0||(am>0&&ao[ah].child[am-1].uid!==o.uid)){ao[ah].child.push(o)}}ao[ah].childs.push(o)}for(ah=0;ah<au.idsheaderset.length;ah+=1){if(!au.idsheaderset[ah].childs){au.idsheaderset[ah].childs=[]}au.idsheaderset[ah].childs.push(o)}o.header=o.header.concat(ao);o.headers=o.headers.concat(af);o.headers=o.headers.concat(au.idsheaderset);o.headers=o.headers.concat(ao);ao=ao.concat(o)}if(o.type===2||o.type===3){ar=aq;if(o.addcolheaders){for(ah=0;ah<o.addcolheaders.length;ah+=1){af=af.concat(o.addcolheaders[ah])}}if(o.addrowheaders){for(ah=0;ah<o.addrowheaders.length;ah+=1){ar=ar.concat(o.addrowheaders[ah])}}o.headers=o.headers.concat(af);o.headers=o.headers.concat(ar);o.header=o.headers}}}}}function P(j){j=j.replace(/\s\s+/g," ");j=j.replace(/^\s+|\s+$/g,"");var i={cellUnit:j.match(/[^\+\-\.\, 0-9]+[^\-\+0-9]*/),cellValue:parseFloat(j.match(/[\+\-0-9]+[0-9,\. ]*/))};return i}var C=[],G=[],A,y;function u(j,i){var o;i+=1;C.push([j.child.length,i]);for(o=0;o<j.child.length;o+=1){if(j.child[o].child.length>0){i=u(j.child[o],i)}}i-=1;return i}function B(j,i){var o;i+=1;var ag=0;ag=j.flotValue-j.flotDelta;var af=(j.flotDelta/j.child.length);if(!T||af<T){T=af}for(o=0;o<j.child.length;o+=1){j.child[o].flotDelta=af;ag=ag+af;j.child[o].flotValue=ag;if(i===A){G.push([(j.child[o].flotValue-af),b(j.child[o].elem).text()])}if(j.child[o].child.length>0){B(j.child[o],i)}}i-=1}function F(aj){var af=0;var o=0;var j;var ag;C=[];if(!aj.colgrouphead){return}for(ag=0;ag<aj.colgrouphead.col[0].cell.length;ag+=1){j=aj.colgrouphead.col[0].cell[ag];if(ag===0||(ag>0&&aj.colgrouphead.col[0].cell[ag-1].uid!==j.uid)){if(j.rowgroup&&j.rowgroup.type===3){break}if(j.type===1||j.type===7){af+=1;if(j.child.length>0){o=u(j,o)}}}}C.push([af,o]);var ai=C[0][0];for(ag=1;ag<C.length;ag+=1){ai=ai*C[ag][0]}A=aj.colgrouphead.col.length-1;G=[];var ah=0;o=0;for(ag=0;ag<aj.colgrouphead.col[0].cell.length;ag+=1){j=aj.colgrouphead.col[0].cell[ag];if(ag===0||(ag>0&&aj.colgrouphead.col[0].cell[ag-1].uid!==j.uid)){if(j.rowgroup&&j.rowgroup.type===3){break}if(j.type===1||j.type===7){j.flotDelta=(ai/af);if(!T||j.flotDelta<T){T=j.flotDelta}ah+=j.flotDelta;j.flotValue=ah;if(o===A||((j.colpos-1)<A&&A<=((j.colpos-1)+(j.width-1)))){G.push([(j.flotValue-j.flotDelta),b(j.elem).text()])}if(j.child.length>0){B(j,o)}}}}return G}function f(j,i){var o;if(j.child.length===0){return}i+=1;C.push([j.child.length,i]);for(o=0;o<j.child.length;o+=1){f(j.child[o],i)}i-=1}function x(j,i){var o;if(j.child.length===0){return}i+=1;var ag=0;ag=j.flotValue;var af=(!U.uniformtick?(j.flotDelta/j.child.length):1);if(!p||af<p){p=af}for(o=0;o<j.child.length;o+=1){j.child[o].flotDelta=af;if(i===A){G.push([(!U.uniformtick?ag:y),b(j.child[o].elem).text()])}if(i===(z.theadRowStack.length-1)||((j.rowpos-1)<(z.theadRowStack.length-1)&&(z.theadRowStack.length-1)<=((j.rowpos-1)+(j.height-1)))||(z.theadRowStack.length-1)===((j.rowpos-1)+(j.height-1))){y+=af}j.child[o].flotValue=ag;ag=ag+af;x(j.child[o],i)}i-=1}function g(am){if(!am.theadRowStack){return}var ag=-1;var o=-1;var aj;for(aj=0;aj<am.colgroup.length;aj+=1){if(am.colgroup[aj].type===2){ag=am.colgroup[aj].start;o=am.colgroup[aj].end;break}}var ai=0;var j;var al=0;C=[];var af=0;for(aj=0;aj<am.theadRowStack[0].elem.cells.length;aj+=1){j=b(am.theadRowStack[0].elem.cells[aj]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=ag&&(j.type===1||j.type===7)){ai+=1;al+=j.width;f(j,af)}}C.push([ai,af]);var ah=C[0][0];for(aj=1;aj<C.length;aj+=1){ah=ah*C[aj][0]}A=(!U.labelposition||(U.labelposition&&U.labelposition>am.theadRowStack.length)?am.theadRowStack.length:U.labelposition)-1;G=[];var ak=0;y=0;af=0;for(aj=0;aj<am.theadRowStack[0].elem.cells.length;aj+=1){j=b(am.theadRowStack[0].elem.cells[aj]).data().tblparser;if(j.colgroup&&j.colgroup.type===3){break}if(j.colpos>=ag&&(j.type===1||j.type===7)){j.flotDelta=(!U.uniformtick?(ah/ai):1);if(!p||j.flotDelta<p){p=j.flotDelta}j.flotValue=ak;if(af===A||((j.rowpos-1)<A&&A<=((j.rowpos-1)+(j.height-1)))){G.push([(!U.uniformtick?ak:y),b(j.elem).text()])}if(af===(am.theadRowStack.length-1)||((j.rowpos-1)<(am.theadRowStack.length-1)&&(am.theadRowStack.length-1)<=((j.rowpos-1)+(j.height-1)))||(am.theadRowStack.length-1)===((j.rowpos-1)+(j.height-1))){y+=j.flotDelta}ak+=j.flotDelta;x(j,af)}}return G}function J(){var af=[],ah=0,an,ag=0,ar="Table caption tag is missing",aj=10,aq=0,ao,ap=[],o,al,ak,ai,am;ar=b("caption",ac).text();b("tr ",ac).each(function(){aj+=1;if(aq<1){b("td,th",b(this)).each(function(){if(b(this).attr("colspan")===undefined){b(this).attr("colspan",1)}aj+=Number(b(this).attr("colspan"))})}aq+=1});for(aq=0;aq<aj;aq+=1){ap[aq]=[];for(ao=0;ao<aj;ao+=1){ap[aq][ao]=0}}b("tr ",ac).each(function(){ag=0;var j=1,i=1;b("td,th",b(this)).each(function(){if(b(this).attr("colspan")===undefined){b(this).attr("colspan",1)}if(b(this).attr("rowspan")===undefined){b(this).attr("rowspan",1)}j=Number(b(this).attr("colspan"));i=Number(b(this).attr("rowspan"));while(ap[ah][ag]===3){ag+=1}var au=ah,ax=ah+i-1,aw,at,av;if(i>1&&j>1){aw=ag;at=ag+j-1;for(aw=ag;aw<=at;aw+=1){for(au=ah;au<=ax;au+=1){ap[au][aw]=3}}}else{if(i>1){for(au=ah;au<=ax;au+=1){ap[au][ag]=3}}}av=b(this).clone();av.attr("colspan",i);av.attr("rowspan",j);(af[ag]=af[ag]||[])[ah]=av;ag=ag+j});ah+=1});o=b("<table>");b.each(af,function(j){var i=b("<tr>");o.append(i);b.each(af[j],function(at,au){i.append(au)})});al=o.html();ak='<table id="swappedGraph"><caption>'+ar+" (Horizontal to Virtical)</caption><thead>";al=al.replace(/<tbody>/gi,ak);al=al.replace(/<\/tbody>/gi,"</tbody></table>");al=al.replace(/\n/g,"");al=al.replace(/<tr/gi,"\n<tr");ai=al.split("\n");for(ah=0,an=ai.length;ah<an;ah+=1){am=ai[ah];if(am.match(/<td/i)!==null){ai[ah]="</thead><tbody>"+am;break}}al=ai.join("\n");b(al).insertAfter(ac).hide();return b(al)}if(U.parsedirection==="y"){s=J(ac)}if(!b(s).data().tblparser){a.fn.parsertable.parse(b(s))}var K={"default-option":"type","default-namespace":["wb-charts","wb-chart","wb-graph"],"type-autocreate":true,"color-typeof":"string","color-autocreate":true};var z=b(s).data().tblparser;Z(z);var S,L;S=g(z);L=F(z);G=S;var R=[];var q=false;var k=[],D=0,m,t,aa,Y,W,d,c,v,V;if(U.type==="pie"){var N=b("<figure />").insertAfter(ac);W=b("<figcaption />");b(N).append(W);d=b("caption",ac).html();var I=b("caption",ac).text();b(W).append(d);var Q=(z.colgroup[0].type===1?z.colgroup[1]:z.colgroup[0]);for(t=z.lstrowgroup[0].row.length-1;t>=0;t-=1){for(aa=0;aa<Q.col.length;aa+=1){k=[];D=0;for(Y=0;Y<Q.col[aa].cell.length;Y+=1){if(Q.col[aa].cell[Y].rowgroup.type!==2||(Y>0&&Q.col[aa].cell[Y-1].rowgroup.uid!==Q.col[aa].cell[Y].rowgroup.uid)){break}m=Q.col[aa].cell[Y].row.header;k.push([D,P(b(Q.col[aa].cell[t].elem).text()).cellValue]);D+=m[m.length-1].flotDelta}var M=n(K,(b(Q.col[aa].cell[t].elem).attr("class")!==undefined?b(Q.col[aa].cell[t].elem).attr("class"):""));R.push({data:k,label:b(Q.col[aa].dataheader[Q.col[aa].dataheader.length-1].elem).text(),color:(!M.color?e(aa):e(M.color))})}c=b("<div />");var h="";if(z.lstrowgroup[0].row.length===1&&(b(z.lstrowgroup[0].row[0].header[0].elem).html()===d||z.lstrowgroup[0].row[0].header.length===0)){h=I;b(N).append(c)}else{var ae=b("<figure />").appendTo(N);var X=b("<figcaption />");m=z.lstrowgroup[0].row[t].header;h=b(m[m.length-1].elem).text();b(ae).append(X);b(X).append(b(m[m.length-1].elem).html());b(ae).append(c)}b(c).css("height",U.height);b(c).css("width",U.width);b(c).attr("role","img");b(c).attr("aria-label",h+" "+a.dic.get("%table-following"));b.plot(c,R,{series:{pie:{show:true}}});if(!U.legendinline){b(".legend > div",c).remove();b(".legend > table",c).removeAttr("style").addClass("font-small");b(c).css("height","auto")}if(U.nolegend){b(".legend",c).remove()}R=[]}if(!U.noencapsulation){v=b("<details />");V=b("<summary />");b(v).appendTo(N);b(V).text(d+a.dic.get("%table-mention")).appendTo(v).after(ac);a.polyfills.enhance("detailssummary",v)}else{b(ac).appendTo(N)}if(U.parsedirection==="y"){b(s).remove()}return}var H=0;var w;var O;for(aa=0;aa<z.lstrowgroup[0].row.length;aa++){O=n(K,(b(z.lstrowgroup[0].row[aa].header[z.lstrowgroup[0].row[aa].header.length-1].elem).attr("class")!==undefined?b(z.lstrowgroup[0].row[aa].header[z.lstrowgroup[0].row[aa].header.length-1].elem).attr("class"):""));if((!O.type&&(U.type==="bar"||U.type==="stacked"))||(O.type&&(O.type==="bar"||O.type==="stacked"))){H+=1;O.chartBarOption=H;if(!w&&((O.type&&O.type==="bar")||(!O.type&&U.type==="bar"))){w=true}}z.lstrowgroup[0].row[aa].header[z.lstrowgroup[0].row[aa].header.length-1].chartOption=O}for(aa=0;aa<z.lstrowgroup[0].row.length;aa++){k=[];var ad=0;D=0;O=z.lstrowgroup[0].row[aa].header[z.lstrowgroup[0].row[aa].header.length-1].chartOption;for(Y=0;Y<z.lstrowgroup[0].row[aa].cell.length;Y++){if(ad>1&&z.lstrowgroup[0].row[aa].cell[Y].col.groupstruct.type!==2){break}if(z.lstrowgroup[0].row[aa].cell[Y].col.groupstruct.type===2){m=z.lstrowgroup[0].row[aa].cell[Y].col.header;var l=D;if(w&&O.chartBarOption){l=D-(p/2)+((p/H)*(O.chartBarOption-1));if(H===1){l=D}}k.push([l,P(b(z.lstrowgroup[0].row[aa].cell[Y].elem).text()).cellValue]);D+=m[m.length-1].flotDelta;ad++}}if(!O.type){O.type=U.type}if(O.type==="line"){R.push({data:k,label:b(z.lstrowgroup[0].row[aa].header[z.lstrowgroup[0].row[aa].header.length-1].elem).text(),color:(!O.color?e(aa):e(O.color))})}else{if(O.type==="area"){R.push({data:k,label:b(z.lstrowgroup[0].row[aa].header[z.lstrowgroup[0].row[aa].header.length-1].elem).text(),color:(!O.color?e(aa):e(O.color)),lines:{show:true,fill:true}})}else{if(O.type==="bar"||(w&&O.type==="stacked")){R.push({data:k,label:b(z.lstrowgroup[0].row[aa].header[z.lstrowgroup[0].row[aa].header.length-1].elem).text(),color:(!O.color?e(aa):e(O.color)),bars:{show:true,barWidth:(1/H*0.9),align:"center"}})}else{if(O.type==="stacked"){R.push({data:k,label:b(z.lstrowgroup[0].row[aa].header[z.lstrowgroup[0].row[aa].header.length-1].elem).text(),color:(!O.color?e(aa):e(O.color)),bars:{show:true,barWidth:0.9,align:"center"}})}else{if(O.type==="pie"){R.push({data:k,label:b(z.lstrowgroup[0].row[aa].header[z.lstrowgroup[0].row[aa].header.length-1].elem).text(),color:(!O.color?e(aa):e(O.color))});q=true}}}}}}var r=b("<figure />").insertAfter(ac);W=b("<figcaption />");b(r).append(W);d=b("caption",ac).html();b(W).append(d);c=b("<div />");b(r).append(c);b(c).css("height",U.height);b(c).css("width",U.width);b(c).attr("role","img");b(c).attr("aria-label",b("caption",ac).text()+" "+a.dic.get("%table-following"));if(!U.noencapsulation){v=b("<details />");V=b("<summary />");b(v).appendTo(r);b(V).text(d+a.dic.get("%table-mention")).appendTo(v).after(ac);a.polyfills.enhance("detailssummary",v)}else{b(ac).appendTo(r)}b.plot(c,R,{xaxis:(G.length>0?{ticks:G}:{})});if(!U.legendinline){b(".legend > div",c).remove();b(".legend > table",c).removeAttr("style").addClass("font-small");b(c).css("height","auto")}if(U.nolegend){b(".legend",c).remove()}if(U.parsedirection==="y"){b(s).remove()}}};window.pe=a;return a}(jQuery));