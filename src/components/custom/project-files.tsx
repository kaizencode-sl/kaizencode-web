import {
  Files,
  FolderItem,
  FolderTrigger,
  FolderPanel,
  FileItem,
  SubFiles,
} from "@/components/animate-ui/components/base/files"
import { ExternalLink } from "lucide-react"
import { ui, defaultLang, type Lang } from "@/i18n/ui"

interface ProjectLink {
  label: string
  href: string
}

interface ProjectCategory {
  label: string
  links: ProjectLink[]
}

interface ProjectFilesProps {
  lang?: Lang
  categories: ProjectCategory[]
}

export function ProjectFiles({ lang = defaultLang, categories }: ProjectFilesProps) {
  const t = (key: keyof (typeof ui)[typeof defaultLang]) =>
    ui[lang]?.[key] ?? ui[defaultLang][key]

  return (
    <Files className="w-full" defaultOpen={["projects"]}>
      <FolderItem value="projects">
        <FolderTrigger>{t("folder.projects")}</FolderTrigger>
        <FolderPanel>
          <SubFiles defaultOpen={categories.map((_, i) => String(i))}>
            {categories.map((category, i) => (
              <FolderItem key={category.label} value={String(i)}>
                <FolderTrigger>{category.label}</FolderTrigger>
                <FolderPanel>
                  <SubFiles>
                    {category.links.map((link) => (
                      <FileItem key={link.href} className="group">
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto flex items-center gap-1.5 no-underline transition-colors hover:text-foreground"
                        >
                          {link.label}
                          <ExternalLink className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      </FileItem>
                    ))}
                  </SubFiles>
                </FolderPanel>
              </FolderItem>
            ))}
          </SubFiles>
        </FolderPanel>
      </FolderItem>
    </Files>
  )
}
