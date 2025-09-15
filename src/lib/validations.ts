import { z } from "zod"

export const checkoutFormSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email address"),
	name: z.string().min(1, "Name is required"),
	quantity: z.number().min(1, "Quantity must be at least 1"),
	marketingConsent: z.boolean(),
})

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>