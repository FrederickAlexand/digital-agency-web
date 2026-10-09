import type { Metadata } from "next";
import InventoryPrototype from "@/components/inventory/InventoryPrototype";

export const metadata: Metadata = { title: "Stockline · Inventory Prototype", description: "Prototype interaktif pengelolaan stok, pesanan ekspor, dokumen, dan pengiriman." };

export default function PrototypePage() {
  return <InventoryPrototype />;
}
