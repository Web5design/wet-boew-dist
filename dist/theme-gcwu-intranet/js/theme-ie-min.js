/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-rc1-development Build: 2013-02-20 06:57 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,menu:null,init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){e=pe.menu.navcurrent(pe.secnav,b.bcrumb);d=e.parents("ul");d.prev().children("a").addClass("nav-current")}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var w,A,J="",e,n,Q=pe.dic.get("%settings"),z,s,f,m,O,T="",u='<a data-role="button" data-iconpos="notext"',C=' data-rel="popup" data-position-to="window"',p=u+C,D='<div data-role="popup" data-overlay-theme="a"',F='<div data-role="header"',S=F+"><h1>",B=' data-theme="c" class="ui-corner-all">',q=F+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',P=u+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",M=p+' data-icon="back" class="ui-btn-left"',K=">"+pe.dic.get("%back")+"</a>",R="</div></div>",o='<ul data-role="listview"',x="",H,k,t,r,G,g,d,N,v,I,E,l,L,j,y=document.getElementById("gcwu-wmms");l=navigator.userAgent.match(/WebKit\/53(\d)\.(\d{1,2})/i);if(!(l===null||parseInt(l[1],10)>4||(parseInt(l[1],10)===4&&parseInt(l[2],10)>=46))){I=document.querySelectorAll("#gcwu-wmms object, #gcwu-sig object");v=I.length;while(v--){E=I[v];E.parentNode.replaceChild(E.getElementsByTagName("img")[0],E)}}if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");s=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");A=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?s:b.bcrumb.children(":header")[0])).innerHTML;w=D+' id="jqm-wb-mb">'+S+e+"</h1>"+P+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){E=b.bcrumb[0];L=E.getElementsByTagName("a")[0].href;w+='<section><div id="jqm-mb-location-text">'+E.innerHTML+"</div></section>"}else{w+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){J+="<section><div><h2>"+s.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>";E=pe.secnav[0]}if(b.menubar.length!==0){J+="<section><div><h2>"+A+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}w+='<div id="jqm-mb-menu"></div></nav></div></div></div>';T+=w;b.menu=J;x+=p+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){n=pe.dic.get("%search");f=b.search[0];m=f.innerHTML;f=f.getElementsByTagName("input");v=f.length;while(v--){f[v].setAttribute("data-role","none")}O=D+' id="jqm-wb-search">'+S+n+"</h1>"+P+'</div><div data-role="content"><div>'+m.substring(m.indexOf("<form"))+"</div></div></div>";T+=O;x+=p+' data-icon="search" href="#jqm-wb-search">'+n+"</a>"}j='<div data-role="header"><div class="ui-title"></div><map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(y!==null){E=y.getElementsByTagName("object")[0];E.setAttribute("data",E.getAttribute("data").replace(".svg","-r.svg"));E.setAttribute("style","display: block");if(!pe.svg){E=y.getElementsByTagName("img")[0];E.setAttribute("src",E.getAttribute("src").replace(".gif","-wm.gif"))}}if(typeof L!=="undefined"){j+=u+' href="'+L+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=u+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(x.length!==0){j+=x}j+=p+' href="#popupSettings" data-icon="gear">'+Q+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(j);b.title[0].className+=" ui-bar-b";r=b.gcnb.find('li[id*="-lang"]');z=D+' id="popupSettings"'+B;z+=q+Q+"</h1>"+P+"</div>";z+=h+o+">";if(r.length>0){z+='<li><a href="#popupLanguages"'+C+">"+pe.dic.get("%languages")+"</a></li>"}z+='<li class="ui-corner-bottom"><a href="#popupAbout"'+C+">"+pe.dic.get("%about")+"</a></li>";z+="</ul>"+R;if(r.length>0){z+=D+' id="popupLanguages"'+B;z+=q+pe.dic.get("%languages")+"</h1>"+M+' href="#popupSettings"'+K+P+"</div>";z+=h+o+">";if(r.filter('[id*="-lang-current"]').length===0){z+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+pe.dic.get("%current")+"</a></li>"}I=r.get();for(N=0,v=I.length;N!==v;N+=1){E=I[N];k=E.childNodes[0];z+="<li"+(N===(v-1)?' class="ui-corner-bottom"':"");if(E.id.indexOf("-lang-current")!==-1){z+='><a href="javascript:;" class="ui-disabled">'+E.innerHTML+pe.dic.get("%current")+"</a></li>"}else{z+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}z+="</ul>"+R}z+=D+' id="popupAbout"'+B;z+=q+pe.dic.get("%about")+"</h1>"+M+' href="#popupSettings"'+K+P+"</div>";z+=h;z+='<div class="site-app-title"><div class="ui-title">'+b.title.text()+"</div></div>";E=pe.main.find("#gcwu-date-mod").children();if(E.length!==0){d=E[1];if(d.getElementsByTagName("time").length===0){z+='<div class="app-version">'+E[0].innerHTML+" "+d.innerHTML+"</div>"}}z+=o+' data-inset="true">';H=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(N=0,v=H.length;N!==v;N+=1){k=H[N];z+='<li><a href="'+k.href+'">'+k.innerHTML+"</a></li>"}H=b.sft.find(".gcwu-col-head a").get();for(N=0,v=H.length;N!==v;N+=1){k=H[N];E=k.innerHTML;d=E.toLowerCase();z+="<li"+(N===(v-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+E+"</a></li>"}z+="</ul>"+R;pe.bodydiv.append(T+z)}else{r=document.getElementById("gcwu-lang");if(r!==null){I=r.getElementsByTagName("li");G='<div data-role="navbar"><ul>';for(N=0,v=I.length;N<v;N+=1){E=I[N];k=E.getElementsByTagName("a")[0];G+='<li><a href="'+k.href+'"'+(E.hasAttribute("lang")?' lang="'+E.getAttribute("lang")+'"':"")+' data-theme="a">'+k.innerHTML+"</a></li>"}G+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=G;r=document.getElementById("gcwu-other-lang");if(r!==null){r.parentNode.removeChild(r)}}d=document.getElementById("gcwu-tc");if(d!==null){I=d.getElementsByTagName("li");t='<ul class="ui-grid-a">';for(N=0,v=I.length;N<v;N+=1){E=I[N];k=E.getElementsByTagName("a")[0];t+='<li class="ui-block-'+(N%2!==0?"b":"a")+'"><a href="'+k.href+'"'+(E.hasAttribute("lang")?' lang="'+E.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}t+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=t}y=document.getElementById("wmms");if(y!==null){pe.footer[0].getElementsByTagName("footer")[0].appendChild(y.cloneNode(true));y.parentNode.removeChild(y)}}c(document).on("pagecreate",function(){if(x.length!==0){var X=b.gcnb.find("#gcwu-mnavbar"),Z=pe.bodydiv.find("#jqm-mb-menu"),Y,W,U,V;X.removeClass("wb-hide");if(Z.length!==0){Z.append(b.menu);X.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){Z.trigger("create");Y=Z.find(".ui-controlgroup");W=Y.get();v=W.length;while(v--){E=W[v];V=E.getElementsByTagName("li")[0];if(V.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&V.className.indexOf("ui-corner-top")===-1){V.className+=" ui-corner-top"}U=Y.eq(v).find(".ui-btn").get();E=U[U.length-1];if(E.className.indexOf("ui-corner-bottom")===-1){E.className+=" ui-corner-bottom"}}})}}function i(ab,aa,ae,ad){var ac;c.mobile.showPageLoadingMsg();ac=c.mobile.transitionHandlers.simultaneous("pop",aa,ae,ad);ac.done(function(){c.mobile.hidePageLoadingMsg()});return ac}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));