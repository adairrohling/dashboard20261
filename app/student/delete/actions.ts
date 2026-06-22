"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleDelete(formData: FormData) {
    const id = formData.get("id") as string;
    
    try {
        const response = await fetch(`https://crudcrud.com/api/bb2777ad871c4f28a39d6087d6198bac/student/${id}`, {
            method: "DELETE",
        })
        
        if (!response.ok) {
            throw new Error("Erro ao deletar");
        }
        
        revalidatePath("/student");
        redirect("/student");
    } catch (error) {
        console.error("Erro ao deletar a universidade:", error);
        throw error;
    }
}
