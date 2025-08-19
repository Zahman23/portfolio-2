import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiReactquery,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiZod,
  SiGithub,
  SiGit,
  SiVercel,
  SiFirebase,
  SiClerk,
  SiJest,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaH } from "react-icons/fa6"; // fallback utk Hono
import { FaNodeJs } from "react-icons/fa6";

import BclImageLogin from "@/assets/bcl/login.jpg";
import BclDataCenter from "@/assets/bcl/dataCenter.jpg";
import BclInverter from "@/assets/bcl/inverter.jpg";
import BclWeigher from "@/assets/bcl/weigher.jpg";

import KomatsuImage from "@/assets/komatsu/komatsu-1.png";
import KomatsuImage2 from "@/assets/komatsu/komatsu-2.png";

import BmtDt from "@/assets/bmt/login.png";
import BmtDtDashboard from "@/assets/bmt/dashboard.jpg";
import BmtDtPembelian from "@/assets/bmt/pembelian.jpg";
import BmtDtApprover from "@/assets/bmt/pembelianApprover.jpg";
import BmtDtTransfer from "@/assets/bmt/transfer.jpg";

import Wanka from "@/assets/projects/wanka/Screenshot 2025-08-18 072838.png";

import JiraClone from "@/assets/projects/jira-clone/Screenshot 2025-08-18 061414.png";
import JiraClone2 from "@/assets/projects/jira-clone/Screenshot 2025-08-18 061436.png";

import Jwf from "@/assets/projects/jwf/Screenshot 2025-08-18 061216.png";
import Jwf2 from "@/assets/projects/jwf/Screenshot 2025-08-18 061251.png";

import KlonStore from "@/assets/projects/klonstore/Screenshot 2025-08-18 060828.png";
import KlonStore2 from "@/assets/projects/klonstore/Screenshot 2025-08-18 060855.png";
import KlonStore3 from "@/assets/projects/klonstore/Screenshot 2025-08-18 060929.png";
import KlonStore4 from "@/assets/projects/klonstore/Screenshot 2025-08-18 061044.png";
import KlonStore5 from "@/assets/projects/klonstore/Screenshot 2025-08-18 061102.png";

import { Project, ProjectType, SkillCategory } from "@/types/dataType";

export const aboutData = [
  {
    id: 1,
    desc: "Saya adalah seorang Frontend Developer yang berbasis di Bandung, seorang pengembang frontend yang memiliki passion dalam menciptakan situs web yang menarik dan interaktif sesuai dengan kebutuhan pelanggan. Saya percaya bahwa kita tidak boleh berhenti berkembang, dan itulah yang saya usahakan. Saya memiliki passion terhadap teknologi dan keinginan untuk selalu mendorong batas-batas kemungkinannya. Saya antusias melihat ke mana karier saya akan membawa saya dan selalu terbuka untuk peluang baru. 😊.",
  },
  {
    id: 2,
    desc: `Saat ini, saya bekerja sebagai Freelance Front-End Developer, berfokus pada pembangunan aplikasi web modern dan interaktif. Saya berkontribusi dalam merancang serta mengembangkan antarmuka pengguna (UI) yang responsif dan mudah digunakan, dengan memanfaatkan teknologi seperti Next.js, React.js, TypeScript, dan Tailwind CSS. Sebagai developer independen, saya terbiasa beradaptasi dengan kebutuhan beragam klien, mengutamakan performansi, aksesibilitas, dan pengalaman pengguna yang optimal pada setiap proyek yang saya kerjakan.`,
  },
  {
    id: 3,
    desc: `Di masa lalu, saya memiliki kesempatan untuk mengembangkan aplikasi web di PT. IRITEK, khususnya dalam membangun sistem monitoring berbasis web untuk kebutuhan internal perusahaan. Dalam proyek tersebut, saya berfokus pada pengembangan antarmuka pengguna (UI) yang menampilkan data real-time dari perangkat industri, serta berkontribusi pada integrasi data dari RFID dan mesin lapangan agar dapat divisualisasikan secara jelas di dashboard web.`,
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Dart", icon: SiDart },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Tanstack Query", icon: SiReactquery },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "ShadCN UI", icon: SiShadcnui },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Zod", icon: SiZod },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "NodeJS", icon: FaNodeJs },
      { name: "Vercel", icon: SiVercel },
      { name: "REST API", icon: TbApi },
      { name: "Jest", icon: SiJest },
      { name: "Firebase", icon: SiFirebase },
      { name: "Clerk", icon: SiClerk },
      { name: "Hono", icon: FaH },
    ],
  },
];

