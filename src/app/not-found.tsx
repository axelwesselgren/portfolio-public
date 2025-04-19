import Link from 'next/link'
import { Home } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex max-w-md flex-col items-center justify-center gap-6 px-4 py-16 text-center md:py-24">
        <div className="relative h-40 w-40">
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-muted/50">
            <span className="text-9xl font-bold text-muted-foreground/50">?</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Page not found</h1>
          <p className="text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.
          </p>
        </div>
        
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href="/" className={buttonVariants()}>
            <Home className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
