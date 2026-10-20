// Terms of service: rebuilds the contact e-mail address in the browser, so that it never appears
// in clear in the HTML (anti-spam). Every <span class="email"> is replaced by a mailto link.
// Without JavaScript, the span keeps its fallback content: an image of the address.
const address = ['hello', 'tech4fertility.org'].join(String.fromCharCode(64));

function build(): void {
	document.querySelectorAll('span.email').forEach((span) => {
		const link = document.createElement('a');
		link.href = `mailto:${address}`;
		link.textContent = address;
		span.replaceWith(link);
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', build);
} else {
	build();
}