export const experienceData = [
  {
    company: "Freelance",
    jobdesk: "Frontend Developer",
    dari: "2024",
    sampai: "sekarang",
    teknologi: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "REST API",
    ],
    description: `Menangani berbagai proyek independen untuk kebutuhan aplikasi web, sistem internal, dan solusi digital.Bekerja langsung dengan klien untuk perencanaan, desain pengembangan, dan deployment.Menyediakan dukungan teknis dan pemeliharaan pasca-deployment.`,
  },
  {
    company: "PT.IRITEK",
    jobdesk: "Frontend Developer",
    dari: "2022",
    sampai: "2024",
    teknologi: [
      "HTML & CSS",
      "JavaScript",
      "AJAX",
      "REST API",
      "WebSocket",
      "Flutter",
      "React",
      "TailwindCSS",
      "Node.js",
    ],
    description: `Terlibat dalam berbagai proyek untuk klien besar seperti ASTRA, KOMATSU, dan BMT.Mengembangkan dan mengimplementasikan solusi berbasis teknologi sesuai kebutuhan masing-masing klien.
        Catatan: Beberapa proyek bersifat internal perusahaan klien sehingga tidak dapat diakses publik.`,
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Website Monitoring Komatsu – RFID Tracking",
    type: ProjectType.Internal,
    date: "Februari 2023",
    technology: ["HTML", "CSS", "JavaScript", "WebSocket"],
    description: `UI dashboard yang menampilkan status penempatan molding pada rak berdasarkan pembacaan RFID. Sistem menandai otomatis jika pallet berada pada posisi RFID tertentu di rak.`,
    features: [
      "Tampilan yang menunjukkan status real-time TRUE/FALSE apakah barang berada di rak.",
      "Pengambilan data RFID melalui koneksi database lalu ditampilkan secara langsung di UI",
      "Implementasi DOM manipulation manual (tanpa framework).",
    ],
    image: [KomatsuImage, KomatsuImage2],
    link: ProjectType.Internal,
  },
  {
    id: 2,
    title: "Monitoring Suhu dan Motor Mesin – Astra BCL Sawit",
    type: ProjectType.Internal,
    date: "Agustus 2023",
    technology: ["JavaScript", "React", "TailwinCSS", "Recharts", "WebsSocket"],
    description: `Real-time dashboard untuk memantau performa mesin pabrik (boiler, weigher, conveyor) dengan visualisasi suhu, kecepatan, aliran, berat, arus, frekuensi, dan jam operasi.`,
    features: [
      "Visualisasi data suhu mesin, RPM motor, dan berat material dalam bentuk chart/kurva",
      "Monitoring semua output dari inverter yang dikonversi ke data readable, lalu ditampilkan sebagai statistik real-time.",
      "Pemetaan beberapa parameter penting seperti overload, suhu kritis, putaran abnormal.",
      "UI bersifat modular dan responsif untuk menampilkan berbagai unit mesin.",
    ],
    image: [BclWeigher, BclInverter, BclDataCenter, BclImageLogin],
    link: ProjectType.Internal,
  },
  {
    id: 3,
    title: "BMT_DT – Digital Payment Platform",
    type: ProjectType.Collaboration,
    date: "April 2024",
    technology: ["Flutter Web", "REST API"],
    description: `Aplikasi pembayaran digital berbasis web dengan fitur top-up saldo, transfer antar pengguna, pembayaran tagihan, dan riwayat transaksi. Menggunakan payment gateway internal perusahaan.`,
    features: [
      "Implemented QR Code Payment untuk transaksi instan antar user.",
      "Developed Top-up & Withdraw saldo via payment gateway",
      "Built Transaction History & Notification system dengan filter date range.",
    ],
    image: [
      BmtDtDashboard,
      BmtDt,
      BmtDtApprover,
      BmtDtPembelian,
      BmtDtTransfer,
    ],
    link: "https://play.google.com/store/apps/details?id=com.mgp.bmtdtmobile&hl=id&pli=1",
  },
  {
    id: 4,
    title: "Landing Page – Wanka Bengkel",
    type: ProjectType.Personal,
    date: "Juni 2024",
    technology: ["JavaScript", "React", "Tailwind CSS"],
    description:
      "Website promosi berisi katalog produk molding dan fitur kontak langsung dengan pemilik bengkel untuk pemesanan khusus.",
    features: [
      "Landing page statis untuk promosi jasa bengkel.",
      "Katalog produk molding ditampilkan dalam grid responsif.",
      "Fitur kontak langsung dengan pemilik bengkel untuk pemesanan khusus.",
    ],
    image: [Wanka],
    link: "https://zahman23.github.io/wanka/",
  },
  {
    id: 5,
    title: "JWF – E-Commerce",
    type: ProjectType.Personal,
    date: "September 2024",
    technology: ["JavaScript", "React", "Tailwind CSS", "React Carousel"],
    description:
      "Website penjualan baju bertema anime dengan katalog produk, detail item, dan tombol WhatsApp langsung ke admin (tanpa payment gateway).",
    features: [
      "Katalog produk baju anime dengan tampilan grid.",
      "Halaman detail item untuk tiap produk.",
      "Tombol WhatsApp langsung ke admin untuk order.",
      "Carousel produk menggunakan React Carousel.",
    ],
    image: [Jwf, Jwf2],
    link: "https://jfw-store.vercel.app/",
  },
  {
    id: 6,
    title: "Jira Clone – Personal Learning Project",
    type: ProjectType.Personal,
    date: "Desember 2024",
    technology: [
      "TypeScript",
      "Next.js",
      "Zustand",
      "TailwindCSS",
      "Recharts",
      "Appwriter",
      "REST API",
    ],
    description: `Versi mini dari Jira dengan fitur login/sign up, manajemen task, dan board drag-and-drop untuk belajar Next.js dan teknologi pendukung.`,
    features: [
      "Drag & drop tugas ke kolom (To Do, In Progress, Done).",
      "Buat/Edit/Hapus tugas (CRUD).",
      "Simulasi board per proyek.",
      "State management menggunakan Zustand.",
      "UI dengan ShadCN UI dan Tailwind.",
    ],
    image: [JiraClone2, JiraClone],
    link: "https://jira-clone-eosin.vercel.app/sign-in",
  },
  {
    id: 7,
    title: "KlonStore – E-Commerce (Admin & User Panel)",
    type: ProjectType.Personal,
    date: "Juni 2025",
    technology: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Appwriter",
      "REST-API",
    ],
    description: `Platform e-commerce dengan sistem admin dan toko online terpisah. Admin dapat mengelola produk, kategori, banner, pesanan, dan laporan penjualan. Storefront menyediakan katalog, keranjang, dan checkout dengan integrasi payment gateway.`,
    features: [
      "Form untuk input produk, upload gambar, kategori produk.",
      "Validasi input menggunakan Zod.",
      "Manajemen list produk: edit, hapus, aktif/nonaktif.",
      "Tampilan grid produk berdasarkan kategori.",
      "Halaman detail produk.",
      "Tombol pembelian langsung via WhatsApp API.",
      "Responsif untuk mobile dan desktop.",
    ],
    image: [KlonStore, KlonStore2, KlonStore3, KlonStore4, KlonStore5],
    link: "https://kloncloth-store.vercel.app/",
  },
];
