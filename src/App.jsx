import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p4 rounded-2xl">
            <img
              src="/assets/tools/img1.png"
              alt="Profil"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Error 404 Not Found adalah hal biasa.👾</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Haii everyone i'm Byuu N
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya seorang Front-End Web Developer yang tertarik terhadap dunia
            pengembangan web. Saya menyukai proses mengubah kode menjadi
            aplikasi antarmuka yang interaktif dan menarik, dengan fokus pada
            performa dan pengalaman pengguna. Keahlian saya mencakup HTML, CSS,
            JavaScript, React JS, Tailwind CSS, Next.js dan masih banyak lagi.
            Saya selalu tertarik untuk mempelajari teknologi baru dan
            menciptakan solusi digital yang modern dan efisien.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            {/* <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Downloaf CV <i className="ri-download-line ri-lg"></i>
            </a> */}
            <a
              href="#certificate"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Certificate <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Image"
          className="w-[350px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000">
          {/* <img
            src="/assets/tools/Img.png"
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          /> */}
          <p className="text-base/loose mb-10">
            "Saya adalah seorang Frontend Web Developer dan UI/UX Designer yang
            berfokus pada pembuatan antarmuka digital yang menarik, responsif,
            dan mudah digunakan. Saya percaya bahwa tampilan yang baik harus
            didukung oleh pengalaman pengguna yang mudah dipahami dan nyaman
            digunakan. Dengan latar belakang di bidang desain dan teknologi,
            saya mengembangkan antarmuka web yang tidak hanya estetis, tetapi
            juga memberikan nilai fungsional yang tinggi bagi pengguna."
          </p>
          <div className="flex items-center justify-between">
            {/* <img
              src="/assets/tools/Img.png"
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            /> */}
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1 ">
                  5<span className="text-violet-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  6<span className="text-violet-500">+</span>
                </h1>
                <p>Bulan pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000">
            Tools yang digunakan
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300">
            Berikut ini beberapa tools yang biasa saya gunakan untuk membuat
            Website atapun UI/UX Design
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="{tool.dad}">
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tentang */}

      {/* certificate */}
      <div className="certificate mt-32 py-10" id="certificate">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000">
          Certificate
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300">
          Berikut ini beberapa Certificate yang saya miliki.
        </p>
        <div className="certificate-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="Certificate" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                 {/*  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                    Lihat Certificate
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* certificate */}

      {/* contact */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000">
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300">
          "Hubungi saya untuk informasi lebih lanjut"
        </p>
        <form
          action="https://formsubmit.co/percobaanke512@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Your name</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Message
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan"
                className="border border-zinc-500 p-2 rounded-md"
                required></textarea>
            </div>
            <div className="text-center ">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* contact */}
    </>
  );
}

export default App;
