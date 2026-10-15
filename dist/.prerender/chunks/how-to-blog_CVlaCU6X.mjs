import { n as __exportAll } from "./rolldown-runtime_DC62tzP2.mjs";
import { d as renderTemplate, f as maybeRenderHead, x as unescapeHTML } from "./server_B-HiMtrG.mjs";
import { t as createComponent } from "./astro-component_BYiPXd1_.mjs";
//#region src/pages/blog/how-to-blog/how-to-blog.md
var how_to_blog_exports = /* @__PURE__ */ __exportAll({
	Content: () => Content,
	compiledContent: () => compiledContent,
	default: () => Content,
	file: () => file,
	frontmatter: () => frontmatter,
	getHeadings: () => getHeadings,
	rawContent: () => rawContent,
	url: () => url
});
var html = () => "<h1 id=\"how-to-blog\">How to Blog</h1>\n<h2 id=\"a-guide-on-how-to-make-your-own-blog-in-alris-games\">A guide on how to make your own blog in alris’ games.</h2>\n<p><em>12 • 9 • 2026 | Alris Dhanwani</em></p>\n<p>This blog will guide you through how to make your very own blog in alris’ games.</p>\n<h3 id=\"requirements\">Requirements</h3>\n<p>Your blog requires the following things:</p>\n<ul>\n<li>Title (e.g.: How to Blog)</li>\n<li>Subtitle/extended title/description (e.g.: A guide on how to make your own blog in alris’ games.)</li>\n<li>Date written</li>\n<li>Author</li>\n<li>Website url (e.g.: how-to-blog) (comes after <code>https://mrcheesie.github.io/alris_games/blog</code>, so the full name will be <code>https://mrcheesie.github.io/alris_games/blog/your-custom-blog-url</code>) The URL must <mark>NOT</mark> contain spaces, and can only contain number, lowercase letters, underscores and hyphens</li>\n<li>Content - The actual blog</li>\n</ul>\n<h3 id=\"blog-formats\">Blog formats</h3>\n<p>Since the blog is a website, if you want no or minimal changes to your blog, write it in an HTML format. If you prefer not to, however, then the following formats are also accepted, but may have some changes.</p>\n<ul>\n<li>Markdown - <code>.md</code>,  <code>.markdown</code></li>\n<li>Rich text documents - <code>.rtf</code>, <code>.odt</code>, <code>.docx</code></li>\n<li>Plain text - <code>.txt</code></li>\n</ul>\n<p>All of these formats are converted to HTML using Pandoc.\nBlogs support both web images and local images in all formats.</p>\n<h3 id=\"submitting\">Submitting</h3>\n<p>To submit your blog to me, email me at <a href=\"mailto:alrisdhanwani@protonmail.com\">alrisdhanwani@protonmail.com</a> with your file attached. If you have external photos and are using markdown or HTML, send a <code>.zip</code> file with your blog and the images inside.\nIt is recommended your blog have a sources section for topics you have researched for.</p>\n<h3 id=\"examples\">Examples</h3>\n<p>Example blogs (this one but in different formats) can be viewed/downloaded</p>\n<ul>\n<li><a href=\"index.html\">HTML</a></li>\n<li><a href=\"sample.md\">Markdown</a></li>\n<li><a href=\"sample.docx\">rich text (docx)</a></li>\n<li><a href=\"sample.odt\">rich text (odt)</a></li>\n<li><a href=\"sample.rtf\">rich text (rtf)</a></li>\n<li><a href=\"sample.txt\">Plain text</a></li>\n</ul>\n<h3 id=\"faqs\">FAQ’s</h3>\n<blockquote>\n<p>There are no FAQ’s because no one has asked any questions yet.</p>\n</blockquote>\n";
var frontmatter = {};
var file = "/Users/gulnazdhanwani/Desktop/AAH/alris_games/alris-astro/src/pages/blog/how-to-blog/how-to-blog.md";
var url = "/alris_games/blog/how-to-blog/how-to-blog";
function rawContent() {
	return "# How to Blog\n## A guide on how to make your own blog in alris' games.\n\n*12 • 9 • 2026 | Alris Dhanwani*\n\nThis blog will guide you through how to make your very own blog in alris' games.\n\n### Requirements\nYour blog requires the following things:\n\n- Title (e.g.: How to Blog)\n- Subtitle/extended title/description (e.g.: A guide on how to make your own blog in alris' games.)\n- Date written\n- Author\n- Website url (e.g.: how-to-blog) (comes after `https://mrcheesie.github.io/alris_games/blog`, so the full name will be `https://mrcheesie.github.io/alris_games/blog/your-custom-blog-url`) The URL must <mark>NOT</mark> contain spaces, and can only contain number, lowercase letters, underscores and hyphens\n- Content - The actual blog\n\n### Blog formats\nSince the blog is a website, if you want no or minimal changes to your blog, write it in an HTML format. If you prefer not to, however, then the following formats are also accepted, but may have some changes.\n\n- Markdown - `.md`,  `.markdown`\n- Rich text documents - `.rtf`, `.odt`, `.docx`\n- Plain text - `.txt`\n\nAll of these formats are converted to HTML using Pandoc. \nBlogs support both web images and local images in all formats.\n\n### Submitting \nTo submit your blog to me, email me at [alrisdhanwani@protonmail.com](mailto:alrisdhanwani@protonmail.com) with your file attached. If you have external photos and are using markdown or HTML, send a `.zip` file with your blog and the images inside.\nIt is recommended your blog have a sources section for topics you have researched for.\n\n### Examples\nExample blogs (this one but in different formats) can be viewed/downloaded\n\n- [HTML](index.html)\n- [Markdown](sample.md)\n- [rich text (docx)](sample.docx)\n- [rich text (odt)](sample.odt)\n- [rich text (rtf)](sample.rtf)\n- [Plain text](sample.txt)\n\n### FAQ's\n\n> There are no FAQ's because no one has asked any questions yet.";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [
		{
			"depth": 1,
			"slug": "how-to-blog",
			"text": "How to Blog"
		},
		{
			"depth": 2,
			"slug": "a-guide-on-how-to-make-your-own-blog-in-alris-games",
			"text": "A guide on how to make your own blog in alris’ games."
		},
		{
			"depth": 3,
			"slug": "requirements",
			"text": "Requirements"
		},
		{
			"depth": 3,
			"slug": "blog-formats",
			"text": "Blog formats"
		},
		{
			"depth": 3,
			"slug": "submitting",
			"text": "Submitting"
		},
		{
			"depth": 3,
			"slug": "examples",
			"text": "Examples"
		},
		{
			"depth": 3,
			"slug": "faqs",
			"text": "FAQ’s"
		}
	];
}
var Content = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = url;
	return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
});
//#endregion
//#region \0virtual:astro:page:src/pages/blog/how-to-blog/how-to-blog@_@md
var page = () => how_to_blog_exports;
//#endregion
export { page };
