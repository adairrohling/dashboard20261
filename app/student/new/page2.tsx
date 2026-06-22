
"use client"
export default function NewStudent() {
    async function sendUniversity() {
        const nomeInput = document.getElementById("nome") as HTMLInputElement;
        const abreviaturaInput = document.getElementById("abreviatura") as HTMLInputElement;

        const univesity = {
            name: nomeInput.value,
            email: abreviaturaInput.value
        };

        console.log("Submitting:", univesity);

        try {
            await fetch("https://crudcrud.com/api/bb2777ad871c4f28a39d6087d6198bac/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(univesity),
            });
        } catch (error) {
            console.error("Error creating student:", error);
        }
    };

    return (
        <div>
            <h1>New Student</h1>

            {/* <label htmlFor="nome">Name:</label> */}
            <input placeholder="Digite o Nome da Universidade" id="nome" />
            <br />
            {/* <label htmlFor="email">Abreviatura:</label> */}
            <input placeholder="Digite a Abreviatua" id="abreviatura" required />
            <br />
            <button onClick={sendUniversity}>Salva Universidade</button>

        </div>
    );
}