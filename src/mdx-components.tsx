import type { MDXComponents } from 'mdx/types'

// This file is required by @next/mdx for the App Router. It lets every
// .mdx file (our blog articles) resolve custom components — for now we
// just pass through the defaults, wrapped visually by ArticleLayout's
// `.custom-typography` prose styles.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
