import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import termsOfUse from '@/markdown/terms_of_use.md?raw';
import { PageHeader } from '@/components/custom/page-header';

function TermsOfUse() {
  return (
    <PageHeader>
      <div className="container relative pb-8 max-w-(--breakpoint-2xl) items-center">
        <div className="prose dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{termsOfUse}</ReactMarkdown>
        </div>
      </div>
    </PageHeader>
  )
}

export default TermsOfUse;