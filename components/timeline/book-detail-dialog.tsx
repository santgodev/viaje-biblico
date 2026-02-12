"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Book } from "@/lib/bible-data";
import { Calendar, User, BookOpen, Lightbulb } from "lucide-react";

interface BookDetailDialogProps {
    book: Book | null;
    isOpen: boolean;
    onClose: () => void;
    themeColor: string;
}

export function BookDetailDialog({ book, isOpen, onClose, themeColor }: BookDetailDialogProps) {
    if (!book) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] p-0 gap-0 overflow-hidden border-none bg-background/95 backdrop-blur-md shadow-2xl">

                {/* Header with dynamic color gradient */}
                <div className={`relative h-48 w-full bg-gradient-to-br from-${themeColor}-500/20 via-${themeColor}-500/10 to-background p-6 flex flex-col justify-end`}>
                    <div className={`absolute top-0 right-0 p-32 opacity-10 bg-${themeColor}-500 blur-3xl rounded-full translate-x-12 -translate-y-12 pointer-events-none`} />

                    <Badge variant="outline" className={`w-fit mb-2 bg-background/50 border-${themeColor}-500/30 text-${themeColor}-700 dark:text-${themeColor}-300 backdrop-blur-sm`}>
                        {book.testament === "Old" ? "Antiguo Testamento" : "Nuevo Testamento"}
                    </Badge>

                    <DialogTitle className={`text-4xl md:text-5xl font-black tracking-tight text-${themeColor}-900 dark:text-${themeColor}-100 z-10`}>
                        {book.name}
                    </DialogTitle>

                    <DialogDescription className={`text-${themeColor}-800/80 dark:text-${themeColor}-200/70 text-lg font-medium mt-1 uppercase tracking-wider`}>
                        {book.stage}
                    </DialogDescription>
                </div>

                <ScrollArea className="max-h-[calc(90vh-12rem)] p-6 md:p-8">
                    <div className="space-y-8">
                        {/* Main Theme */}
                        <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                            <div className="flex items-center gap-3 mb-3 text-primary">
                                <BookOpen className="w-5 h-5" />
                                <h3 className="font-bold text-lg uppercase tracking-wide">Tema Principal</h3>
                            </div>
                            <p className="text-xl md:text-2xl font-serif text-foreground/90 leading-relaxed italic">
                                "{book.theme}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Author & Period */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-secondary text-secondary-foreground">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">Autor</h4>
                                        <p className="font-semibold text-lg">{book.author}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-secondary text-secondary-foreground">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">Periodo</h4>
                                        <p className="font-semibold text-lg">{book.period}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Fun Fact / Key Insight */}
                            <div className="bg-card border rounded-xl p-5 shadow-sm">
                                <div className="flex items-center gap-2 mb-3 text-yellow-600 dark:text-yellow-400">
                                    <Lightbulb className="w-5 h-5" />
                                    <h4 className="font-bold uppercase text-xs tracking-wider">Dato Clave</h4>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {book.fact}
                                </p>
                            </div>
                        </div>

                        <Separator />

                        {/* Placeholder for future content: Chapters, Key Verses, Resources */}
                        <div className="text-center py-8 opacity-50">
                            <p className="text-sm text-muted-foreground">Más detalles, versículos clave y recursos multimedia próximamente...</p>
                        </div>
                    </div>
                </ScrollArea>

            </DialogContent>
        </Dialog>
    );
}
