"use client"

import { useFormStatus } from "react-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FormSubmitProps {
 children: React.ReactNode;
 disabled?: boolean;
 className?: string;
}

export const FormSubmit = ({
 children,
 disabled,
 className
}: FormSubmitProps) => {
 const { pending } = useFormStatus()

 return (
  <Button
   type="submit"
   variant="default"
   size="sm"
   disabled={pending || disabled}
   className={cn(className)}
  >
   {children}
  </Button>
 )
}