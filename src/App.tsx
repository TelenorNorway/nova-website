import type { RouteRecord } from 'vite-react-ssg'

export const routes: RouteRecord[] = [
    {
        path: '/',
        lazy: () => defaultToComponent(import('./pages/Landing')),
        entry: "src/pages/Landing/index.jsx",
    },
    {
        path: '/features',
        lazy: () => defaultToComponent(import('./pages/Features')),
        entry: "src/pages/Features/index.jsx",
    },
    {
        path: '/contact',
        lazy: () => defaultToComponent(import('./pages/Contact')),
        entry: "src/pages/Contact/index.jsx",
    },
    {
        path: '/blog',
        lazy: () => defaultToComponent(import('./pages/BlogList')),
        entry: "src/pages/BlogList/index.jsx",
    },
    {
        path: '/blog/:slug',
        lazy: () => defaultToComponent(import('./pages/Blog')),
        entry: "src/pages/Blog/index.jsx",
        getStaticPaths: async () => {
            const blogPosts = await import('../blog');
            if (blogPosts) {
                return Object.keys(blogPosts).map((blog) => `/blog/${blogPosts[blog].metadata.slug}`);
            } else {
                console.error("Blog posts not found or invalid format.");
                return [];
            }
        }
    },
    {
        path: '/404',
        lazy: () => defaultToComponent(import('./pages/NotFound')),
        entry: "src/pages/NotFound/index.jsx",
    },
    {
        path: '*',
        lazy: () => defaultToComponent(import('./pages/NotFound')),
        entry: "src/pages/NotFound/index.jsx",
    },
];

async function defaultToComponent(routePromise: Promise<RouteRecord & { default: any }>) {
  const routeModule = await routePromise

  return { ...routeModule, Component: routeModule.default }
}
