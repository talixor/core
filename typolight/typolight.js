/* TYPOlight Open Source CMS :: Copyright (C) 2005-2010 Leo Feyer :: LGPL license */
var AjaxRequest={toggleNavigation:function(a,d){a.blur();var b=$(d);var c=$(a).getFirst();if(b){if(b.getStyle("display")=="none"){b.setStyle("display","inline");c.src=c.src.replace("modPlus.gif","modMinus.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleNavigation&id="+d+"&state=1"}).send()}else{b.setStyle("display","none");c.src=c.src.replace("modMinus.gif","modPlus.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleNavigation&id="+d+"&state=0"}).send()
}return false}new Request({url:window.location.href,data:"isAjax=1&action=loadNavigation&id="+d+"&state=1",onRequest:AjaxRequest.displayBox("Loading data …"),onComplete:function(e,f){b=new Element("li");b.addClass("tl_parent");b.setProperty("id",d);b.set("html",e);b.setStyle("display","inline");b.injectAfter($(a).getParent("li"));c.src=c.src.replace("modPlus.gif","modMinus.gif");AjaxRequest.hideBox()
}}).send();return false},toggleStructure:function(a,f,e,d){a.blur();var b=$(f);var c=$(a).getFirst();if(b){if(b.getStyle("display")=="none"){b.setStyle("display","inline");c.src=c.src.replace("folPlus.gif","folMinus.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleStructure&id="+f+"&state=1"}).send()}else{b.setStyle("display","none");c.src=c.src.replace("folMinus.gif","folPlus.gif");
new Request({url:window.location.href,data:"isAjax=1&action=toggleStructure&id="+f+"&state=0"}).send()}return false}new Request({url:window.location.href,data:"isAjax=1&action=loadStructure&id="+f+"&level="+e+"&state=1",onRequest:AjaxRequest.displayBox("Loading data …"),onComplete:function(h,i){var j=new Element("ul");j.addClass("level_"+e);j.set("html",h);b=new Element("li");b.addClass("parent");b.setProperty("id",f);
b.setStyle("display","inline");j.injectInside(b);if(d==5){b.injectAfter($(a).getParent("li"))}else{var k=false;var g=$(a).getParent("li");while($type(g)=="element"&&g.getNext()){g=g.getNext();if(g.className=="tl_folder"){k=true;break}}k?b.injectBefore(g):b.injectAfter(g)}c.src=c.src.replace("folPlus.gif","folMinus.gif");ContextMenu.initialize();AjaxRequest.hideBox()}}).send();return false},toggleFileManager:function(b,g,d,f){b.blur();
var c=$(g);var e=$(b).getFirst();var a=$(b).getNext();if(c){if(c.getStyle("display")=="none"){c.setStyle("display","inline");e.src=e.src.replace("folPlus.gif","folMinus.gif");a.src=a.src.replace("folderC","folderO");new Request({url:window.location.href,data:"isAjax=1&action=toggleFileManager&id="+g+"&state=1"}).send()}else{c.setStyle("display","none");e.src=e.src.replace("folMinus.gif","folPlus.gif");
a.src=a.src.replace("folderO","folderC");new Request({url:window.location.href,data:"isAjax=1&action=toggleFileManager&id="+g+"&state=0"}).send()}return false}new Request({url:window.location.href,data:"isAjax=1&action=loadFileManager&id="+g+"&level="+f+"&folder="+d+"&state=1",onRequest:AjaxRequest.displayBox("Loading data …"),onComplete:function(h,i){var j=new Element("ul");j.addClass("level_"+f);
j.set("html",h);c=new Element("li");c.addClass("parent");c.setProperty("id",g);c.setStyle("display","inline");j.injectInside(c);c.injectAfter($(b).getParent("li"));e.src=e.src.replace("folPlus.gif","folMinus.gif");a.src=a.src.replace("folderC.gif","folderO.gif");AjaxRequest.hideBox()}}).send();return false},togglePagetree:function(b,g,e,a,f){b.blur();var c=$(g);var d=$(b).getFirst();if(c){if(c.getStyle("display")=="none"){c.setStyle("display","inline");
d.src=d.src.replace("folPlus.gif","folMinus.gif");new Request({url:window.location.href,data:"isAjax=1&action=togglePagetree&id="+g+"&state=1"}).send()}else{c.setStyle("display","none");d.src=d.src.replace("folMinus.gif","folPlus.gif");new Request({url:window.location.href,data:"isAjax=1&action=togglePagetree&id="+g+"&state=0"}).send()}return false}new Request({url:window.location.href,data:"isAjax=1&action=loadPagetree&id="+g+"&level="+f+"&field="+e+"&name="+a+"&state=1",onRequest:AjaxRequest.displayBox("Loading data …"),onComplete:function(h,i){var j=new Element("ul");
j.addClass("level_"+f);j.set("html",h);c=new Element("li");c.addClass("parent");c.setProperty("id",g);c.setStyle("display","inline");j.injectInside(c);c.injectAfter($(b).getParent("li"));d.src=d.src.replace("folPlus.gif","folMinus.gif");AjaxRequest.hideBox()}}).send();return false},toggleFiletree:function(b,h,d,f,a,g){b.blur();var c=$(h);var e=$(b).getFirst();if(c){if(c.getStyle("display")=="none"){c.setStyle("display","inline");
e.src=e.src.replace("folPlus.gif","folMinus.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleFiletree&id="+h+"&state=1"}).send()}else{c.setStyle("display","none");e.src=e.src.replace("folMinus.gif","folPlus.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleFiletree&id="+h+"&state=0"}).send()}return false}new Request({url:window.location.href,data:"isAjax=1&action=loadFiletree&id="+h+"&level="+g+"&folder="+d+"&field="+f+"&name="+a+"&state=1",onRequest:AjaxRequest.displayBox("Loading data …"),onComplete:function(i,j){var k=new Element("ul");
k.addClass("level_"+g);k.set("html",i);c=new Element("li");c.addClass("parent");c.setProperty("id",h);c.setStyle("display","inline");k.injectInside(c);c.injectAfter($(b).getParent("li"));e.src=e.src.replace("folPlus.gif","folMinus.gif");AjaxRequest.hideBox()}}).send();return false},toggleSubpalette:function(a,d,c){a.blur();var b=$(d);if(b){if(!a.value){a.value=1;a.checked="checked";b.setStyle("display","block");
new Request({url:window.location.href,data:"isAjax=1&action=toggleSubpalette&id="+d+"&field="+c+"&state=1"}).send()}else{a.value="";a.checked="";b.setStyle("display","none");new Request({url:window.location.href,data:"isAjax=1&action=toggleSubpalette&id="+d+"&field="+c+"&state=0"}).send()}return}new Request({url:window.location.href,data:"isAjax=1&action=toggleSubpalette&id="+d+"&field="+c+"&load=1&state=1",onRequest:AjaxRequest.displayBox("Loading data …"),onComplete:function(e,f){b=new Element("div");
b.setProperty("id",d);b.set("html",e);var g=false;var h=$(a).getParent("div");while($type(h)=="element"&&h.getNext()){h=h.getNext();if(h.nodeName.toLowerCase()=="h3"||h.nodeName.toLowerCase()=="div"){g=true;break}}g?b.injectBefore(h):b.injectAfter(h);a.value=1;a.checked="checked";b.setStyle("display","block");AjaxRequest.hideBox();Backend.hideTreeBody();Backend.addInteractiveHelp();Backend.addColorPicker();
window.fireEvent("subpalette")}}).send()},toggleVisibility:function(d,g){d.blur();var e=$(d).getFirst();var f=d.getParent("div");var a=null;var c=(e.src.indexOf("invisible")!=-1);if(f.hasClass("tl_right")){a=f.getPrevious("div").getElement("img")}else{if(f.hasClass("tl_listing_container")){a=d.getParent("td").getPrevious("td").getFirst("div.list_icon");if(!$defined(a)){a=d.getParent("td").getPrevious("td").getElement("div.cte_type")
}}else{if(f.getNext("div")&&f.getNext("div").hasClass("cte_type")){a=f.getNext("div")}}}if($defined(a)){if(a.nodeName.toLowerCase()=="img"){if(a.getParent("ul.tl_listing").hasClass("tl_tree_xtnd")){a.src=c?a.src.replace("_.gif",".gif"):a.src.replace(".gif","_.gif")}else{if(a.src.match(/folPlus|folMinus/)){a=a.getParent("a").getNext("a").getFirst("img")}if(c){var b=a.src.replace(/.*_([0-9])\.gif/,"$1");
a.src=a.src.replace(/_[0-9]\.gif/,((b.toInt()==1)?"":"_"+(b.toInt()-1))+".gif")}else{var b=a.src.replace(/.*_([0-9])\.gif/,"$1");a.src=a.src.replace(/(_[0-9])?\.gif/,((b==a.src)?"_1":"_"+(b.toInt()+1))+".gif")}}}else{if(a.hasClass("cte_type")){if(c){a.addClass("published");a.removeClass("unpublished")}else{a.addClass("unpublished");a.removeClass("published")}}else{if(c){a.setStyle("background-image",a.getStyle("background-image").replace("_.gif",".gif"))
}else{a.setStyle("background-image",a.getStyle("background-image").replace(".gif","_.gif"))}}}}if(c){e.src=e.src.replace("invisible.gif","visible.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleVisibility&id="+g+"&state=1"}).send()}else{e.src=e.src.replace("visible.gif","invisible.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleVisibility&id="+g+"&state=0"}).send()
}return false},toggleFieldset:function(b,d,c){b.blur();var a=$("pal_"+d);if(a.hasClass("collapsed")){a.removeClass("collapsed");new Request({url:window.location.href,data:"isAjax=1&action=toggleFieldset&id="+d+"&table="+c+"&state=1"}).send()}else{a.addClass("collapsed");new Request({url:window.location.href,data:"isAjax=1&action=toggleFieldset&id="+d+"&table="+c+"&state=0"}).send()}return false},liveUpdate:function(b,c){var a=$(c);
if(!a){return}new Request({url:window.location.href,data:"isAjax=1&action=liveUpdate&id="+a.value,onRequest:$("lu_message").set("html",'<p class="tl_info">Connecting to live update server</p>'),onComplete:function(d,e){if(d){$("lu_message").set("html",d)}else{$(b).submit()}}}).send()},toggleCheckboxGroup:function(a,d){a.blur();var b=$(d);var c=$(a).getFirst();if(b){if(b.getStyle("display")!="block"){b.setStyle("display","block");
c.src=c.src.replace("folPlus.gif","folMinus.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleCheckboxGroup&id="+d+"&state=1"}).send()}else{b.setStyle("display","none");c.src=c.src.replace("folMinus.gif","folPlus.gif");new Request({url:window.location.href,data:"isAjax=1&action=toggleCheckboxGroup&id="+d+"&state=0"}).send()}return true}return false},displayBox:function(e){var d=$("tl_ajaxBox");
var b=$("tl_ajaxOverlay");if(!b){b=new Element("div").setProperty("id","tl_ajaxOverlay").injectInside($(document.body))}if(!d){d=new Element("div").setProperty("id","tl_ajaxBox").injectInside($(document.body))}var a=window.getScroll().y;if(Browser.Engine.trident&&Browser.Engine.version<5){var f=$$("select");for(var c=0;c<f.length;c++){f[c].setStyle("visibility","hidden")}}b.setStyle("display","block");
b.setStyle("top",a+"px");d.set("html",e);d.setStyle("display","block");d.setStyle("top",(a+100)+"px")},hideBox:function(){var c=$("tl_ajaxBox");var a=$("tl_ajaxOverlay");if(a){a.setStyle("display","none")}if(c){c.setStyle("display","none");if(Browser.Engine.trident&&Browser.Engine.version<5){var d=$$("select");for(var b=0;b<d.length;b++){d[b].setStyle("visibility","visible")}}}}};var Backend={currentId:null,xMousePosition:0,yMousePosition:0,popupWindow:null,checkPopup:function(){setTimeout("Backend.doCheckPopup()",10)
},doCheckPopup:function(){if(Backend.popupWindow&&Backend.popupWindow.closed){location.reload()}},getMousePosition:function(a){Backend.xMousePosition=a.clientX;Backend.yMousePosition=a.clientY},openWindow:function(c,b,a){c.blur();b=Browser.Engine.trident?(b+40):(b+17);a=Browser.Engine.trident?(a+30):(a+17);Backend.popupWindow=window.open(c.href,"","width="+b+",height="+a+",modal=yes,left=100,top=50,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no")
},getScrollOffset:function(){document.cookie="BE_PAGE_OFFSET="+window.getScroll().y+"; path=/"},autoSubmit:function(a){Backend.getScrollOffset();var b=document.getElementById(a);var c=new Element("input");c.setProperty("type","hidden");c.setProperty("name","SUBMIT_TYPE");c.setProperty("value","auto");c.injectInside(b);b.submit()},vScrollTo:function(a){window.addEvent("load",function(){window.scrollTo(null,parseInt(a))
})},showTreeBody:function(b,c){b.blur();var a=$(c);a.setStyle("display",($(b).checked?"inline":"none"))},hideTreeBody:function(){var a=$$("ul");for(var b=0;b<a.length;b++){if(a[b].className.indexOf("mandatory")!=-1){$("ctrl_"+a[b].id).checked="checked";continue}if(a[b].className.indexOf("tl_listing")!=-1){var c=a[b].getFirst().getNext();if(c&&c.className=="parent"){c.setStyle("display","none")}}}},limitPreviewHeight:function(){var b=null;
var d=null;var c="";var a=0;$$("div.limit_height").each(function(e){b=e.getCoordinates();if(a==0){a=e.className.replace(/[^0-9]*/,"").toInt()}if(!$chk(a)){return}e.setStyle("height",a);d=new Element("img").addClass("limit_toggler");if(b.height<a){d.src="system/themes/default/images/expand_.gif";d.injectAfter(e);return}d.setStyle("cursor","pointer");d.src="system/themes/default/images/expand.gif";d.addEvent("click",function(){c=this.getPrevious().getStyle("height").toInt();
this.getPrevious().setStyle("height",((c>a)?a:""));this.src=(this.src.indexOf("expand.gif")!=-1)?"system/themes/default/images/collapse.gif":"system/themes/default/images/expand.gif"});d.injectAfter(e)})},toggleCheckboxes:function(c,e){var b=$$("input");var a=c.checked?"checked":"";for(var d=0;d<b.length;d++){if(b[d].type.toLowerCase()!="checkbox"){continue}if(e&&b[d].id.substr(0,e.length)!=e){continue
}b[d].checked=a}},toggleCheckboxGroup:function(c,d){var b=$(c).className;var a=$(c).checked?"checked":"";if(b=="tl_checkbox"){$$("#"+d+" .tl_checkbox").each(function(e){e.checked=a})}else{if(b=="tl_tree_checkbox"){$$("#"+d+" .parent .tl_tree_checkbox").each(function(e){e.checked=a})}}Backend.getScrollOffset()},toggleCheckboxElements:function(c,b){var a=$(c).checked?"checked":"";$$("."+b).each(function(d){if(d.hasClass("tl_checkbox")){d.checked=a
}});Backend.getScrollOffset()},toggleWrap:function(e){var b=$(e);var a=(b.getProperty("wrap")=="off")?"soft":"off";b.setProperty("wrap",a);if(!Browser.Engine.trident){var c=b.value;var d=b.clone();d.setProperty("wrap",a);d.setProperty("id",$(e).getProperty("id"));d.value=c;d.replaces(b)}},blink:function(){var a=null;$$("img.blink").each(function(b){if(!$defined(a)){a=b.hasClass("opacity")}a?b.removeClass("opacity"):b.addClass("opacity")
})},addColorPicker:function(){$$("img.mooRainbow").each(function(b){var e=$(b).id;var a=e.replace(/moo_/,"ctrl_");var d=$(a);var c=new MooRainbow(e,{startColor:[0,0,0],imgPath:"plugins/mootools/images/",id:"rainbow_"+e,onComplete:function(f){d.value=f.hex.substr(1,6)}});if(d.value){c.manualSet("#"+d.value,"hex")}})},pickPage:function(c){var b=320;var a=112;Backend.currentId=c;Backend.ppValue=$(c).value;
Backend.getScrollOffset();window.open($$("base")[0].href+"typolight/page.php?value="+Backend.ppValue,"","width="+b+",height="+a+",modal=yes,left="+(Backend.xMousePosition?(Backend.xMousePosition-b-30):200)+",top="+(Backend.yMousePosition?(Backend.yMousePosition-(a/2)+80):100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},pickFile:function(c){var b=320;var a=112;Backend.currentId=c;
Backend.ppValue=$(c).value;Backend.getScrollOffset();window.open($$("base")[0].href+"typolight/file.php?value="+Backend.ppValue,"","width="+b+",height="+a+",modal=yes,left="+(Backend.xMousePosition?(Backend.xMousePosition-b-30):200)+",top="+(Backend.yMousePosition?(Backend.yMousePosition-(a/2)+80):100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")},collapsePalettes:function(a){$$("fieldset.hide").each(function(b){b.addClass("collapsed")
});$$("label.error","label.mandatory").each(function(c){var b=c.getParent("fieldset");if($defined(b)){b.removeClass("collapsed")}})},addInteractiveHelp:function(){$$("p.tl_tip").each(function(a){if(a.retrieve("complete")){return}a.addEvent("mouseover",function(){a.timo=setTimeout(function(){var c=$("tl_helpBox");if(!c){c=new Element("div").setProperty("id","tl_helpBox").injectInside($(document.body))
}var b=a.getTop();c.set("html",a.get("html"));c.setStyle("display","block");c.setStyle("top",(b+18)+"px")},1000)});a.addEvent("mouseout",function(){var b=$("tl_helpBox");if(b){b.setStyle("display","none")}clearTimeout(a.timo)});a.store("complete",true)})},makeParentViewSortable:function(a){var b=new Sortables(a,{contstrain:true,opacity:0.6});b.active=false;b.addEvent("start",function(){b.active=true
});b.addEvent("complete",function(d){if(!b.active){return}if(d.getPrevious()){var f=d.get("id").replace(/li_/,"");var c=d.getPrevious().get("id").replace(/li_/,"");var e=window.location.search.replace(/id=[0-9]*/,"id="+f)+"&act=cut&mode=1&pid="+c;new Request({url:window.location.href,method:"get",data:e}).send()}else{if(d.getParent()){var f=d.get("id").replace(/li_/,"");var c=d.getParent().get("id").replace(/ul_/,"");
var e=window.location.search.replace(/id=[0-9]*/,"id="+f)+"&act=cut&mode=2&pid="+c;new Request({url:window.location.href,method:"get",data:e}).send()}}})},listWizard:function(c,e,g){var d=$(g);var b=$(c).getParent();var a=d.getChildren();Backend.getScrollOffset();switch(e){case"copy":var f=b.clone(true).injectBefore(b);f.getFirst().value=b.getFirst().value;break;case"up":b.getPrevious()?b.injectBefore(b.getPrevious()):b.injectInside(d);
break;case"down":b.getNext()?b.injectAfter(b.getNext()):b.injectBefore(d.getFirst());break;case"delete":(a.length>1)?b.destroy():null;break}},tableWizard:function(c,d,b){var r=$(b);var g=r.getFirst();var s=g.getChildren();var o=$(c).getParent();var a=o.getParent();var q=a.getChildren();var l=0;for(var f=0;f<q.length;f++){if(q[f]==o){break}l++}Backend.getScrollOffset();switch(d){case"rcopy":var p=new Element("tr");
var n=a.getChildren();for(var f=0;f<n.length;f++){var k=n[f].clone(true).injectInside(p);k.getFirst().value=n[f].getFirst().value}p.injectAfter(a);break;case"rup":a.getPrevious().getPrevious()?a.injectBefore(a.getPrevious()):a.injectInside(g);break;case"rdown":a.getNext()?a.injectAfter(a.getNext()):a.injectBefore(g.getFirst().getNext());break;case"rdelete":(s.length>2)?a.destroy():null;break;case"ccopy":for(var f=0;
f<s.length;f++){var m=s[f].getChildren()[l];var k=m.clone(true).injectAfter(m);k.getFirst().value=m.getFirst().value}break;case"cmovel":if(l>0){for(var f=0;f<s.length;f++){var m=s[f].getChildren()[l];m.injectBefore(m.getPrevious())}}else{for(var f=0;f<s.length;f++){var m=s[f].getChildren()[l];m.injectBefore(s[f].getLast())}}break;case"cmover":if(l<(q.length-2)){for(var f=0;f<s.length;f++){var m=s[f].getChildren()[l];
m.injectAfter(m.getNext())}}else{for(var f=0;f<s.length;f++){var m=s[f].getChildren()[l];m.injectBefore(s[f].getFirst())}}break;case"cdelete":if(q.length>2){for(var f=0;f<s.length;f++){s[f].getChildren()[l].destroy()}}break}s=g.getChildren();for(var f=0;f<s.length;f++){var n=s[f].getChildren();for(var e=0;e<n.length;e++){var h=n[e].getFirst();if(h&&h.type=="textarea"){h.name=h.name.replace(/\[[0-9]+\][[0-9]+\]/ig,"["+(f-1)+"]["+e+"]")
}}}Backend.tableWizardResize()},tableWizardResize:function(b){var a=Cookie.read("BE_CELL_SIZE");if(!$defined(a)&&!$defined(b)){return}if($defined(b)){var a="";$$(".tl_tablewizard textarea").each(function(d){d.setStyle("width",(d.getStyle("width").toInt()*b).round().limit(142,284));d.setStyle("height",(d.getStyle("height").toInt()*b).round().limit(66,132));if(a==""){a=d.getStyle("width")+"|"+d.getStyle("height")
}});Cookie.write("BE_CELL_SIZE",a)}else{if($defined(a)){var c=a.split("|");$$(".tl_tablewizard textarea").each(function(d){d.setStyle("width",c[0]);d.setStyle("height",c[1])})}}},moduleWizard:function(b,c,a){var n=$(a);var f=n.getFirst().getNext();var m=$(b).getParent("tr");var o=f.getChildren();Backend.getScrollOffset();switch(c){case"copy":var l=new Element("tr");var k=m.getChildren();for(var e=0;
e<k.length;e++){var h=k[e].clone(true).injectInside(l);h.getFirst().value=k[e].getFirst().value}l.injectAfter(m);break;case"up":m.getPrevious()?m.injectBefore(m.getPrevious()):m.injectInside(f);break;case"down":m.getNext()?m.injectAfter(m.getNext()):m.injectBefore(f.getFirst());break;case"delete":(o.length>1)?m.destroy():null;break}o=f.getChildren();for(var e=0;e<o.length;e++){var k=o[e].getChildren();
for(var d=0;d<k.length;d++){var g=k[d].getFirst();if(g.type=="select-one"){g.name=g.name.replace(/\[[0-9]+\]/ig,"["+e+"]")}}}},optionsWizard:function(b,d,a){var o=$(a);var g=o.getFirst().getNext();var n=$(b).getParent("tr");var p=g.getChildren();Backend.getScrollOffset();switch(d){case"copy":var m=new Element("tr");var l=n.getChildren();for(var f=0;f<l.length;f++){var k=l[f].clone(true).injectInside(m);
k.getFirst().value=l[f].getFirst().value;if(k.getFirst().type=="checkbox"){k.getFirst().checked=l[f].getFirst().checked?"checked":"";if(Browser.Engine.trident&&Browser.Engine.version<5){k.innerHTML=k.innerHTML.replace(/CHECKED/ig,'checked="checked"')}}}m.injectAfter(n);break;case"up":n.getPrevious()?n.injectBefore(n.getPrevious()):n.injectInside(g);break;case"down":n.getNext()?n.injectAfter(n.getNext()):n.injectBefore(g.getFirst());
break;case"delete":(p.length>1)?n.destroy():null;break}p=g.getChildren();var c=new Array("value","label","default");for(var f=0;f<p.length;f++){var l=p[f].getChildren();for(var e=0;e<l.length;e++){var h=l[e].getFirst();if(h.type=="text"||h.type=="checkbox"){h.name=h.name.replace(/\[[0-9]+\]/ig,"["+f+"]")}}}},checkboxWizard:function(d,e,f){var a=$(f);var c=$(d).getParent();Backend.getScrollOffset();
switch(e){case"up":if(!c.getPrevious()||c.getPrevious().hasClass("fixed")){c.injectInside(a)}else{c.injectBefore(c.getPrevious())}break;case"down":if(c.getNext()){c.injectAfter(c.getNext())}else{var b=a.getFirst();if(b.hasClass("fixed")){b=b.getNext()}c.injectBefore(b)}break}}};document.onmousedown=Backend.getMousePosition.bindWithEvent(document);window.addEvent("domready",function(){Backend.hideTreeBody();
Backend.blink.periodical(600);$$("textarea.monospace").each(function(a){Backend.toggleWrap(a)});Backend.collapsePalettes();Backend.addInteractiveHelp();Backend.addColorPicker()});window.addEvent("load",function(){Backend.limitPreviewHeight()});var ContextMenu={initialize:function(){$$("a.edit-header").each(function(a){a.addClass("invisible")});$$("a.contextmenu").each(function(b){var a=b.getNext("a");
if(!a||!a.hasClass("edit-header")){return}b.addEvent("contextmenu",function(c){c.preventDefault();ContextMenu.show(b,a,c)})});$(document.body).addEvent("click",function(){ContextMenu.hide()})},show:function(d,c,f){ContextMenu.hide();var g=new Element("div",{id:"contextmenu",styles:{top:(d.getPosition().y-6)}});var b=d.getFirst("img");var a=c.getFirst("img");g.set("html",'<a href="'+d.href+'" title="'+d.title+'">'+d.get("html")+" "+b.alt+'</a><a href="'+c.href+'" title="'+c.title+'">'+c.get("html")+" "+a.alt+"</a>");
g.inject($(document.body));g.setStyle("left",d.getPosition().x-(g.getSize().x/2))},hide:function(){if($defined($("contextmenu"))){$("contextmenu").dispose()}}};window.addEvent("domready",function(){ContextMenu.initialize()});var TinyCallback={cleanXHTML:function(f,d){var e="";var b=d.match(/<a[^>]*>/gi);if(b!=null){for(var c=0;c<b.length;c++){e=b[c].replace(/target="_blank"/gi,'onclick="window.open(this.href); return false;"');
d=d.replace(b[c],e)}}return d.replace(/<br>/,"<br />")},cleanHTML:function(b,a){a=a.replace(/<br \/>/,"<br>");a=a.replace(/^\s*/ig,"");return a},getScrollOffset:function(a){if(a.isDirty){Backend.getScrollOffset()}}};