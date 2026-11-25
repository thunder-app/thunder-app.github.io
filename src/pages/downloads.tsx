import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import introduction from '@/markdown/introduction.md?raw';
import { PageHeader } from '@/components/custom/page-header';

function Downloads() {
  return (
    <PageHeader>
      <div className="container relative pb-8 max-w-(--breakpoint-2xl) items-center">
        <div className="prose dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{introduction}</ReactMarkdown>
        </div>
      </div>
    </PageHeader>
  )
}

export default Downloads;