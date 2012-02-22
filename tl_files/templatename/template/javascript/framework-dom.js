$(document).ready(function() {

	$("ul.sf-menu").supersubs({
		minWidth:			12,
		maxWidth:			27,
		extraWidth:			1
		}).superfish({
			delay:			200,
			animation:		{opacity:'show'},
			speed:			'fast',
			autoArrows:		false,
			dropShadows:	false
		});

	var domscripts = {

		init: function init () {

			var self = this;

			self.installStickyMenu();
			//self.installTabs();
		},

		installStickyMenu: function installStickyMenu () {

			var header      = $('#header'),
				nav         = $('#navigation'),
				stickyClass = 'fix';

			if (nav.find('.mod_navigation').length > 0 ) {

				$(document).bind('scroll',function(){
					var hOffset = header.offset().top+header.height(),
						top     = $(document).scrollTop(),
						trigger = false;

					// make it sticky ...
					if (hOffset < top) {
						if (nav.data(stickyClass) !== true) {
							nav.addClass(stickyClass).data(stickyClass,true);
						}
					} else {
						if (nav.data(stickyClass) !== false) {
							nav.removeClass(stickyClass).data(stickyClass,false);
						}
					}

				});

				// initial check for scroll-status ...
				$(document).trigger('scroll');
			}
		},

		installTabs: function installTabs () {

			// standard behavoir in YAML docs
			$('.jquery_tabs:not([data-sync])').accessibleTabs({
				fx:"show",
				fxspeed: '',
				syncheights: false,
				tabhead: 'h5',
				tabbody:'.tab-content'
			});

			// "accessible tabs" sync example
			$('.jquery_tabs[data-sync="true"]').accessibleTabs({
				fx:"show",
				fxspeed: '',
				syncheights: true,
				tabhead: 'h5',
				tabbody:'.tab-content'
			});
		}
	};

	domscripts.init();
});