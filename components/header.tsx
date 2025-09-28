"use client";

import { LanguageSelector } from "@/components/language-selector";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/hooks/use-language";
import { FileText, Instagram, Linkedin, Mail, Menu } from "lucide-react";

export function Header() {
	const { t } = useLanguage();

	return (
		<header className="w-full bg-gradient-to-br from-pink-50 to-purple-50 px-4 py-3 sm:px-6 sm:py-4">
			<div className="relative mx-auto mt-3 mb-25 flex max-w-7xl items-center justify-center sm:mb-15">
				<div className="absolute left-0 z-50">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								size="sm"
								className="text-foreground border border-white/20 bg-white/80 shadow-sm backdrop-blur-sm"
							>
								<Menu className="h-4 w-4" />
								Menu
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start">
							<DropdownMenuItem asChild>
								<a
									href="/Florence VIPREY cv 2025.pdf"
									target="_blank"
									className="flex items-center gap-2"
									rel="noreferrer nofollow"
								>
									<FileText className="h-4 w-4" />
									{t("Mon CV")}
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<a
									href="http://www.linkedin.com/in/florence-viprey-ba490893"
									target="_blank"
									className="flex items-center gap-2"
									rel="noreferrer nofollow"
								>
									<Linkedin className="h-4 w-4" />
									LinkedIn
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<a
									href="https://www.instagram.com/florences_challenges/"
									target="_blank"
									className="flex items-center gap-2"
									rel="noreferrer nofollow"
								>
									<Instagram className="h-4 w-4" />
									Instagram
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<a
									href="mailto:viprey.florence@gmail.com"
									className="flex items-center gap-2"
									rel="noreferrer nofollow"
								>
									<Mail className="h-4 w-4" />
									Contact
								</a>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="center absolute z-50 mt-25 sm:mt-1">
					<Logo />
				</div>

				<div className="absolute right-0 z-50">
					<LanguageSelector />
				</div>
			</div>
		</header>
	);
}
