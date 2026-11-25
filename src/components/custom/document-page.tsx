import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export function DocumentPage({ source }: { source: string }) {
  const headingEnd = source.indexOf("\n")
  const title = source.slice(0, headingEnd).replace(/^## /, "")
  const body = source.slice(headingEnd + 1)

  return (
    <article className="site-width inner-page document-page">
      <header className="page-intro">
        <h1>{title}</h1>
      </header>
      <div className="document-body">
        <ReactMarkdown
          components={{ h3: "h2", h4: "h3" }}
          remarkPlugins={[remarkGfm]}
        >
          {body}
        </ReactMarkdown>
      </div>
    </article>
  )
}
