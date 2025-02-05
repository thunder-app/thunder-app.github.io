import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import privacyPolicy from '@/markdown/privacy_policy.md?raw';
import { PageHeader } from '@/components/custom/page-header';

function PrivacyPolicy() {
  return (
    <PageHeader>
      <div className="container relative pb-8 max-w-screen-2xl items-center">
        <ReactMarkdown className="prose dark:prose-invert" remarkPlugins={[remarkGfm]}>{privacyPolicy}</ReactMarkdown>
      </div>
    </PageHeader>
  )
}

export default PrivacyPolicy;