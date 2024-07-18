import z from "zod"; 

export const signupSchema = z.object({
    name: z.string().min(3, "O nome precisa ter no mínimo 3 caracteres").transform((name) => {
            return name
                .trim().split(" ").map((word) => {
                    return word[0].toLocaleUpperCase().concat(word.substring(1));
                }).join(" ");
        }),
    email: z.string().email("E-mail inválido").nonempty("O e-mail é obrigatório").toLowerCase(),

    password: z.string().min(6, "A senha precisa ter no mínimo 6 dígitos"),

    confirmPassword: z.string().min(6, "A senha precisa ter no mínimo 6 dígitos"), 
})
.refine((data) => data.password ===data.confirmPassword, {
    message: "As senhas não correspondem", path: ["confirmPassword"],
});