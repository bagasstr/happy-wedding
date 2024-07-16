import { CircleDollarSign, Home, Palette, Plus, Route } from "lucide-react";
import {
  IDataFeatureSection,
  IDataValueSection,
  IDesign,
  IPrices,
  TNavLinks,
} from "./types";

interface TLinks {
  links: {
    name: string;
    href: string;
    icon?: any;
  }[];
}

export const NavlinksDesktop: TLinks = {
  links: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Tema Undangan",
      href: "/#desain",
    },
    {
      name: "Harga",
      href: "/#harga",
    },
    {
      name: "Cara Pemesanan",
      href: "/cara-pemesanan",
    },
    {
      name: "Hubungi Kami",
      href: "/hubungi-kami",
    },
  ],
};

export const NavlinksMobile: TLinks = {
  links: [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Tema Undangan",
      href: "/#desain",
      icon: Palette,
    },
    {
      name: "Buat Undangan",
      href: "/buat-pemesanan",
      icon: Plus,
    },
    {
      name: "Harga",
      href: "/#harga",
      icon: CircleDollarSign,
    },
    {
      name: "Alur Pemesanan",
      href: "/alur-pemesanan",
      icon: Route,
    },
  ],
};

export const DataValueSection: IDataValueSection[] = [
  {
    id: 1,
    title: "Hemat Biaya",
    description:
      "Undangan digital jauh lebih hemat biaya dibandingkan undangan cetak tradisional. Tidak perlu lagi mengeluarkan uang untuk kertas, cetak, dan pengiriman.",
    image: "/icon-dolar.svg",
  },
  {
    id: 2,
    title: "Lebih Praktis dan Cepat",
    description:
      "Anda dapat mengirim undangan ke ratusan tamu hanya dalam hitungan menit melalui WhatsApp, email, atau media sosial.",
    image: "/icon-share.svg",
  },
  {
    id: 3,
    title: "Ramah Lingkungan",
    description:
      "Undangan digital membantu mengurangi penggunaan kertas dan limbah, sehingga turut berkontribusi dalam menjaga kelestarian lingkungan.",
    image: "/icon-eco.svg",
  },
];
export const DataValueFeatureSection: IDataFeatureSection[] = [
  {
    id: 1,
    title: "Pilihan Paket Sesuai Kebutuhan",
    description:
      " Kami menawarkan berbagai pilihan paket dengan harga terjangkau, sesuai dengan kebutuhan anda.",
    image: "/icon-dollar.svg",
  },
  {
    id: 2,
    title: "Proses Cepat",
    description:
      "Proses sangat cepat, kamu tidak perlu menghubungi kami untuk pembuatan undangan",
    image: "/icon-clock.svg",
  },
  {
    id: 3,
    title: "Buat Undangan Sendiri",
    description:
      "Buat sendiri undangan kamu, sesuaikan desain yang kamu inginkan",
    image: "/icon-form.svg",
  },
  {
    id: 4,
    title: "Fitur Lengkap Dalam Satu Paket",
    description:
      "Anda tidak perlu membayar tambahan untuk fitur-fitur unggulan seperti RSVP online, integrasi Google Maps, atau countdown timer. Semuanya sudah termasuk dalam paket yang Anda pilih.",
    image: "/icon-paket.svg",
  },
  {
    id: 5,
    title: "24/7 Layanan Konsultasi",
    description:
      "Proses sangat cepat, kamu tidak perlu menghubungi kami untuk pembuatan undangan.",
    image: "/icon-cs.svg",
  },
  {
    id: 6,
    title: "Beragam Pilihan desain",
    description:
      "Happy Wedding menawarkan berbagai macam template desain undangan yang menarik, modern, dan dapat disesuaikan dengan tema pernikahan Anda.",
    image: "/icon-tema.svg",
  },
];

export const DataDesign: IDesign[] = [
  {
    id: 1,
    image: "/wedding.png",
  },
  {
    id: 2,
    image: "/wedding.png",
  },
  {
    id: 3,
    image: "/wedding.png",
  },
  {
    id: 4,
    image: "/wedding.png",
  },
];

export const Prices: IPrices[] = [
  {
    title: "All in One",
    price: 100000,
    description: [
      {
        title: "UNLIMITED Nama Tamu",
      },
      {
        title: "Ucapan dan doa restu",
      },
      {
        title: "Backsound music",
      },
      {
        title: "Hitung mundur acara",
      },
      {
        title: "Love story",
      },
      {
        title: "Galeri foto + Video",
      },
      {
        title: "RSVP",
      },
      {
        title: "Kalender acara",
      },
      {
        title: "Amplop digital",
      },
    ],
  },
];
