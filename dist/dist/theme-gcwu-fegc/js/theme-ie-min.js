/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.html / wet-boew.github.io/wet-boew/Licence-fra.html
 *
 * Version: v3.1.4-development Build: 2013-08-29 12:03 PM EDT
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-fegc",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");b.gridsmenu=pe.main.find(".module-menu-section");var i=pe.menu.navcurrent(b.menubar,b.bcrumb),h=i.parents("div.mb-sm"),d,g,k,f,j,e;if(!pe.svg||pe.svgfix){e=b.sft.length!==0;if(e){j=function(m){var n=c("#gcwu-wmms img, #gcwu-sig img").get(),l=n.length,o;while(l--){o=n[l];o.src=(m?o.src.replace(".png","-alt.png"):o.src.replace("-alt.png",".png"))}};window.onbeforeprint=function(){j(true)};window.onafterprint=function(){j(false)}}g=c("#gcwu-wmms-in, #gcwu-sig-in").get();d=g.length;while(d--){k=g[d];f=k.getElementsByTagName("object");if(f.length>0){k.innerHTML=k.innerHTML.replace(/<object[\s\S]*?\/object>/i,f[0].innerHTML)}}if(!e){j(true)}}if(h.length!==0){h.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){i=pe.menu.navcurrent(pe.secnav,b.bcrumb);h=i.parents("ul");h.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){i=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var z,R="",e,p,aa=pe.dic.get("%settings"),D=pe.dic.get("%hyphen")+pe.dic.get("%main-page"),E,u,f,n,Y,ad="",w='<a data-role="button" data-iconpos="notext"',G=' data-rel="popup" data-position-to="window"',r=w+G,H='<div data-role="popup" data-overlay-theme="a"',K='<div data-role="header"',ac=K+"><h1>",F=' data-theme="c" class="ui-corner-all">',s=K+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',Z=w+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",U=r+' data-icon="back" class="ui-btn-left"',S=">"+pe.dic.get("%back")+"</a>",ab="</div></div>",q='<ul data-role="listview"',A="",N,m,v,t,M,g,d,X,W,x,o,O,J,k,C=c(document),T,l,B,Q,L,V,I,P,y=typeof wet_boew_mobile_view!=="undefined"&&wet_boew_mobile_view.header_fixed;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");u=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");z=H+' id="jqm-wb-mb" class="jqm-wb-mb">'+ac+e+"</h1>"+Z+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){J=b.bcrumb[0];N=J.getElementsByTagName("a");if(N.length!==0){T=N[0].href}z+='<section><div id="jqm-mb-location-text">'+J.innerHTML+"</div></section>"}else{z+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){R+="<section><div><h2>"+u.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){R+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}z+='<div id="jqm-mb-menu"></div></nav></div></div></div>';ad+=z;b.menu=R;A+=r+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){p=pe.dic.get("%search");f=b.search[0];n=f.innerHTML;f=f.getElementsByTagName("input");x=f.length;while(x--){f[x].setAttribute("data-role","none")}Y=H+' id="jqm-wb-search">'+ac+p+"</h1>"+Z+'</div><div data-role="content"><div>'+n.substring(n.indexOf("<form"))+"</div></div></div>";ad+=Y;A+=r+' data-icon="search" href="#jqm-wb-search">'+p+"</a>"}l='<div data-role="header"'+(y?' data-position="fixed"':"")+'><div class="ui-title"><div></div></div><map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof T!=="undefined"){l+=w+' href="'+T+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){l+=w+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(A.length!==0){l+=A}l+=r+' href="#popupSettings" data-icon="gear">'+aa+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(l);b.gcnb.find(".ui-title").append(c("#gcwu-wmms").clone());b.title[0].className+=" ui-bar-b";I=document.getElementById("wb-session");t=b.gcnb.find('li[id*="-lang"]');E=H+' id="popupSettings"'+F;E+=s+aa+"</h1>"+Z+"</div>";E+=h+q+">";if(I!==null){Q=I.getElementsByClassName("settings");for(X=0,x=Q.length;X!==x;X+=1){L=Q[X].getElementsByTagName("a")[0];E+='<li><a href="'+L.getAttribute("href")+'">'+L.innerHTML+"</a></li>"}V=I.getElementsByClassName("session")[0].getElementsByTagName("a")[0];E+='<li><a href="'+V.getAttribute("href")+'">'+V.innerHTML+"</a></li>"}if(t.length!==0){E+='<li><a href="#popupLanguages"'+G+">"+pe.dic.get("%languages")+"</a></li>"}E+='<li class="ui-corner-bottom"><a href="#popupAbout"'+G+">"+pe.dic.get("%about")+"</a></li>";E+="</ul>"+ab;if(t.length!==0){E+=H+' id="popupLanguages"'+F;E+=s+pe.dic.get("%languages")+"</h1>"+U+' href="#popupSettings"'+S+Z+"</div>";E+=h+q+">";if(t.filter('[id*="-lang-current"]').length===0){E+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}O=t.get();x=O.length;X=x;while(X--){J=O[X];m=J.getElementsByTagName("a")[0];E+="<li"+(X===0?' class="ui-corner-bottom"':"");if(J.id.indexOf("-lang-current")!==-1){E+='><a href="javascript:;" class="ui-disabled">'+J.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{E+='><a href="'+m.href+'" lang="'+m.getAttribute("lang")+'">'+m.innerHTML+"</a></li>"}}E+="</ul>"+ab}E+=H+' id="popupAbout" data-theme="c" class="ui-corner-all jqm-wb-mb">';E+=s+pe.dic.get("%about")+"</h1>"+U+' href="#popupSettings"'+S+Z+"</div>";E+=h;E+='<div class="site-app-title"><div class="ui-title">'+b.title[0].getElementsByTagName("a")[0].innerHTML+"</div></div>";J=pe.main.find("#gcwu-date-mod").children();if(J.length!==0){d=J[1];if(d.getElementsByTagName("time").length===0){E+='<div class="app-version">'+J[0].innerHTML+" "+d.innerHTML+"</div>"}}E+='<div data-role="controlgroup" data-theme="c"><div data-role="collapsible-set" data-inset="false">';E+=q+">";N=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(X=0,x=N.length;X!==x;X+=1){m=N[X];E+='<li class="top-level'+(X===0?" ui-corner-top":"")+'"><a href="'+m.href+'">'+m.innerHTML+"</a></li>"}E+="</ul>";O=b.sft.find(".gcwu-col-head");P=false;for(X=0,x=O.length;X!==x;X+=1){J=O.eq(X);m=J.children("a");k=J.find("+ ul, + address ul");d=m.length!==0?m[0].innerHTML:J[0].innerHTML;if(k.length!==0){if(P){E+="</ul>";P=false}E+='<div class="wb-nested-menu" data-role="collapsible"><h2>'+d+"</h2>"+q+">";N=k[0].getElementsByTagName("a");for(W=0,o=N.length;W!==o;W+=1){J=N[W];E+='<li><a href="'+J.href+'">'+J.innerHTML+"</a></li>"}if(m.length!==0){E+='<li><a href="'+m.attr("href")+'">'+m.html()+D+"</a></li>"}E+="</ul></div>"}else{if(m.length!==0){if(!P){E+=q+">";P=true}E+='<li class="top-level'+(X===0?" ui-corner-top":"")+'"><a href="'+m.attr("href")+'">'+m.html()+"</a></li>"}}}if(P){E+="</ul>"}d=E.lastIndexOf("<li");o=E.indexOf("<li class",d)===d?11:3;E=E.substring(0,d)+'<li class="ui-corner-bottom'+(o===3?'"':" ")+E.substring(d+o)+"</ul></div></div>"+ab;pe.bodydiv.append(ad+E)}else{t=document.getElementById("gcwu-lang");if(t!==null){O=t.getElementsByTagName("li");M='<div data-role="navbar"><ul>';for(X=0,x=O.length;X<x;X+=1){J=O[X];m=J.getElementsByTagName("a")[0];M+='<li><a href="'+m.href+'"'+(J.hasAttribute("lang")?' lang="'+J.getAttribute("lang")+'"':"")+' data-theme="a">'+m.innerHTML+"</a></li>"}M+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=M;t=document.getElementById("gcwu-other-lang");if(t!==null){t.parentNode.removeChild(t)}}d=document.getElementById("gcwu-tc");if(d!==null){O=d.getElementsByTagName("li");v='<ul class="ui-grid-a">';for(X=0,x=O.length;X<x;X+=1){J=O[X];m=J.getElementsByTagName("a")[0];v+='<li class="ui-block-'+(X%2!==0?"b":"a")+'"><a href="'+m.href+'"'+(J.hasAttribute("lang")?' lang="'+J.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+m.innerHTML+"</a></li>"}v+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=v}B=document.getElementById("gcwu-wmms");if(B!==null){pe.footer[0].getElementsByTagName("footer")[0].appendChild(B)}}C.on("pagecreate",function(){var ah=b.gcnb.find("#gcwu-mnavbar"),ai=pe.bodydiv.find("#jqm-mb-menu"),ag,ae,af,j;if(ah.length!==0){if(!ah.hasClass("ui-controlgroup")){ah.controlgroup()}ah.removeClass("wb-hide");if(ai.length!==0){ai.append(b.menu);ah.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){ai.trigger("create");ag=ai[0].getElementsByClassName("ui-controlgroup");j=ag.length;while(j--){J=ag[j];af=J.getElementsByTagName("li")[0];if(af.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&af.className.indexOf("ui-corner-top")===-1){af.className+=" ui-corner-top"}ae=J.getElementsByClassName("ui-btn");af=ae[ae.length-1];if(typeof af!=="undefined"&&af.className.indexOf("ui-corner-bottom")===-1){af.className+=" ui-corner-bottom"}}})}}function i(ak,aj,an,am){var al;c.mobile.showPageLoadingMsg();al=c.mobile.transitionHandlers.simultaneous("pop",aj,an,am);al.done(function(){c.mobile.hidePageLoadingMsg()});return al}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});C.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.preIE9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));