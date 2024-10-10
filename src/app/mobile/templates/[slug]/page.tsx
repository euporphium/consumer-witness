import { findTemplateBySlug } from "@/config";
import { notFound } from "next/navigation";
import FullPageTemplate from "@/components/FullPageTemplate";

export default function MobileTemplatesPage({
  params,
}: {
  params: { slug: string };
}) {
  const template = findTemplateBySlug(params.slug);

  if (!template) {
    return notFound();
  }

  return <FullPageTemplate template={template} subdirectory="mobile" />;
}
