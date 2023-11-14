"use client"

import Image from "next/image"
import { toast } from "sonner"
import { useProModal } from "@/hooks/use-pro-modal"
import { useAction } from "@/hooks/use-action"
import { stripeRedirect } from "@/actions/stripe-redirect"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const listItems = [
 "Unilimited boards",
 "Advanced checklists",
 "Admin and security features",
 "And more!"
]

export const ProModal = () => {
 const proModal = useProModal()

 const { execute, isLoading } = useAction(stripeRedirect, {
  onSuccess: (data: string) => {
   window.location.href = data
  },
  onError: (error) => {
   toast.error(error)
  }
 })

 const onClick = () => {
  execute({})
 }

 return (
  <Dialog
   open={proModal.isOpen}
   onOpenChange={proModal.onClose}
  >
   <DialogContent className="max-w-md p-0 overflow-hidden">
    <div className="aspect-video relative flex items-center justify-center">
     <Image
      src="/hero.svg"
      alt="Hero image"
      fill
      className="object-cover"
     />
    </div>
    <div className="text-neutral-700 mx-auto space-y-6 p-6">
     <h2 className="font-semibold text-xl">
      Upgrade to dueshit Pro today!
     </h2>
     <p className="text-xs font-semibold text-neutral-600">
      Explore the best of dueshit
     </p>
     <div className="pl-3">
      <ul className="text-sm list-disc">
       {listItems.map((item) => (
        <li key={item}>{item}</li>
       ))}
      </ul>
     </div>
     <Button
      disabled={isLoading}
      onClick={onClick}
      className="w-full"
     >
      Upgrade
     </Button>
    </div>
   </DialogContent>
  </Dialog>
 )
}