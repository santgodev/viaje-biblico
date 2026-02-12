"use client"

import Link from "next/link"
import { BookOpen } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-lg">
                    <Link href="/" className="flex items-center space-x-2">
                        <BookOpen className="h-6 w-6 text-primary" />
                        <span className="hidden sm:inline-block">Biblical Journey</span>
                    </Link>
                </div>
                <nav className="flex items-center gap-4 text-sm font-medium">
                    <Link href="/quiz" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Quiz
                    </Link>
                    <Link href="/review" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Repaso
                    </Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}
