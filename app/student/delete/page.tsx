"use client";


import { useSearchParams, useRouter } from "next/navigation";

export default function DeleteUniversity() {
    const id = useSearchParams().get("id");
    const router = useRouter();

        async function handleDelete() {
            console.log("Universidade deletada");
            try {
                const responde = await fetch(`https://crudcrud.com/api/bb2777ad871c4f28a39d6087d6198bac/student/${id}`, {
                    method: "DELETE",
                })
                router.push("/student");
            } catch (error) {
                console.error("Erro ao deletar a universidade:", error);
            }
        }
        return (
            <div className="flex flex-col items-center justify-center min-h-[150px] gap-4 bg-card rounded-md shadow p-4 mx-auto max-w-sm">
                <h1 className="text-lg font-semibold text-destructive">Deletar Universidade?</h1>
                <p className="text-sm text-muted-foreground text-center">Tem certeza que deseja deletar? Esta ação não pode ser desfeita.</p>
                <button  onClick={handleDelete}>
                    Deletar
                </button>
            </div>
        );
    }