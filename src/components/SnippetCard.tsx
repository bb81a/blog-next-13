import Link from 'next/link'
import type { Snippet } from 'contentlayer/generated'

import { IconKey, Icons } from '@/components/Icons'

export const SnippetCard = (props: Snippet) => {
  const Icon = Icons[props.icon as IconKey]

  return (
    <div className="grid w-full grid-rows-[auto_1fr_auto] space-y-3 rounded bg-card p-5 text-card-foreground shadow-md">
      <div className="flex items-center justify-between">
        <div className="w-3/4">
          <Link href={`/snippets/${props.slugAsParams}`}>
            <h1 className="truncate text-xl font-bold md:text-2xl">
              {props.title}
            </h1>
          </Link>
        </div>
        <div className="border-1 bg-accent2 text-accent-foreground2 my-3 h-12 w-12 flex-none rounded-full md:order-2 md:my-0">
          <span className="grid h-full w-full place-items-center text-3xl">
            {Icon ? <Icon className="h-6 w-6" /> : null}
          </span>
        </div>
      </div>

      <p className="text-slate">{props.summary}</p>

      <div className="flex space-x-2 text-xs">
        {props.tags
          ? props.tags.map((tag) => (
              <span
                className="bg-accent2 text-accent-foreground2 rounded-full px-2 py-1"
                key={tag}
              >
                #{tag}
              </span>
            ))
          : null}
      </div>
    </div>
  )
}
