import { z } from "zod";

export const UserSherma = z.object({
  idUser: z.number().optional(),
  username: z.string(),
  password: z.string()
    .min(6, { message: 'A senha precisa ter no minimo 6 caracteres' })
    .refine((value) => /[A-Z]/.test(value), {
      message: "A senha deve conter pelo menos uma letra maiúscula",
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "A senha deve conter pelo menos um caractere especial",
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "A senha deve conter pelo menos uma letra minuscula",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "A senha deve conter pelo menos um número",
    })
})

export type User = z.infer<typeof UserSherma>;