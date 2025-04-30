import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Axel Lönnby Wesselgren",
    short_name: "Axel Wesselgren",
    description: "Personal portfolio and projects by Axel Lönnby Wesselgren.",
    theme_color: "#ffffff",
    start_url: "/",
    display: "standalone",
  }
}