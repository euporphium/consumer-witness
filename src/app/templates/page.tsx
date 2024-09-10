import Image from "next/image";
import { allTemplates } from "@/config";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl">Consumer Templates</h1>

      <ul className="flex flex-col gap-24">
        {allTemplates.map((templateSet) => (
          <li key={templateSet.name}>
            <section>
              <h2 className="mb-4 text-2xl">{templateSet.name}</h2>
              <ul className="flex flex-wrap justify-center gap-8">
                {templateSet.templates.map((template) => (
                  <li key={template.name}>
                    <h3>{template.name}</h3>
                    <Image
                      src={`/snaps/${template.filename}.png`}
                      alt={template.name}
                      width={1280}
                      height={720}
                      className="max-w-[400px]"
                    />
                    <div className="flex justify-between p-4">
                      <a
                        href={template.url}
                        className="rounded-lg bg-purple-800 px-2 py-1"
                      >
                        Visit Page
                      </a>
                      <a
                        href={`/templates/${template.filename}`}
                        className="rounded-lg bg-purple-800 px-2 py-1"
                      >
                        View Full Template
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
