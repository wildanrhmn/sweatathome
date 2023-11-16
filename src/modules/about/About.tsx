"use client";

import "../../styles/about.css";

import CheckIcon from "@mui/icons-material/Check";

const AboutPage: React.FC = () => {
  return (
    <section
      className="about"
    >
      <div className="container">
        <div className="row about__content d-flex align-items-center">
          <div className="col-lg-8">
            <div className="about__header d-flex flex-column align-items-center align-items-lg-start">
              <h1>Olahraga pakai Personal Trainer?</h1>
              <h1>Apa Untungnya?</h1>
            </div>
            <ul className="mt-3 mt-xl-5">
              <li className="d-flex align-items-center gap-3">
                <CheckIcon
                  className="check-icon"
                />
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Bimbingan Profesional:
                  </span>{" "}
                  Personal Trainer memiliki pengetahuan yang mendalam tentang
                  fisiologi, nutrisi, dan metode latihan yang efektif.
                </p>
              </li>
              <li className="d-flex align-items-center gap-3 pt-2">
                <CheckIcon
                className="check-icon"
                />
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Program Latihan yang Didesain Khusus:{" "}
                  </span>
                  berdasarkan tujuan dan kondisi fisik anda.
                </p>
              </li>
              <li className="d-flex align-items-center gap-3 pt-2">
                <CheckIcon
                 className="check-icon"
                />
                <p>
                  <span style={{ fontWeight: "600" }}>
                    {" "}
                    Pencegahan Cidera:{" "}
                  </span>
                  Membimbing Anda dalam melakukan gerakan yang benar dan aman,
                  mengurangi risiko cedera, serta membantu Anda menyesuaikan
                  program latihan jika ada masalah kesehatan atau cedera yang
                  perlu diperhatikan.
                </p>
              </li>
              <li className="d-flex align-items-center gap-3 pt-2">
                <CheckIcon
                  className="check-icon"
                />
                <p>
                  <span style={{ fontWeight: "600" }}>Efisiensi Waktu: </span>
                  Menyusun sesi latihan yang efisien dan efektif.
                </p>
              </li>
              <li className="d-flex align-items-center gap-3 pt-2">
                <CheckIcon
                  className="check-icon"
                />
                <p style={{ fontWeight: "600" }}>
                  Pemahaman Nutrisi dan Gaya Hidup Sehat.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end">
            <div className="about__card">
              <p className="pt-3">
                Para coach{" "}
                <span style={{ fontWeight: "600" }}>Sweat at Home</span> sudah{" "}
                <span style={{ fontWeight: "600" }}>terverifikasi</span> dengan
                pendidikan dalam bidang{" "}
                <span style={{ fontWeight: "600" }}>olahraga.</span>
              </p>
              <br />
              <p>
                sehingga kamu{" "}
                <span style={{ fontWeight: "600" }}>gak perlu</span> ragu untuk
                memilih{" "}
                <span style={{ fontWeight: "600" }}>Personal Trainer.</span>
              </p>
              <div className="d-flex justify-content-center"><button className="button__about">Chat Sekarang!</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
