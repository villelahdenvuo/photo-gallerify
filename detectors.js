var detectors = {
	// Apache/generic index page
	"index": {
		// A quick matcher function or url regex.
  	matcher: function () { return !!document.title.match(/index of/i); },
		// Selector or function that scans document for elements to gallerify.
		collector: function (items) {
			var selection = ['jpg', 'jpeg', 'gif', 'png']
				.map(function (e) { return 'a[href$=".' + e + '"]'; }).join(',');

			items($(selection).map(function () {
				// Return as much metadata as possible.
				return {
					elem: this,
					title: $(this).text(),
					href: this.href
				}
			}));
		},
		// Filter for said elements.
		filter: function (i, o) {
			return o.elem.href.indexOf(escape(o.elem.innerHTML.trim())) !== -1;
		},
		template: '<a href="{href}"><span class="title">{title}</span><img src="{href}" alt="{title}" /></a>',
		style: [
			'.gallerified .title { position: absolute; width: 100%; color: #fff;',
			'bottom: 3px; text-shadow: 1px 1px 3px #000; transition: opacity 0.4s, bottom 0.4s; }',
			'.gallerified .item:hover .title { opacity: 0; bottom: -20px; }'
		],
		config: {
			auto: false
		}
	}
};