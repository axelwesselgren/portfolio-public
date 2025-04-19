import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link";

export function ContactInfo() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">Stockholm, Sweden</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Email</p>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                axel.wesselgren@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Connect with me</h3>
          <Link
            href="https://github.com/axelwesselgren"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/axel-l%C3%B6nnby-wesselgren-4486661b9/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>

          <div className="pt-4">
            <Button variant="outline" className="w-full" asChild>
              <a href="/static/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}