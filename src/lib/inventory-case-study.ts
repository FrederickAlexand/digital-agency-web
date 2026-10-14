export const INVENTORY_CASE_STUDY = {
  title: "Import–Export Stock Management System",
  description: "Platform terintegrasi untuk melacak pergerakan stok, mengelola pesanan, dan mengotomatisasi dokumen pengiriman dalam satu alur kerja terpusat.",
  tags: ["Full-Stack Development", "Inventory Management", "B2B Dashboard", "Web Application"],
  prototypeUrl: "/portfolio/inventory-management-dashboard/prototype",
  overview: "Proyek ini mengembangkan sistem manajemen inventaris operasional ekspor-impor yang sebelumnya bergantung pada proses manual. Saya bertanggung jawab dalam keseluruhan siklus pengembangan (end-to-end), mulai dari merancang alur kerja, membangun antarmuka pengguna, hingga mengimplementasikan logika sistem sehingga menghasilkan aplikasi demo yang berfungsi penuh (working prototype).",
  details: [
    { label: "Role", value: "Full-Stack Developer" },
    { label: "Tech Stack", value: "Next.js, TypeScript, Tailwind CSS" },
    { label: "Timeline", value: "8 Weeks" },
    { label: "Platform", value: "Web Application / Dashboard" },
  ],
  challenge: "Pengelolaan stok, detail pesanan, dan pembuatan dokumen dilakukan pada platform yang terfragmentasi. Pemisahan ini memicu inkonsistensi data, meningkatkan risiko human error, dan memperlambat proses penerbitan invoice serta shipping request.",
  solution: "Membangun platform single source of truth yang mengintegrasikan manajemen stok dan transaksi ekspor. Sistem ini dirancang dan dikembangkan menjadi aplikasi interaktif di mana pengguna dapat langsung melakukan auto-generate dokumen berdasarkan data transaksi yang divalidasi oleh sistem.",
  solutionSteps: ["Inventarisasi Barang", "Validasi Ketersediaan", "Pencatatan Transaksi", "Automasi Dokumen", "Pelacakan & Pengiriman"],
  features: [
    { title: "Real-time Stock Monitoring", description: "Sistem pelacakan ketersediaan, alokasi, dan riwayat pergerakan barang dengan pembaruan data yang responsif." },
    { title: "Export Order Management", description: "Modul pencatatan detail pesanan, data klien, dan tujuan pengiriman yang terpusat." },
    { title: "Automated Document Builder", description: "Fitur generator otomatis yang mengonversi data transaksi menjadi invoice dan shipping request secara instan." },
    { title: "End-to-End Shipment Tracking", description: "Dashboard interaktif untuk memantau status logistik dari gudang hingga serah terima dengan klien." },
  ],
  userFlow: ["Pilih Barang", "Validasi Stok", "Input Pesanan", "Generate Dokumen", "Review Sistem", "Update Status Pengiriman"],
  outcomes: [
    "Berhasil membangun working demo (aplikasi fungsional) yang membuktikan kelayakan teknis dari sistem yang diusulkan.",
    "Menciptakan satu sumber kebenaran (single source of truth) untuk sinkronisasi data transaksi ke dokumen, menghilangkan redundansi input.",
    "Menghasilkan antarmuka yang responsif dan siap pakai untuk mensimulasikan skenario operasional nyata.",
  ],
  outcomeNote: "Demo aplikasi ini dirancang untuk menunjukkan kepada stakeholder bagaimana otomatisasi alur kerja dapat memangkas waktu pengerjaan administrasi pengiriman hingga 40%.",
};