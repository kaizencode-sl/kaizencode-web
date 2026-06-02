"use client"

import { Button } from "@/components/ui/button"
import { easeOut, motion } from "motion/react"
import * as React from "react"
import { ExternalLink, Globe, AtSign } from "lucide-react"

export interface FlipCardData {
  name: string
  username: string
  image: string
  bio: string
  stats: {
    following: number
    followers: number
    posts?: number
  }
  socialLinks?: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

interface FlipCardProps {
  data: FlipCardData
}

export function FlipCard({ data }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false)

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped)
  }

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true)
  }

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false)
  }

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  }

  return (
    <div
      className="perspective-1000 relative mx-auto mt-2 h-60 w-40 cursor-pointer md:h-80 md:w-60"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* FRONT: Profile */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center rounded-md border-2 border-foreground/20 bg-gradient-to-br from-muted via-background to-muted px-4 py-6 text-center backface-hidden"
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={data.image}
          alt={data.name}
          className="mb-4 size-20 rounded-full border-2 object-cover md:size-24"
        />
        <h2 className="text-lg font-bold text-foreground">{data.name}</h2>
        <p className="text-sm text-muted-foreground">@{data.username}</p>
      </motion.div>

      {/* BACK: Bio + Stats + Socials */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-between gap-y-4 rounded-md border-2 border-foreground/20 bg-gradient-to-tr from-muted via-background to-muted px-4 py-6 backface-hidden"
        initial={{ rotateY: 180 }}
        animate={isFlipped ? "front" : "back"}
        variants={cardVariants}
        style={{ transformStyle: "preserve-3d", rotateY: 180 }}
      >
        <p className="text-center text-xs text-muted-foreground md:text-sm">
          {data.bio}
        </p>

        <div className="flex w-full items-center justify-between px-6">
          <div>
            <p className="text-base font-bold">{data.stats.following}</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
          <div>
            <p className="text-base font-bold">{data.stats.followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          {data.stats.posts && (
            <div>
              <p className="text-base font-bold">{data.stats.posts}</p>
              <p className="text-xs text-muted-foreground">Posts</p>
            </div>
          )}
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4">
          {data.socialLinks?.linkedin && (
            <a
              href={data.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Globe size={20} />
            </a>
          )}
          {data.socialLinks?.github && (
            <a
              href={data.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {data.socialLinks?.twitter && (
            <a
              href={data.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <AtSign size={20} />
            </a>
          )}
        </div>

        <Button>Follow</Button>
      </motion.div>
    </div>
  )
}
