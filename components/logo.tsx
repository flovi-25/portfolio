import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
      <div className="flex flex-col">
        <span className="font-playfair text-xl text-[#6614b8]/60 font-semibold text-foreground">Florence Viprey</span>
        <span className="font-playfair text-sm text-[#6614b8]/40 font-medium">Chef de projet R&D et Pâtissière</span>
      </div>
    </Link>
  )
}
