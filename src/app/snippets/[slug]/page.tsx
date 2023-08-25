import { notFound } from 'next/navigation'
import { allSnippets } from 'contentlayer/generated'
import format from 'date-fns/format'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { IconType } from 'react-icons/lib'

import { env } from '@/config/env.mjs'
import { GitHubLink } from '@/components/GitHubLink'
import { icons } from '@/components/icons'
import { MDXComponents } from '@/components/MDXComponents'
import { SendPageView } from '@/components/SendPageView'
import { Sharable } from '@/components/Sharable'

export const generateStaticParams = async () => {
  return allSnippets.map((snippet) => ({ slug: snippet.slugAsParams }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const snippet = allSnippets.find(
    (snippet) => snippet.slugAsParams === params.slug,
  )

  if (!snippet) {
    return {}
  }

  return { title: snippet.title }
}

const SnippetLayout = ({ params }: { params: { slug: string } }) => {
  // Find the post for the current slug.
  const snippet = allSnippets.find(
    (snippet) => snippet.slugAsParams === params.slug,
  )

  // 404 if the snippet does not exist.
  if (!snippet) notFound()

  // Parse the MDX file via the useMDXComponent hook.
  const Content = useMDXComponent(snippet.body.code)

  //TODO: change "/data/_posts" to "/content/posts"
  const github = `${env.NEXT_PUBLIC_GITHUB_REPO}/blob/master/data/_snippets/${snippet.slugAsParams}.mdx`

  return (
    <>
      <article className="mx-auto my-6 max-w-3xl md:my-10">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <h2 className="order-2 my-3 text-2xl font-black leading-tight tracking-tighter md:order-1 md:my-0 md:text-4xl md:leading-none lg:text-5xl">
            {snippet.title}
          </h2>
          <div className="border-1 my-3 h-16 w-16 flex-none rounded-full bg-gray-300 dark:bg-gray-700 md:order-2 md:ml-4">
            <span className="grid h-full w-full place-items-center text-4xl text-gray-700 dark:text-gray-300">
              {icons[snippet.icon as keyof IconType]}
            </span>
          </div>
        </div>

        <p className="mb-4 text-xl text-gray-500">{snippet.summary}</p>

        <div className="mb-8 flex space-x-2 text-xs">
          <p className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
            Date: {format(new Date(snippet.date), 'yyyy-MM-dd')}
          </p>
          <p className="hidden rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700 md:block">
            Words: {snippet.stats.words}
          </p>
          <p className="hidden rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700 md:block">
            Time: {snippet.stats.text}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg mb-8 max-w-none break-words dark:prose-invert prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-500 dark:prose-a:text-blue-300 dark:hover:prose-a:text-blue-500">
            <Content components={{ ...MDXComponents }} />
            <Sharable slug={snippet.slug} title={snippet.title} />
          </div>
          <GitHubLink path={github} />
        </div>
      </article>
      <SendPageView slug={snippet.slugAsParams} />
    </>
  )
}

export default SnippetLayout