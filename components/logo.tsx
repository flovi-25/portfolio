import Link from "next/link";

export function Logo() {
	return (
		<Link
			href="/"
			className="flex items-center space-x-2 transition-opacity hover:opacity-80"
		>
			<div className="flex flex-col items-center">
				<span className="font-playfair text-foreground text-xl font-semibold">
					Florence Viprey
				</span>
				<span className="font-playfair text-sm font-medium text-[#6614b8]/40">
					Chef de projet R&D et Pâtissière
				</span>
			</div>
		</Link>
	);
}
