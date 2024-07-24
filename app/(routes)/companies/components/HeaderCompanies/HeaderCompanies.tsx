"use client";

import { useState } from "react";
import { CirclePlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormCreateCustomer } from "../FormCreateCustomer";

export function HeaderCompanies() {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl">List of companies</h2>

      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button>Create company</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create Customer</DialogTitle>
            <DialogDescription>
              Create and configure a new customer.
            </DialogDescription>
          </DialogHeader>

          <FormCreateCustomer setOpenModalCreate={setOpenModalCreate} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
