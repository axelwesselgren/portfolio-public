import Link from "next/link";

export function NavLogo() {
  return (
    <div className="flex-1">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <div className="font-serif text-xl tracking-tight whitespace-nowrap">
            Axel <span className="font-light">Lönnby</span> Wesselgren
          </div>
        </div>
      </Link>
    </div>
  );
}