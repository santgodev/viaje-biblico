import { Quiz } from "@/components/quiz"

export default function QuizPage() {
    return (
        <div className="container py-12 md:py-20 flex flex-col items-center justify-center min-h-[80vh]">
            <div className="text-center mb-10 space-y-4">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Desafío Bíblico</h1>
                <p className="text-muted-foreground max-w-lg mx-auto">Pon a prueba tu conocimiento sobre la estructura y organización de la Biblia.</p>
            </div>
            <Quiz />
        </div>
    )
}
