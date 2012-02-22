/*
 * Supersubs v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 *
 * This plugin automatically adjusts submenu widths of suckerfish-style menus to that of
 * their longest list item children. If you use this, please expect bugs and report them
 * to the jQuery Google Group with the word 'Superfish' in the subject line.
 *
 */(function(a){a.fn.supersubs=function(b){var c=a.extend({},a.fn.supersubs.defaults,b);return this.each(function(){var b=a(this),d=a.meta?a.extend({},c,b.data()):c,e=a('<li id="menu-fontsize">&#8212;</li>').css({padding:0,position:"absolute",top:"-999em",width:"auto"}).appendTo(b).width();a("#menu-fontsize").remove();$ULs=b.find("ul");$ULs.each(function(b){var c=$ULs.eq(b),f=c.children(),g=f.children("a"),h=f.css("white-space","nowrap").css("float"),i=c.add(f).add(g).css({"float":"none",width:"auto"}).end().end()[0].clientWidth/e;i+=d.extraWidth;i>d.maxWidth?i=d.maxWidth:i<d.minWidth&&(i=d.minWidth);i+="em";c.css("width",i);f.css({"float":h,width:"100%","white-space":"normal"}).each(function(){var b=a(">ul",this),c=b.css("left")!==undefined?"left":"right";b.css(c,i)})})})};a.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}})(jQuery);