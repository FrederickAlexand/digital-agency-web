"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Boxes, FileText, Package, Plus, Search, ShoppingCart, Truck, RotateCcw, Download } from "lucide-react";

type Product = { id: string; name: string; category: string; stock: number; price: number };
type Status = "Pending" | "In transit" | "Delivered";
type Order = { id: string; customer: string; destination: string; productId: string; quantity: number; status: Status };
type Tab = "Dashboard" | "Inventory" | "Export Orders" | "Documents" | "Shipments";
const products: Product[] = [
  { id: "SKU-001", name: "Arabica Coffee Beans", category: "Food & Beverage", stock: 1250, price: 12 },
  { id: "SKU-002", name: "Rattan Lounge Chair", category: "Furniture", stock: 84, price: 145 },
  { id: "SKU-003", name: "Organic Coconut Sugar", category: "Food & Beverage", stock: 680, price: 8 },
  { id: "SKU-004", name: "Linen Fabric Roll", category: "Textile", stock: 32, price: 65 },
  { id: "SKU-005", name: "Teak Dining Table", category: "Furniture", stock: 18, price: 320 },
];
const initialOrders: Order[] = [
  { id: "EXP-1001", customer: "Northstar Trading", destination: "Singapore", productId: "SKU-001", quantity: 100, status: "Pending" },
  { id: "EXP-1002", customer: "Kanso Living", destination: "Japan", productId: "SKU-002", quantity: 12, status: "In transit" },
  { id: "EXP-1003", customer: "Green Market", destination: "Australia", productId: "SKU-003", quantity: 60, status: "Delivered" },
];
const navigation = [{ name: "Dashboard", icon: BarChart3 }, { name: "Inventory", icon: Boxes }, { name: "Export Orders", icon: ShoppingCart }, { name: "Documents", icon: FileText }, { name: "Shipments", icon: Truck }] as const;
const money = (amount: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
const button = "inline-flex items-center justify-center gap-2 rounded-lg bg-cta-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-navy disabled:opacity-40";
const field = "mt-2 w-full rounded-lg border border-slate-border bg-white px-3 py-2.5 text-sm outline-none focus:border-cta-blue focus:ring-2 focus:ring-cta-blue/10";

function Badge({ status }: { status: Status }) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${status === "Delivered" ? "bg-emerald-50 text-emerald-700" : status === "In transit" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"}`}>{status}</span>;
}

export default function InventoryPrototype() {
  const [tab, setTab] = useState<Tab>("Dashboard");
  const [orders, setOrders] = useState(initialOrders);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [creating, setCreating] = useState(false);
  const [productId, setProductId] = useState(products[0].id);
  const [quantity, setQuantity] = useState("1");
  const [customer, setCustomer] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedId, setSelectedId] = useState(initialOrders[0].id);
  const [documentType, setDocumentType] = useState("Commercial Invoice");
  const [notice, setNotice] = useState("");
  const selectedOrder = orders.find(order => order.id === selectedId) ?? orders[0];
  const selectedProduct = products.find(product => product.id === selectedOrder.productId)!;
  const reserved = (id: string) => orders.filter(order => order.productId === id).reduce((sum, order) => sum + order.quantity, 0);
  const available = (id: string) => products.find(product => product.id === id)!.stock - reserved(id);
  const count = Number(quantity);
  const validQuantity = Number.isInteger(count) && count > 0 && count <= available(productId);
  const filteredProducts = products.filter(product => `${product.name} ${product.id}`.toLowerCase().includes(query.toLowerCase()) && (category === "All categories" || product.category === category));

  function openOrder(id = products[0].id) {
    setProductId(id); setQuantity("1"); setCustomer(""); setDestination(""); setCreating(true); setTab("Export Orders"); setNotice("");
  }
  function createOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validQuantity || !customer.trim() || !destination.trim()) return;
    const order: Order = { id: `EXP-${1001 + orders.length}`, customer: customer.trim(), destination: destination.trim(), productId, quantity: count, status: "Pending" };
    setOrders([...orders, order]); setSelectedId(order.id); setCreating(false); setNotice(`Pesanan ${order.id} dibuat. Stok telah dialokasikan.`);
  }
  function downloadDocument() {
    const content = `${documentType}\nStockline — Demo document\nOrder: ${selectedOrder.id}\nCustomer: ${selectedOrder.customer}\nDestination: ${selectedOrder.destination}\nProduct: ${selectedProduct.name}\nQuantity: ${selectedOrder.quantity}\nUnit price: ${money(selectedProduct.price)}\nTotal: ${money(selectedProduct.price * selectedOrder.quantity)}\nStatus: ${selectedOrder.status}\n`;
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = `${selectedOrder.id}-${documentType.toLowerCase().replaceAll(" ", "-")}.txt`; anchor.click(); URL.revokeObjectURL(url);
    setNotice("Dokumen demo berhasil diunduh sebagai TXT.");
  }

  return (
    <div lang="id" className="bg-slate-100 px-3 pt-28 pb-12 md:px-6">
      <div className="mx-auto mb-5 flex max-w-[1400px] flex-wrap items-center justify-between gap-3 text-sm"><Link href="/portfolio/inventory-management-dashboard" className="text-slate-muted hover:text-navy">← Kembali ke case study</Link><span className="rounded-full border border-slate-border bg-white px-3 py-1 text-xs text-slate-muted">Interactive prototype · Data contoh · Reset saat reload</span></div>
      <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-2xl border border-slate-border bg-white shadow-sm lg:min-h-[780px] lg:grid-cols-[230px_1fr]">
        <aside className="border-b border-slate-border bg-slate-50 p-5 lg:border-r lg:border-b-0">
          <div className="mb-8 flex items-center gap-3"><span className="rounded-xl bg-cta-blue p-2.5 text-white"><Boxes size={24} /></span><div><p className="text-xl font-bold tracking-tight">stockline<span className="text-cta-gold">.</span></p><p className="text-xs text-slate-muted">Import & export workspace</p></div></div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-muted">Workspace</p>
          <nav aria-label="Navigasi prototype" className="flex flex-wrap gap-2 lg:flex-col">{navigation.map(({ name, icon: Icon }) => <button key={name} type="button" onClick={() => { setTab(name); setCreating(false); }} aria-current={tab === name ? "page" : undefined} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors ${tab === name ? "bg-cta-blue text-white" : "text-slate-muted hover:bg-slate-200"}`}><Icon size={18} />{name}</button>)}</nav>
          <div className="mt-8 rounded-xl border border-slate-border bg-white p-4"><p className="text-sm font-semibold">Your export, simplified.</p><p className="mt-2 text-xs leading-relaxed text-slate-muted">Kelola barang sampai pengiriman dalam satu alur.</p></div>
        </aside>
        <div className="min-w-0">
          <header className="flex items-center justify-between border-b border-slate-border px-5 py-4 md:px-8"><p className="text-sm text-slate-muted">Workspace <span className="mx-2">/</span><span className="font-medium text-navy">{tab}</span></p><div className="flex items-center gap-3"><span className="hidden text-xs text-slate-muted sm:block">Demo workspace</span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold">AD</span></div></header>
          <div className="p-5 md:p-8">
            <div className="mb-8 flex flex-wrap items-start justify-between gap-4"><div><p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-muted">Operations overview</p><h1 className="text-3xl font-semibold tracking-tight">{tab}</h1><p className="mt-2 text-sm text-slate-muted">{tab === "Dashboard" ? "Seluruh stok dan aktivitas ekspor, dalam satu tampilan." : tab === "Inventory" ? "Cari barang dan periksa stok tersedia sebelum membuat pesanan." : tab === "Documents" ? "Dokumen yang konsisten, langsung dari data pesanan." : tab === "Shipments" ? "Review pesanan dan perbarui progres pengiriman." : "Kelola pesanan dan alokasikan stok untuk pelanggan."}</p></div><button type="button" onClick={() => openOrder()} className={button}><Plus size={16} />Buat pesanan</button></div>
            {notice && <div role="status" className="mb-5 flex items-center justify-between gap-3 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Tutup pemberitahuan">×</button></div>}
            {tab === "Dashboard" && <>
              <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[
                { label: "Available stock", value: products.reduce((sum, product) => sum + available(product.id), 0).toLocaleString("en-US"), icon: Package, note: "Units ready for allocation" },
                { label: "Export orders", value: orders.length, icon: ShoppingCart, note: "All export transactions" },
                { label: "Pending shipments", value: orders.filter(order => order.status === "Pending").length, icon: Truck, note: "Awaiting review & dispatch" },
                { label: "Order value", value: money(orders.reduce((sum, order) => sum + products.find(product => product.id === order.productId)!.price * order.quantity, 0)), icon: BarChart3, note: "Total demo order value" },
              ].map(({ label, value, icon: Icon, note }) => <div key={label} className="rounded-xl border border-slate-border p-5"><div className="mb-5 flex items-center justify-between"><p className="text-xs font-medium text-slate-muted">{label}</p><Icon size={18} className="text-cta-blue" /></div><p className="text-2xl font-semibold">{value}</p><p className="mt-2 text-xs text-slate-muted">{note}</p></div>)}</div>
              <div className="mb-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]"><section className="rounded-xl border border-slate-border p-6"><h2 className="mb-6 font-semibold">Stock by category</h2><div className="space-y-6">{["Food & Beverage", "Furniture", "Textile"].map(cat => { const total = products.filter(product => product.category === cat).reduce((sum, product) => sum + available(product.id), 0); return <div key={cat}><div className="mb-2 flex justify-between text-sm"><span>{cat}</span><span className="text-slate-muted">{total} units</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-cta-blue" style={{ width: `${total / 2000 * 100}%` }} /></div></div>; })}</div></section><section className="rounded-xl border border-amber-100 bg-amber-50/50 p-6"><p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-700">Stock attention</p><h2 className="text-xl font-semibold">Keep your next order moving.</h2><p className="mt-3 text-sm leading-relaxed text-slate-muted">{products.filter(product => available(product.id) < 50).length} barang memiliki stok tersedia di bawah 50 unit.</p><button type="button" onClick={() => setTab("Inventory")} className="mt-6 flex items-center gap-2 text-sm font-semibold text-cta-blue">Cek inventory <ArrowRight size={16} /></button></section></div>
            </>}
            {tab === "Inventory" && <>
              <div className="mb-5 flex flex-wrap gap-3"><label className="relative min-w-0 flex-1"><Search size={16} className="absolute top-3.5 left-3 text-slate-muted" /><input aria-label="Cari barang atau SKU" placeholder="Cari barang atau SKU…" value={query} onChange={event => setQuery(event.target.value)} className={`${field} !mt-0 pl-10`} /></label><select aria-label="Filter kategori" value={category} onChange={event => setCategory(event.target.value)} className={`${field} !mt-0 !w-auto`}><option>All categories</option>{[...new Set(products.map(product => product.category))].map(cat => <option key={cat}>{cat}</option>)}</select></div>
              <div className="overflow-x-auto rounded-xl border border-slate-border"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs text-slate-muted"><tr>{["Product", "Category", "On hand", "Allocated / shipped", "Available", "Unit price", ""].map((heading, i) => <th key={i} className="whitespace-nowrap px-5 py-4 font-medium">{heading}</th>)}</tr></thead><tbody>{filteredProducts.map(product => <tr key={product.id} className="border-t border-slate-border"><td className="whitespace-nowrap px-5 py-5"><p className="font-medium">{product.name}</p><p className="mt-1 text-xs text-slate-muted">{product.id}</p></td><td className="px-5 py-5 text-slate-muted">{product.category}</td><td className="px-5 py-5">{product.stock}</td><td className="px-5 py-5">{reserved(product.id)}</td><td className={`px-5 py-5 font-semibold ${available(product.id) < 50 ? "text-amber-600" : "text-emerald-700"}`}>{available(product.id)}</td><td className="px-5 py-5">{money(product.price)}</td><td className="px-5 py-5"><button type="button" onClick={() => openOrder(product.id)} disabled={available(product.id) === 0} className="whitespace-nowrap text-xs font-semibold text-cta-blue disabled:opacity-40">Buat pesanan →</button></td></tr>)}</tbody></table>{filteredProducts.length === 0 && <p className="p-8 text-center text-sm text-slate-muted">Barang tidak ditemukan.</p>}</div>
            </>}
            {tab === "Export Orders" && creating && <form onSubmit={createOrder} className="mb-8 rounded-xl border border-slate-border bg-slate-50 p-6"><h2 className="mb-5 text-lg font-semibold">Pesanan ekspor baru</h2><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Customer<input required maxLength={120} value={customer} onChange={event => setCustomer(event.target.value)} placeholder="Nama pelanggan / perusahaan" className={field} /></label><label className="text-sm font-medium">Destination<input required maxLength={120} value={destination} onChange={event => setDestination(event.target.value)} placeholder="Negara / kota tujuan" className={field} /></label><label className="text-sm font-medium">Product<select value={productId} onChange={event => setProductId(event.target.value)} className={field}>{products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}</select></label><label className="text-sm font-medium">Quantity<input required type="number" min={1} max={available(productId)} step={1} value={quantity} onChange={event => setQuantity(event.target.value)} className={field} /></label></div><p className={`mt-4 text-sm ${validQuantity ? "text-slate-muted" : "text-red-600"}`}>Tersedia: {available(productId)} unit. {!validQuantity && "Masukkan jumlah bulat yang tidak melebihi stok."}</p><div className="mt-5 flex flex-wrap gap-3"><button type="submit" disabled={!validQuantity || !customer.trim() || !destination.trim()} className={button}>Validasi & buat pesanan</button><button type="button" onClick={() => setCreating(false)} className="px-4 py-2 text-sm text-slate-muted">Batal</button></div></form>}
            {(tab === "Dashboard" || tab === "Export Orders" || tab === "Shipments") && <section className="overflow-hidden rounded-xl border border-slate-border"><div className="flex items-center justify-between p-5"><h2 className="font-semibold">{tab === "Shipments" ? "Shipment tracking" : "Recent export orders"}</h2>{tab === "Dashboard" && <button type="button" onClick={() => setTab("Export Orders")} className="text-xs font-medium text-cta-blue">Lihat semua →</button>}</div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs text-slate-muted"><tr>{["Order", "Customer / Destination", "Product", "Quantity", "Status", "Action"].map(heading => <th key={heading} className="whitespace-nowrap px-5 py-4 font-medium">{heading}</th>)}</tr></thead><tbody>{orders.map(order => <tr key={order.id} className="border-t border-slate-border"><td className="px-5 py-5 font-medium">{order.id}</td><td className="px-5 py-5"><p className="whitespace-nowrap">{order.customer}</p><p className="mt-1 text-xs text-slate-muted">{order.destination}</p></td><td className="px-5 py-5 text-slate-muted">{products.find(product => product.id === order.productId)!.name}</td><td className="px-5 py-5">{order.quantity}</td><td className="whitespace-nowrap px-5 py-5"><Badge status={order.status} /></td><td className="px-5 py-5">{tab === "Shipments" ? <button type="button" disabled={order.status === "Delivered"} onClick={() => { const status: Status = order.status === "Pending" ? "In transit" : "Delivered"; setOrders(orders.map(item => item.id === order.id ? { ...item, status } : item)); setNotice(`${order.id}: ${status}`); }} className="whitespace-nowrap text-xs font-semibold text-cta-blue disabled:text-slate-muted">{order.status === "Pending" ? "Review & kirim →" : order.status === "In transit" ? "Tandai terkirim ✓" : "Selesai"}</button> : <button type="button" onClick={() => { setSelectedId(order.id); setTab("Documents"); }} className="whitespace-nowrap text-xs font-semibold text-cta-blue">Lihat dokumen →</button>}</td></tr>)}</tbody></table></div></section>}
            {tab === "Documents" && <>
              <div className="mb-6 flex flex-wrap items-end gap-4"><label className="text-xs font-medium text-slate-muted">Pilih pesanan<select value={selectedOrder.id} onChange={event => setSelectedId(event.target.value)} className={field}>{orders.map(order => <option key={order.id} value={order.id}>{order.id} — {order.customer}</option>)}</select></label><label className="text-xs font-medium text-slate-muted">Jenis dokumen<select value={documentType} onChange={event => setDocumentType(event.target.value)} className={field}><option>Commercial Invoice</option><option>Shipping Request</option></select></label><button type="button" onClick={downloadDocument} className={`${button} ml-auto`}><Download size={16} />Unduh TXT</button></div>
              <section className="mx-auto max-w-3xl rounded-xl border border-slate-border p-6 shadow-sm md:p-10"><div className="mb-10 flex flex-wrap justify-between gap-4 border-b border-slate-border pb-6"><div><p className="text-xl font-bold">stockline.</p><p className="mt-2 text-xs text-slate-muted">Import–Export Operations · Demo</p></div><div className="sm:text-right"><h2 className="text-xl font-semibold">{documentType}</h2><p className="mt-2 text-sm text-slate-muted">{selectedOrder.id}</p></div></div><dl className="mb-8 grid gap-6 sm:grid-cols-2"><div><dt className="text-xs uppercase tracking-widest text-slate-muted">Customer</dt><dd className="mt-2 font-medium">{selectedOrder.customer}</dd></div><div><dt className="text-xs uppercase tracking-widest text-slate-muted">Destination</dt><dd className="mt-2 font-medium">{selectedOrder.destination}</dd></div></dl><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="border-b border-slate-border text-xs text-slate-muted"><tr>{["Description", "Qty", "Price", "Amount"].map(label => <th key={label} className="py-3 pr-4 font-medium">{label}</th>)}</tr></thead><tbody><tr><td className="py-5 pr-4">{selectedProduct.name}<span className="mt-1 block text-xs text-slate-muted">{selectedProduct.id}</span></td><td className="pr-4">{selectedOrder.quantity}</td><td className="pr-4">{money(selectedProduct.price)}</td><td>{money(selectedProduct.price * selectedOrder.quantity)}</td></tr></tbody></table></div>{documentType === "Commercial Invoice" ? <div className="mt-4 flex justify-between border-t border-slate-border pt-5 font-semibold"><span>Total (USD)</span><span>{money(selectedProduct.price * selectedOrder.quantity)}</span></div> : <div className="mt-4 flex justify-between border-t border-slate-border pt-5"><span className="text-sm">Shipment status</span><Badge status={selectedOrder.status} /></div>}<p className="mt-10 text-xs leading-relaxed text-slate-muted">Dokumen demo. Informasi diambil dari pesanan yang sama; belum termasuk pajak, biaya kirim, atau ketentuan ekspor.</p></section>
              <button type="button" onClick={() => setTab("Shipments")} className="mt-6 flex items-center gap-2 text-sm font-semibold text-cta-blue">Lanjut ke review & pengiriman <ArrowRight size={16} /></button>
            </>}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-border pt-5 text-xs text-slate-muted"><p>Stockline prototype · Perubahan hanya berlaku selama sesi halaman ini.</p><button type="button" onClick={() => { setOrders(initialOrders); setSelectedId(initialOrders[0].id); setCreating(false); setTab("Dashboard"); setQuery(""); setCategory("All categories"); setNotice("Data demo dikembalikan ke kondisi awal."); }} className="flex items-center gap-2 hover:text-navy"><RotateCcw size={13} />Reset demo</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
