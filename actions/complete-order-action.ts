"use server";

import { prisma } from "@/src/lib/prisma";
import { OrderIdSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function completeOrder(formData: FormData) {
  const data = { orderId: formData.get("order_id") };
  const result = OrderIdSchema.safeParse(data);
  if (result.success) {
    try {
      await prisma.order.update({
        where: {
          id: result.data.orderId, // Replace with the actual order ID you want to complete
        },
        data: {
          status: true, // Assuming 'status' is a field in your Order model
          orderReadyAt: new Date(Date.now()), // Set the current date and time as the order ready time
        },
      });
      revalidatePath("/admin/orders"); // Revalidate the orders page to reflect the changes
    } catch (error) {
      console.error("Error creating order:", error);
      return { errors: [{ message: "Error creating order" }] };
    }
  }
}
