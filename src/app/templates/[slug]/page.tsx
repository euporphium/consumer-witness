import { allTemplates } from "@/config";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const templatesFlat = allTemplates.flatMap((t) => t.templates);
  const template = templatesFlat.find((t) => t.filename === params.slug);

  if (!template) {
    return notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl">{template.name}</h1>

      <section className="flex items-start justify-center">
        <Image
          src={`/snaps/${template.filename}-full.png`}
          alt={template.name}
          width={1280}
          height={720}
        />
      </section>
    </div>
  );
}

// export async function generateStaticParams() {
//   return allTemplates.flatMap((t) =>
//     t.templates.map((template) => ({ slug: template.filename })),
//   );
// }
