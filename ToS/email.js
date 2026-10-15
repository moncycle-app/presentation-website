/*
** moncycle.app -- terms of service: rebuilds the contact e-mail address in the browser,
** so that it never appears in clear in the HTML (anti-spam).
** Every <span class="email"> is replaced by a mailto link. Without JavaScript, the span
** keeps its fallback content: an image of the address (email.jpg).
*/
(function () {
	var address = ['hello', 'tech4fertility.org'].join(String.fromCharCode(64));

	function build() {
		var spans = document.querySelectorAll('span.email');
		for (var i = 0; i < spans.length; i++) {
			var a = document.createElement('a');
			a.href = 'mailto:' + address;
			a.textContent = address;
			spans[i].replaceWith(a);
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', build);
	} else {
		build();
	}
})();
