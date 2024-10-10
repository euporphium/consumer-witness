import path from "path";
import Image from "next/image";
import { allTemplates } from "@/config";

export default function TemplateDirectory({
  title,
  subdirectory = "",
}: {
  title: string;
  subdirectory?: string;
}) {
  function getRelativeImagePath(filename: string) {
    const filepath = path.posix.join("snaps", subdirectory, `${filename}.png`);
    return "/" + filepath;
  }

  function getRelativeTemplatePath(filename: string) {
    const filepath = path.posix.join(subdirectory, "templates", filename);
    return "/" + filepath;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl">{title}</h1>

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
                      src={getRelativeImagePath(template.filename)}
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
                        href={getRelativeTemplatePath(template.filename)}
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
