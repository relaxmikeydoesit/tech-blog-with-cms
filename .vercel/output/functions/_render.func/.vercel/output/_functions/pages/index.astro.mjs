import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_BXgOEm7G.mjs';
import 'kleur/colors';
import { f as fetchArticles, $ as $$PrimaryLayout } from '../chunks/PrimaryLayout_ulmNfGdP.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$FeaturedArticle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedArticle;
  const { class: className } = Astro2.props;
  const featuredArticle = await fetchArticles({ count: 1, featured: true });
  const articleContent = featuredArticle[0].data;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([className, "featured-article-container"], "class:list")} <article data-astro-cid-xmauqxtz> <img src="/images/image-web-3-desktop.jpg" alt="web 3" data-astro-cid-xmauqxtz> <div class="flow-container" data-astro-cid-xmauqxtz> <h3 data-astro-cid-xmauqxtz>${articleContent.title}</h3> <div class="flow" data-astro-cid-xmauqxtz> <p data-astro-cid-xmauqxtz> ${articleContent.summary} </p> <a${addAttribute(`/article/${articleContent.slug}`, "href")} class="button" data-astro-cid-xmauqxtz>Read More</a> </div> </div> </div> `;
}, "C:/Users/Mikey/Documents/tech-blog-with-cms/src/components/FeaturedArticle.astro", void 0);

const $$Astro = createAstro();
const $$PopularArticles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PopularArticles;
  const { class: className } = Astro2.props;
  const articles = await fetchArticles({ count: 3 });
  return renderTemplate`${maybeRenderHead()}<h2 class="visually-hidden" data-astro-cid-smg4ft7t>Popular Articles</h2> <ul role="list"${addAttribute(className, "class:list")} data-astro-cid-smg4ft7t> ${articles.map((article) => renderTemplate`<li data-astro-cid-smg4ft7t> <article data-astro-cid-smg4ft7t> <img${addAttribute(article.data.image, "src")} alt="" data-astro-cid-smg4ft7t> <div data-astro-cid-smg4ft7t> <h3 data-astro-cid-smg4ft7t><a${addAttribute(`/article/${article.data.slug}`, "href")} data-astro-cid-smg4ft7t>${article.data.title}</a></h3> <p data-astro-cid-smg4ft7t>${article.data.summary}</p> </div> </article> </li>`)} </ul> `;
}, "C:/Users/Mikey/Documents/tech-blog-with-cms/src/components/PopularArticles.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await fetchArticles({ count: 3 });
  const taggedArticles = await fetchArticles({ tagged: true });
  return renderTemplate`${renderComponent($$result, "PrimaryLayout", $$PrimaryLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="three-columns mbe-xl"> ${renderComponent($$result2, "FeaturedArticle", $$FeaturedArticle, { "class": "span-2" })} <div class="inverted"> <h2>New</h2> <ul role="list" class="seperated-list"></ul> ${taggedArticles.map((article) => renderTemplate`<li> <article class="flow"> <h3> <a class="link-title"${addAttribute(`/article/${article.data.slug}`, "href")}>${article.data.title}</a></h3> <p>${article.data.summary}</p> <span class="south-border"></span> </article> </li>`)} </div> </div> ${renderComponent($$result2, "PopularArticles", $$PopularArticles, { "class": "three-columns mbe-xl" })} <h2></h2> ` })}`;
}, "C:/Users/Mikey/Documents/tech-blog-with-cms/src/pages/index.astro", void 0);

const $$file = "C:/Users/Mikey/Documents/tech-blog-with-cms/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
