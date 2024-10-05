import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DutJ87Mg.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_BXgOEm7G.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Mikey/Documents/tech-blog-with-cms/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector('[aria-controls=\"primary-nav\"]');e.addEventListener(\"click\",()=>{e.getAttribute(\"aria-expanded\")===\"false\"?e.setAttribute(\"aria-expanded\",\"true\"):e.setAttribute(\"aria-expanded\",\"false\")});\n"}],"styles":[{"type":"inline","content":"@font-face{font-family:Inter;src:url(/Inter-VariableFont_slnt,wght.ttf);font-weight:400 900;font-display:swap}:root{--clr-neutral-100: hsl(48, 71%, 99%);--clr-neutral-200: hsl(237, 20%, 80%);--clr-neutral-400:hsl(252, 2%, 41%);--clr-neutral-800: hsl(240, 100%, 5%);--clr-neutral-900: hsl(238, 92%, 5%);--clr-orange: hsl(5, 85%, 63%);--clr-yellow: hsl(33, 79%, 61%);--clr-accent: var(--clr-orange);--clr-body: var(--clr-neutral-400);--clr-heading: var(--clr-neutral-900);--ff-base: \"Inter\", sans-serif;--fw-reg: 400;--fw-semibold: 700;--fw-bold: 900;--fs-400: 1rem;--fs-500: 1.25rem;--fs-600: 1.5rem;--fs-700: 2rem;--fs-800: 2.5rem;--fs-900: 3rem}*,*:before,*:after{box-sizing:border-box}h1,h2,h3,h4,p{margin:0}h1,h2,h3,h4{color:var(--clr-heading);font-weight:var(--fw-bold);line-height:1;text-wrap:balance}p,li{text-wrap:pretty;max-width:65ch;list-style:none}[role=list]{list-style:none;margin:0;padding:0}img{max-width:100%;display:block}body{margin:0;font-family:var(--ff-base);color:var(--clr-body);line-height:1.2;background-color:var(--clr-bg-blue)}.logo{filter:drop-shadow(0 0 .9rem indigo)}main,section{container-type:inline-size}.base-layout{--max-width:1180px;--padding: 1rem;display:grid;grid-template-columns:minmax(var(--padding),1fr) min(var(--max-width),100% - (var(--padding) * 2)) minmax(var(--padding),1fr);>*{grid-column:2 / 3}>.full-width{grid-column:1 / -1}}.slug-layout{max-width:1180px;padding:1rem}.slug-layout img{margin:40px auto;object-fit:cover;width:100%}.three-columns{display:grid;gap:1.5rem;@container (width > 75ch){grid-template-columns:repeat(3,1fr);>.span-2{grid-column:span 2}}}.flow-container{display:flex;grid-auto-flow:column}.flow-article{width:fit-content;font-size:var(--fs400)}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.inverted{--clr-body: var(--clr-neutral-200);--clr-accent-500: var(--clr-accent-500);background-color:var(--clr-neutral-800);h2{color:var(--clr-accent);padding-block:1.5rem;padding-left:1rem;font-weight:700;font-size:2rem}article{margin-bottom:10px;padding:10px 1rem}.south-border{width:90%;height:1px;background-color:var(--clr-neutral-200);display:block;margin:18px auto}.south-border ul li:last-child{display:none}.link-title{color:var(--clr-neutral-100);text-decoration:none;font-weight:700}.link-title:hover{color:#e9ab53}h3{color:var(--clr-neutral-100)}p{color:var(--clr-body);margin-top:12px}.seperated-list{margin-block:1rem}ul li{list-style-type:none}}.flow>*+*{margin-block-start:var(--flow-space, 1em)}.mbe-xl{margin-block-end:3rem}.button{display:inline flex;cursor:pointer;background-color:var(--clr-accent);color:var(--clr-neutral-900);text-decoration:none;font-weight:var(--fw-bold);padding:.75em 1em;text-transform:uppercase;letter-spacing:.25ch;margin:2em auto;&:hover,&:focus-visible{background-color:var(--clr-neutral-900);color:var(--clr-neutral-100)}}.flow-slug{font-size:1.3rem}header[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;align-items:center;margin-block:clamp(1.5rem,5vmax,5rem) clamp(1.5rem,5vmax,2rem)}ul[data-astro-cid-3ef6ksr2]{list-style:none;margin:0;padding:0;display:flex}li[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2]{text-decoration:none;font-size:1.1rem;padding:0 18px;color:#00001a}li[data-astro-cid-3ef6ksr2] a[data-astro-cid-3ef6ksr2]:hover{color:#f15e50}button[data-astro-cid-3ef6ksr2]{display:none}@media (width < 750px){button[data-astro-cid-3ef6ksr2]{display:block;position:absolute;z-index:10;right:1rem;padding:1rem;background:transparent;border:0;.icon-close{display:none}}nav[data-astro-cid-3ef6ksr2]{display:none}[data-astro-cid-3ef6ksr2][aria-expanded=true]{.icon-hamburger{display:none}.icon-close{display:block}}[data-astro-cid-3ef6ksr2][aria-expanded=true]+nav[data-astro-cid-3ef6ksr2]{display:block;position:absolute;inset:0;width:80%;margin-left:auto;z-index:1;color:var(--clr-neutral-900);background-color:var(--clr-neutral-100);box-shadow:0 0 0 100vmax hsl(0 0 0 / .3);ul{margin-top:20dvh;display:grid;gap:2rem;a{font-size:2.5rem}}}}\n.featured-article-container[data-astro-cid-xmauqxtz]{container-type:inline-size}article[data-astro-cid-xmauqxtz]{display:grid;gap:1rem;@container (width > 50ch){gap:2rem;grid-template-columns:repeat(2,1fr)}}img[data-astro-cid-xmauqxtz]{grid-column:1 / -1;margin-bottom:32px}h3[data-astro-cid-xmauqxtz]{font-size:var(--fs-900)}@container (width < 50ch){grid-template-columns: repeat(1,1fr);gap: 2rem 1rem}@media (width: < 600px){.featured-article-container{article{div.flow-container{display:flex;flex-direction:column}}}}}article[data-astro-cid-smg4ft7t]{padding-top:10px;display:grid;gap:1rem;grid-template-columns:100px auto}ul[data-astro-cid-smg4ft7t]{counter-reset:article-count}li[data-astro-cid-smg4ft7t]{counter-increment:article-count}h3[data-astro-cid-smg4ft7t]:before{content:counter(article-count,decimal-leading-zero);font-weight:700;display:block;color:var(--clr-accent);font-size:1.5em;margin-bottom:12px}a[data-astro-cid-smg4ft7t]{text-decoration:none;color:var(--clr-neutral-900)}a[data-astro-cid-smg4ft7t]:hover{color:var(--clr-accent)}p[data-astro-cid-smg4ft7t]{font-size:16px;margin:10px auto;line-height:normal}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Mikey/Documents/tech-blog-with-cms/src/pages/article/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Mikey/Documents/tech-blog-with-cms/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/article/[slug]@_@astro":"pages/article/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Mikey/Documents/tech-blog-with-cms/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Dv9cddSx.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CN_eXX4S.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/Inter-VariableFont_slnt,wght.ttf","/images/favicon-32x32.png","/images/icon-menu-close.svg","/images/icon-menu.svg","/images/image-gaming-growth.jpg","/images/image-retro-pcs.jpg","/images/image-top-laptops.jpg","/images/image-web-3-desktop.jpg","/images/image-web-3-mobile.jpg","/images/logo.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"sKDBMpznERK9+OoKC7ww1DYUCjnWuKjs60UgaI+NHGY=","experimentalEnvGetSecretEnabled":false});

export { manifest };
