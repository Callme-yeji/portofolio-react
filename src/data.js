import HeroImage from "/assets/img1.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/pemrog.jpg";
import Proyek2 from "/assets/proyek/flutter.jpg";
import Proyek3 from "/assets/proyek/javascript.jpg";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Certificate Dicoding Web",
    desk: "Ini adalah sertifikat dicoding yang saya dapat dari belajar Pemrograman Web untuk Pemula pada tahun 2024",
    tools: [
      "HTML",
      "CSS",
      "JavaScript Fundamentals",
      "Logic Pemrograman",
      "Algoritma",
    ],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Certificate Dicoding Flutter",
    desk: "Ini adalah sertifikat dicoding yang saya dapat dari belajar membuat Aplikasi Flutter untuk Pemula pada tahun 2024",
    tools: [
      "Pengenalan Flutter",
      "Dart",
      "UI",
      "Navigasi dan Routing",
      " Deployment dan Build APK",
    ],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Certificate Dicoding JavaScript",
    desk: "Ini adalah sertifikat dicoding yang saya dapat dari belajar Pemrograman JavaScript untuk Pemula pada tahun 2024",
    tools: [
      "JavaScript",
      "Tipe Data",
      "Variabel",
      "Function",
      "Object & Array",
      "ES6 Modules",
    ],
    dad: "400",
  },
];
