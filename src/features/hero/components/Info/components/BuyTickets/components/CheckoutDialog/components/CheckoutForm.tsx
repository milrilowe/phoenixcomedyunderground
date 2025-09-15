import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { checkoutFormSchema, type CheckoutFormData } from "@/lib/validations"

interface CheckoutFormProps {
	item: {
		name: string
		price: number
		quantityAvailable: number
	}
	onSubmit: (data: CheckoutFormData) => Promise<void>
	isSubmitting?: boolean
}

export function CheckoutForm({ item, onSubmit, isSubmitting = false }: CheckoutFormProps) {
	const form = useForm<CheckoutFormData>({
		// Remove zodResolver for now, use manual validation
		defaultValues: {
			email: "",
			name: "",
			quantity: 1,
			marketingConsent: false,
		},
		mode: "onChange",
	})

	const quantity = form.watch("quantity")
	const totalPrice = item.price * quantity

	const handleQuantityChange = (delta: number) => {
		const current = form.getValues("quantity")
		const newQuantity = Math.max(1, Math.min(item.quantityAvailable, current + delta))
		form.setValue("quantity", newQuantity, { shouldValidate: true })
	}

	const handleFormSubmit = async (data: CheckoutFormData) => {
		// Manual validation using Zod
		try {
			const validatedData = checkoutFormSchema.parse(data)
			await onSubmit(validatedData)
		} catch (error) {
			if (error instanceof Error) {
				console.error("Validation error:", error.message)
			}
		}
	}

	return (
		<div className="space-y-6">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
					{/* Quantity */}
					<FormField
						control={form.control}
						name="quantity"
						rules={{
							required: "Quantity is required",
							min: { value: 1, message: "Quantity must be at least 1" }
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Quantity</FormLabel>
								<FormControl>
									<div className="flex items-center space-x-3">
										<Button
											type="button"
											variant="outline"
											size="icon"
											onClick={() => handleQuantityChange(-1)}
											disabled={field.value <= 1}
										>
											-
										</Button>
										<div className="w-16 text-center">
											<span className="text-lg font-medium">{field.value}</span>
										</div>
										<Button
											type="button"
											variant="outline"
											size="icon"
											onClick={() => handleQuantityChange(1)}
											disabled={field.value >= item.quantityAvailable}
										>
											+
										</Button>
									</div>
								</FormControl>
								{field.value >= item.quantityAvailable && (
									<FormDescription className="text-red-600">
										Only {item.quantityAvailable} tickets available
									</FormDescription>
								)}
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Total */}
					<div className="bg-gray-50 p-4 rounded-lg">
						<div className="flex justify-between items-center">
							<span className="font-medium">Total:</span>
							<span className="text-xl font-bold">
								${totalPrice.toFixed(2)}
							</span>
						</div>
					</div>

					{/* Email */}
					<FormField
						control={form.control}
						name="email"
						rules={{
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address"
							}
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="john@example.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Name */}
					<FormField
						control={form.control}
						name="name"
						rules={{ required: "Name is required" }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="John Doe"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Marketing Consent */}
					<FormField
						control={form.control}
						name="marketingConsent"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>
										Subscribe to marketing emails
									</FormLabel>
									<FormDescription>
										Get notified about future comedy shows and special offers.
									</FormDescription>
								</div>
							</FormItem>
						)}
					/>

					{/* Payment Section */}
					<div className="border-t pt-4 space-y-3">
						<FormLabel className="text-base font-medium">
							Payment Information
						</FormLabel>
						<div
							id="card-container"
							className="min-h-[120px] p-4 border rounded-md bg-white"
						>
							{/* Square payment form will be injected here */}
						</div>
						<p className="text-sm text-gray-600">
							🔒 Powered by Square • Your payment info is secure and encrypted
						</p>
					</div>

					{/* Seating Policy */}
					<div className="text-sm text-gray-700 bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
						<div className="font-medium">Seating Policy:</div>
						<div className="mt-1">
							First come, first served. Ticket holders arriving more than 10 minutes
							after showtime may lose their reserved seat to standby customers.
						</div>
					</div>

					{/* Submit Button */}
					<Button
						type="submit"
						className="w-full"
						disabled={isSubmitting}
						size="lg"
					>
						{isSubmitting
							? "Processing..."
							: `Buy ${quantity} Ticket${quantity > 1 ? 's' : ''} - ${totalPrice.toFixed(2)}`
						}
					</Button>
				</form>
			</Form>
		</div>
	)
}