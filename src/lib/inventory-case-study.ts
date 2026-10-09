// Edit teks dan link proyek di sini.
export const INVENTORY_CASE_STUDY = {
  title: "Import–Export Stock Management",
  description: "Aplikasi untuk memantau stok dan menyiapkan dokumen pengiriman dalam satu alur kerja.",
  tags: ["Product Design", "Inventory", "Import–Export"],
  prototypeUrl: "/portfolio/inventory-management-dashboard/prototype",
  overview: "Ringkasan singkat proyek dan kontribusi kamu. Ganti teks ini dengan latar belakang proyek, siapa penggunanya, dan tanggung jawab kamu dalam proses desain.",
  details: [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "8 weeks" },
    { label: "Platform", value: "Web application" },
  ],
  challenge: "Stok, detail pesanan, dan dokumen pengiriman dikelola terpisah. Akibatnya, tim sulit memastikan data tetap konsisten saat membuat invoice dan shipping request.",
  solution: "Satu aplikasi untuk mengelola stok, transaksi ekspor, dan pembuatan dokumen dari data transaksi yang sama.",
  solutionSteps: ["Kelola Barang", "Cek Stok", "Buat Transaksi", "Generate Dokumen", "Review & Kirim"],
  features: [
    { title: "Stock Monitoring", description: "Cek stok tersedia dan alokasi barang." },
    { title: "Export Orders", description: "Catat detail pesanan dan tujuan pengiriman." },
    { title: "Document Builder", description: "Buat invoice dan shipping request dari data transaksi." },
    { title: "Shipment Tracking", description: "Pantau status pengiriman sampai terkirim." },
  ],
  userFlow: ["Pilih barang", "Validasi stok", "Buat pesanan", "Generate dokumen", "Review", "Pengiriman"],
  outcomes: [
    "Stok dan pesanan terlihat dalam satu sistem",
    "Dokumen menggunakan data transaksi yang konsisten",
    "Status pengiriman lebih mudah dipantau",
  ],
  outcomeNote: "Tambahkan angka dampak jika sudah ada data nyata.",
};
