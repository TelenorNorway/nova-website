import React from "react";
import type { RouteRecord } from 'vite-react-ssg'
const Landing = React.lazy(() => import('./pages/Landing'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Features = React.lazy(() => import("./pages/Features"));
const BlogList = React.lazy(() => import("./pages/BlogList"));
const Blog = React.lazy(() => import("./pages/Blog"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

/*
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="features" element={<Features />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog">
            <Route index element={<BlogList />} />
            <Route path=":slug" element={<Blog />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
*/

export const routes: RouteRecord[] = [
    {
        path: '/',
        Component: Landing,
    },
    {
        path: '/features',
        Component: Features,
    },
    {
        path: '/contact',
        Component: Contact,
    },
    {
        path: '/blog',
        Component: BlogList,
    },
    {
        path: '/blog/:slug',
        Component: Blog,
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
        path: '*',
        Component: NotFound,
    },
];
