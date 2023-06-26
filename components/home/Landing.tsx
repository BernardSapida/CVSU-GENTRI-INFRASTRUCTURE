import Image from "next/image";

export default function Landing() {
  return (
    <section className="d-flex align-items-center flex-wrap justify-content-center gap-5 my-5">
      <div className="my-4 landing-left">
        <p className="text-green">Welcome to</p>
        <h1 className="school my-4">
          <span className="name">Cavite State University</span>
          <br />
          <span className="branch">General Trias City Campus</span>
        </h1>
        <p className="text-label">
          Formerly known as College of Business and Entrepreneurship
        </p>
      </div>
      <div className="d-block layat-diwa">
        <Image
          src="/images/school/layat-diwa.png"
          alt="Logo"
          width="300"
          height="400"
          priority={true}
        />
      </div>
    </section>
  );
}
