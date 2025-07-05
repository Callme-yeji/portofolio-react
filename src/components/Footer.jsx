const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">portofolio.</h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#certificate">Certificate</a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Callme-yeji"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/byuuun1_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="ri-instagram-line ri-2x"></i>
        </a>
        <a href="#">
          <i class="ri-linkedin-box-fill ri-2x"></i>
        </a>
        <a href="#">
          <i class="ri-twitter-x-line ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
