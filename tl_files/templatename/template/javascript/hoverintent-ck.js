/**
* hoverIntent is similar to jQuery's built-in "hover" function except that
* instead of firing the onMouseOver event immediately, hoverIntent checks
* to see if the user's mouse has slowed down (beneath the sensitivity
* threshold) before firing the onMouseOver event.
* 
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("ul li").hoverIntent( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("ul li").hoverIntent({
*	sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
*	interval: 100,   // number = milliseconds of polling interval
*	over: showNav,  // function = onMouseOver callback (required)
*	timeout: 0,   // number = milliseconds delay before onMouseOut function call
*	out: hideNav    // function = onMouseOut callback (required)
* });
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/(function(a){a.fn.hoverIntent=function(b,c){var d={sensitivity:7,interval:100,timeout:0};d=a.extend(d,c?{over:b,out:c}:b);var e,f,g,h,i=function(a){e=a.pageX;f=a.pageY},j=function(b,c){c.hoverIntent_t=clearTimeout(c.hoverIntent_t);if(Math.abs(g-e)+Math.abs(h-f)<d.sensitivity){a(c).unbind("mousemove",i);c.hoverIntent_s=1;return d.over.apply(c,[b])}g=e;h=f;c.hoverIntent_t=setTimeout(function(){j(b,c)},d.interval)},k=function(a,b){b.hoverIntent_t=clearTimeout(b.hoverIntent_t);b.hoverIntent_s=0;return d.out.apply(b,[a])},l=function(b){var c=jQuery.extend({},b),e=this;e.hoverIntent_t&&(e.hoverIntent_t=clearTimeout(e.hoverIntent_t));if(b.type=="mouseenter"){g=c.pageX;h=c.pageY;a(e).bind("mousemove",i);e.hoverIntent_s!=1&&(e.hoverIntent_t=setTimeout(function(){j(c,e)},d.interval))}else{a(e).unbind("mousemove",i);e.hoverIntent_s==1&&(e.hoverIntent_t=setTimeout(function(){k(c,e)},d.timeout))}};return this.bind("mouseenter",l).bind("mouseleave",l)}})(jQuery);