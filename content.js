

var images, started, config, controls
	, play = $('<img>', {src: 'data:image/png;base64,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'})[0];


function Gallerify(detectors) {
	var self = this;
	self.detectors = detectors;
	self.config = {
		minItems: 2,
		transitionSpeed: 500,
		width: 300
	};
	self.running = false;

	chrome.runtime.onMessage.addListener(function onPageActionClick(req, sender, res) {
		if (typeof res === 'function') { res({}) };

		if (!self.running) {
			self.run();
		} else {
			self.restore();
		}
	});

	self.detect();
}

Gallerify.prototype.detect = function () {
	var self = this;

	$.each(self.detectors, function (name, detector) {
		//console.log('Detecting', name);

		// Run quick matcher.
		if (detector.matcher instanceof RegExp) {
			if (!document.location.href.match(detector.matcher)) { return; }
		} else if (typeof detector.matcher === 'function') {
			if (!detector.matcher()) { return; }
		} else {
			console.error('Matcher fail...');
			return;
		}

		// Quick matcher hit, scan for items.
		detector.collector(function (items) {
			items = items.filter(detector.filter);

			if (items.length < self.config.minItems) { return; }

			// Show page action.
			chrome.runtime.sendMessage({}, function (response) {});

			self.items = items;
			self.detector = detector;
			if (detector.config.auto) {
				self.run();
			}
		});
	});
};

Gallerify.prototype.run = function () {
	var self = this, start = Date.now();
	this.running = true
		, masonry = false;

	// Add gallery section.
	var gallery = $('<section class="gallerified"></section>').hide()
		.insertAfter(document.head)
		.fadeIn(self.config.transitionSpeed, function () {
			$(document.body).hide(); })
		, container = $('<div>').appendTo(gallery);

		var style = $('<style>')
			.html(self.detector.style.join('\n'))
			.appendTo(document.head);

	$.each(self.items, function addItem() {
		var item = $(self.render(self.detector.template, this)).addClass('item')
			, img = item.find('img').first();

		if (!img) {
			container.append(item);
		} else {
			img.on('load', function () {
				setTimeout(function () {
					item.appendTo(container);
					if (masonry) {
						container.masonry('appended', item);
					} else {
						masonry = true;
						container.masonry({
							gutter: 10,
							columnWidth: self.detector.config.width
						});
					}
					start = Date.now() + 1000;
				}, start - Date.now());
			});
		}
	});

};

Gallerify.prototype.restore = function () {
	var self = this;
	self.running = false;

	$(document.body).show();
	$('section.gallerified').fadeOut(self.config.transitionSpeed, function () {
		$(this).remove();
	});

};

Gallerify.prototype.render = function(template, data) {
	var self = this;
	$.each(data, function (name, value) {
		// {href} => http://...
		template = template.replace(new RegExp('{' + name + '}', 'gi'), value);
	});
	return template;
};

(function () { var gallery = new Gallerify(detectors); })();



/*
function gallerify(request, sender, sendResponse) {
	if (typeof sendResponse === 'function') { sendResponse({}) };

	var bg = $(document.body);

	if (started) {
		started = false;

		$('.galContainer').fadeOut(400, function () {
			$(this).remove();
		})

		setTimeout(function () {
			bg.css('background-color', 'initial')
				.removeClass('gallerified')
				.children().slideDown(1000);
		}, 400)

	} else {
		started = true;

		// Fade in to black.
		bg.addClass('gallerified')
			.children().slideUp(600);

		setTimeout(function () {
			bg.css('background-color', '#000');
		}, 100);

		setTimeout(addImages, 600);
	}
};

function addImages() {
	var mas = false, loaded = window.loaded = 0
		, container = $('<div>', {class: 'galContainer'}).appendTo(document.body);

	var loading = $('<div>')
		.addClass('loading')
		.append($('<img>', {'src': 'data:image/gif;base64,R0lGODlhKwALAPEAAAAAAP///3x8fP///yH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAKwALAAACMoSOCMuW2diD88UKG95W88uF4DaGWFmhZid93pq+pwxnLUnXh8ou+sSz+T64oCAyTBUAACH5BAAKAAEALAAAAAArAAsAAAI9xI4IyyAPYWOxmoTHrHzzmGHe94xkmJifyqFKQ0pwLLgHa82xrekkDrIBZRQab1jyfY7KTtPimixiUsevAAAh+QQACgACACwAAAAAKwALAAACPYSOCMswD2FjqZpqW9xv4g8KE7d54XmMpNSgqLoOpgvC60xjNonnyc7p+VKamKw1zDCMR8rp8pksYlKorgAAIfkEAAoAAwAsAAAAACsACwAAAkCEjgjLltnYmJS6Bxt+sfq5ZUyoNJ9HHlEqdCfFrqn7DrE2m7Wdj/2y45FkQ13t5itKdshFExC8YCLOEBX6AhQAADsAAAAAAAAAAAA='}).hide().fadeIn(1000))
		.appendTo(document.body);

	$.each(images, function () {
		var href = this.href
			, img = $('<img>').attr('src', this.src).css('max-width', '100%');

		img.on('error', function () {
			loaded++;
			if (loaded >= images.length) {
				$('.galContainer').masonry();
				loading.css('opacity', 0).delay(600).slideUp(400);
			}
		})

		img.on('load', function () {
			var elem = $('<a>').attr('href', href).addClass('image').append(img).appendTo(container);

			if (mas) {
				container.masonry('appended', elem);
			} else {
				mas = true;
				container.masonry({
					gutter: 10,
					columnWidth: config.width
				});
			}

			if (is_gif_image(img[0])) {
				freeze_gif(img[0]);

				elem.hover(function () {
					if ($('.anim', elem).is(':visible')) {
						$('.still', elem).show();
						$('.anim', elem).hide();
					} else {
						$('.still', elem).hide();
						$('.anim', elem).show();
					}
				});
			}

			loaded++;
			if (loaded >= images.length) {
				$('.galContainer').masonry();
				loading.css('opacity', 0).delay(600).slideUp(400);
			}
		})
	});

	addControls();
}

function addControls() {
	if (controls) {
		var ctrls = $('<div>').addClass('gallerified controls').appendTo(document.body);

		var next = controls.next(), previous = controls.previous();

		if (previous) {
			ctrls.append($('<a>', { href: previous }).text('<<'))
		}
		if (previous && next) {
			ctrls.append('<span> | </span>');
		}
		if (next) {
			ctrls.append($('<a>', { href: next }).text('>>'))
		}

		$(document).on('keydown', function (e) {
			switch (e.keyCode) {
				case 37: document.location.href = previous; break;
				case 39: document.location.href = next; break;
			}
		});

	}
}
*/

function is_gif_image(i) {
    return /^(?!data:).*\.gif/i.test(i.src);
}

function freeze_gif(i) {
	var c = document.createElement('canvas')
		, ctx = c.getContext('2d')
		, w = c.width = i.width
		, h = c.height = i.height;
	ctx.drawImage(i, 0, 0, w, h);
	if (w > 128 && h > 128) {
		ctx.drawImage(play, w / 2 - 32, h / 2 - 32, 64, 64);
	}
	try {
		$(i)
			.addClass('anim')
			.hide();
		$('<img>')
			.addClass('still')
			.attr('src', c.toDataURL("image/png"))
			.appendTo(i.parentNode);
	} catch(e) { // cross-domain -- mimic original with all its tag attributes
		console.error('failed to stop gif');
		/*for (var j = 0, a; a = i.attributes[j]; j++)
		c.setAttribute(a.name, a.value);
		i.parentNode.replaceChild(c, i);*/
	}
}