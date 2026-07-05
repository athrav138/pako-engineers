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
  name: z.string().min(2, "Enter your full name."),
  company: z.string().min(2, "Enter your company name."),
  email: z.string().email("Enter a valid email address."),
  country: z.string().min(2, "Enter your country."),
  phone: z.string().optional(),
  productType: z.enum(PRODUCT_OPTIONS, {
    errorMap: () => ({ message: "Select a product type." }),
  }),
  material: z.string().optional(),
  quantity: z.string().optional(),
  message: z
    .string()
    .min(10, "Add a few details about your requirement (minimum 10 characters)."),
});

export type RfqFormValues = z.infer<typeof rfqSchema>;
