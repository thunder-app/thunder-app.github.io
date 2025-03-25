import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import termsOfUse from '@/markdown/terms_of_use.md?raw';
import { PageHeader } from '@/components/custom/page-header';

function TermsOfUse() {
  return (
    <PageHeader>
      <div className="container relative pb-8 max-w-screen-2xl items-center">
        <ReactMarkdown className="prose dark:prose-invert" remarkPlugins={[remarkGfm]}>{termsOfUse}</ReactMarkdown>
      </div>
    </PageHeader>
  )
}

export default TermsOfUse;