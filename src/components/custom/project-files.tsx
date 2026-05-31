import {
  Files,
  FolderItem,
  FolderTrigger,
  FolderPanel,
  FileItem,
  SubFiles,
} from "@/components/animate-ui/components/base/files"
import { ExternalLink } from "lucide-react"

interface ProjectLink {
  label: string
  href: string
}

interface ProjectCategory {
  label: string
  links: ProjectLink[]
}

interface ProjectFilesProps {
  categories: ProjectCategory[]
}

export function ProjectFiles({ categories }: ProjectFilesProps) {
  return (
    <Files className="w-full" defaultOpen={["projects"]}>
      <FolderItem value="projects">
        <FolderTrigger>projects</FolderTrigger>
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
