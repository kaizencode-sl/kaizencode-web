"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/animate/avatar-group"
import { cn } from "@/lib/utils"

type Member = {
  name: string
  src: string
}

interface AboutSectionProps {
  label: string
  title: string
  description: string
  members: Member[]
  className?: string
}

export function AboutSection({
  label,
  title,
  description,
  members,
  className,
}: AboutSectionProps) {
  return (
    <section className={cn("flex flex-col gap-8", className)}>
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {label}
        </span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
        <AvatarGroup>
          {members.map((member) => (
            <Avatar key={member.name} size="lg">
              <AvatarImage src={member.src} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
              <AvatarGroupTooltip>
                <p>{member.name}</p>
              </AvatarGroupTooltip>
            </Avatar>
          ))}
        </AvatarGroup>
      </div>
    </section>
  )
}
