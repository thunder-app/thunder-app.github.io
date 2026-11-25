import { DocumentPage } from "@/components/custom/document-page"
import termsOfUse from "@/markdown/terms_of_use.md?raw"

export default function TermsOfUse() {
  return <DocumentPage source={termsOfUse} />
}
