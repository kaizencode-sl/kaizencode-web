import type { UiKey } from "@/i18n/ui"

export const cities = ["cuenca", "valencia", "malaga"] as const

export type City = (typeof cities)[number]

export const team = [
  {
    nameKey: "about.member.omar",
    roleKey: "about.role.omar",
    city: "cuenca",
    linkedin: "https://www.linkedin.com/in/omar-caja-garcia/",
    avatar: "https://avatars.githubusercontent.com/kaizen-omarcaja?size=160",
  },
  {
    nameKey: "about.member.misha",
    roleKey: "about.role.misha",
    city: "malaga",
    linkedin: "https://www.linkedin.com/in/mikhail-albershtein/",
    avatar: "https://avatars.githubusercontent.com/kaizen-misha?size=160",
  },
  {
    nameKey: "about.member.jose",
    roleKey: "about.role.jose",
    city: "valencia",
    linkedin:
      "https://www.linkedin.com/in/jose-mar%C3%ADa-mart%C3%ADnez-840165172/",
    avatar: "https://avatars.githubusercontent.com/kaizen-josemaria?size=160",
  },
] as const satisfies readonly {
  nameKey: UiKey
  roleKey: UiKey
  city: City
  linkedin: string
  avatar: string
}[]

// City landings only exist in Spanish, so every language links to them
export function cityPath(city: City) {
  return `/desarrollo-software-${city}/`
}
