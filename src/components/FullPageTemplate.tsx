import Image from "next/image";
import path from "path";
import { cn } from "@/utils/cn";

export default function FullPageTemplate({
  template,
  subdirectory = "",
}: {
  template: {
    name: string;
    filename: string;
  };
  subdirectory?: string;
}) {
  function getRelativeImagePath(filename: string) {
    const filepath = path.posix.join(
      "snaps",
      subdirectory,
      `${filename}-full.png`,
    );
    return "/" + filepath;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl">{template.name}</h1>

      <section className="flex items-start justify-center">
        <Image
          className={cn({ "max-w-[375px]": subdirectory === "mobile" })}
          src={getRelativeImagePath(template.filename)}
          alt={template.name}
          width={1280}
          height={720}
        />
      </section>
    </div>
  );
}
