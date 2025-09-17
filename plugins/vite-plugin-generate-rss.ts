// plugins/vite-plugin-generate-rss.ts
import fs from 'fs/promises'
import path from 'path'
import { Plugin } from 'vite'
import glob from 'fast-glob'

/** Ensures we can load modules that require loaders, like png and mdx */
async function loadWithVite(viteConfig, filePath) {
  const { createServer } = await import('vite')
  const server = await createServer({
    configFile: false,
    plugins: viteConfig.plugins,
    root: viteConfig.root,
    logLevel: 'error',
  })
  try {
    return await server.ssrLoadModule(filePath)
  } finally {
    await server.close()
  }
}

export default function generateRss(): Plugin {
    let viteConfig: any;
    let blogPosts: any[] = [];

  return {
    name: 'generate-rss',
    apply: 'build',

    configResolved(config) {
      viteConfig = config
    },

    async generateBundle() {
      const root = viteConfig.root

      const { default: authors } = await loadWithVite(viteConfig, "./blog/authors.js");
      const blogDir = path.resolve(root, 'blog')
      const files = await glob('**/*.mdx', { cwd: blogDir, absolute: true })

      const posts = await Promise.all(
        files.map(async (file) => {
          const mod = await loadWithVite(viteConfig, file)
          const metadata = mod.metadata
          if (!metadata || !metadata.title || !metadata.slug || !metadata.date) {
            throw new Error(`Missing metadata in ${file}`)
          }
          return metadata
        })
      )

      const sorted = posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )

      const items = sorted
        .map((post) => {
          const author = authors[post.authors[0]] || { name: 'Unknown' };
          return `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <description><![CDATA[${post.description || ''}]]></description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${author.name}</author>
    <link>https://platform.telenor.no/blog/${post.slug}</link>
    <guid>https://platform.telenor.no/blog/${post.slug}</guid>
  </item>`
        })
        .join('\n')

      const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>The Cloud Tech Blog</title>
  <link>https://platform.telenor.no</link>
  <description>A blog about the latest Cloud Native technologies - With love from Telenor</description>
  ${items}
</channel>
</rss>`

      // Write to dist/rss.xml
      const outDir = path.resolve(root, 'dist')
      await fs.mkdir(outDir, { recursive: true })
      await fs.writeFile(path.join(outDir, 'rss.xml'), rss.trim(), 'utf-8')

      console.log(`📝 RSS feed generated with ${posts.length} posts`)
    }
  }
}
