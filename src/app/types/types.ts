import { formSchema } from "@/schema/schema";
import { z } from "zod";

export type FormValues = z.infer<typeof formSchema>;