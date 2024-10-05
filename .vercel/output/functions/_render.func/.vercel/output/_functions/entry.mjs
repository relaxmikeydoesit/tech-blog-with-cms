import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D6d-wGxT.mjs';
import { manifest } from './manifest_Dv9cddSx.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/article/_slug_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/article/[slug].astro", _page1],
    ["src/pages/index.astro", _page2]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "16d51aa7-5804-4c85-803b-f5379b4ea4b1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
