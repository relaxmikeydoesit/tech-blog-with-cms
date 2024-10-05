import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderHead, a as renderComponent, f as renderSlot, b as createAstro } from './astro/server_BXgOEm7G.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const WixClient = createClient({ 
  modules: { items },
  auth: OAuthStrategy({
     clientId: '7bb0c85b-959e-40e2-b478-481d4b39d711'
    }),
});

async function fetchArticles({
    count = null,
    featured = false,
    tagged = false 
} = {}) {
    let query = WixClient.items.queryDataItems({
        dataCollectionId: "Articles",
    });

    if (count !== null) {
        query = query.limit(count);
    }
    if (featured) {
        query = query.eq('featured', true);
    }
    if (tagged) {
        query = query.eq('tagged', true);
    }
     
    const articles = await query.find();
    return articles.items;
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <h1 class="visually-hidden" data-astro-cid-3ef6ksr2>W.</h1> <a href="/" class="logo" data-astro-cid-3ef6ksr2> <img src="/images/logo.svg" alt="w logo" data-astro-cid-3ef6ksr2> </a> <button aria-controls="primary-nav" aria-expanded="false" data-astro-cid-3ef6ksr2> <span class="visually-hidden" data-astro-cid-3ef6ksr2>Menu</span> <img class="icon-hamburger" src="images/icon-menu.svg" alt="" data-astro-cid-3ef6ksr2> <img class="icon-close" src="images/icon-menu-close.svg" alt="" data-astro-cid-3ef6ksr2> </button> <nav id="primary-nav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>Home</a></li> <li data-astro-cid-3ef6ksr2><a href="https://mikeylee.xyz" data-astro-cid-3ef6ksr2>MikeyLee.xyz</a></li> <li data-astro-cid-3ef6ksr2><a href="https://github.com/relaxmikeydoesit" data-astro-cid-3ef6ksr2>Github</a></li> <li data-astro-cid-3ef6ksr2><a href="https://medium.com/@themikeylee" data-astro-cid-3ef6ksr2>Medium</a></li> </ul> </nav> </header> `;
}, "C:/Users/Mikey/Documents/tech-blog-with-cms/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$PrimaryLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrimaryLayout;
  const { title = "TechNews4U" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/images/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="base-layout"> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Mikey/Documents/tech-blog-with-cms/src/layouts/PrimaryLayout.astro", void 0);

export { $$PrimaryLayout as $, fetchArticles as f };
