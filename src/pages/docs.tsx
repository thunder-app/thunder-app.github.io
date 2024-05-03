import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import introduction from '@/markdown/introduction.md?raw';
import { PageHeader } from '@/components/custom/page-header';

function Docs() {
  return (
    <PageHeader>
      <div className="container relative pb-8 max-w-screen-2xl items-center">
        <ReactMarkdown className="prose dark:prose-invert" remarkPlugins={[remarkGfm]}>{introduction}</ReactMarkdown>
      </div>
    </PageHeader>
  )
}

export default Docs;