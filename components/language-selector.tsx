"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks/use-language";
import { Languages } from "lucide-react";

export function LanguageSelector() {
	const { language, setLanguage } = useLanguage();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					className="text-foreground border border-white/20 bg-white/80 shadow-sm backdrop-blur-sm"
				>
					<Languages className="mr-2 h-4 w-4" />
					<span className="text-sm font-medium">{language.toUpperCase()}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				side="bottom"
				className="mt-2 w-32 border border-white/20 bg-white/95 shadow-lg backdrop-blur-md"
				sideOffset={8}
			>
				<DropdownMenuItem
					onClick={() => setLanguage("fr")}
					className={language === "fr" ? "bg-accent/10" : ""}
				>
					<span className="text-sm">🇫🇷 FR</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setLanguage("en")}
					className={language === "en" ? "bg-accent/10" : ""}
				>
					<span className="text-sm">🇬🇧 EN</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
