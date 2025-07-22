import { BrowserRouter, Routes, Route } from "react-router";
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import Features from "./pages/Features";
import BlogList from "./pages/BlogList";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter basename="/nova-website/">
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
    </BrowserRouter>
  );
}

export default App
