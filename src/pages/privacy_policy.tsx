import { DocumentPage } from "@/components/custom/document-page"
import privacyPolicy from "@/markdown/privacy_policy.md?raw"

export default function PrivacyPolicy() {
  return <DocumentPage source={privacyPolicy} />
}
