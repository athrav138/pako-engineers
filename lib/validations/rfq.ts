import { z } from "zod";

export const PRODUCT_OPTIONS = [
  "Shaft",
  "Sleeve",
  "Coupling",
  "Pump Parts & Accessories",
  "Lock Nut",
  "Retainer Ring / Thordon Bearing",
  "Gears",
  "Other / Custom Component",
] as const;

export const rfqSchema = z.object({
  companyName: z.string().min(2, "Enter your company name."),
  country: z.string().min(2, "Enter your country."),
  industry: z.string().optional(),
  contactName: z.string().min(2, "Enter your full name."),
  designation: z.string().optional(),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(8, "Enter a valid phone number."),
  product: z.string().min(2, "Enter the product component."),
  material: z.string().min(2, "Enter the material grade."),
  quantity: z.string().min(1, "Enter the order quantity."),
  requiredDate: z.string().optional(),
  message: z.string().optional(),
});

export type RfqFormValues = z.infer<typeof rfqSchema>;
