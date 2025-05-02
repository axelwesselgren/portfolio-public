import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Axel Lönnby Wesselgren",
    short_name: "Axel Lönnby Wesselgren",
    description: "Personal portfolio and projects by Axel Lönnby Wesselgren.",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#ffffff",
    start_url: "/",
    display: "standalone",
  };
}
