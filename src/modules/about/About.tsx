"use client";

import "../../styles/about.css";

import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import qr from '../../assets/images/qrcode/qr.webp';

const AboutPage: React.FC = () => {

  return (
    <section className="about">
      <div className="container">
        <div className="row about__content d-flex align-items-center">
          <div className="col-lg-8">
            <div className="about__header d-flex flex-column align-items-center align-items-lg-start">
              <h1>Olahraga pakai Sweat at Home?</h1>
              <h1>Apa Untungnya?</h1>
            </div>
            <ul className="mt-3 mt-xl-5">
              <li className="d-flex align-items-center flex-column text-center flex-lg-row text-lg-start gap-3 pt-2">
                <CheckIcon className="check-icon" />
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Bimbingan Profesional:
                  </span>{" "}
                  Coaches kami sudah menguasai wawasan dan pengetahuan tentang
                  ilmu kebugaran dan juga menguasai tentang anatomi tubuh
                  manusia sehingga Anda akan didampingi oleh pelatih yang ahli
                  dibidangnya.
                </p>
              </li>
              <li className="d-flex align-items-center flex-column text-center flex-lg-row text-lg-start gap-3 pt-2">
                <CheckIcon className="check-icon" />
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Program Latihan yang Didesain Khusus:{" "}
                  </span>
                  Program latihan yang diberikan oleh coaches kami adalah
                  program yang dibuat berdasarkan tujuan, kemampuan dan kondisi
                  Anda.
                </p>
              </li>
              <li className="d-flex align-items-center flex-column text-center flex-lg-row text-lg-start gap-3 pt-2">
                <CheckIcon className="check-icon" />
                <p>
                  <span style={{ fontWeight: "600" }}>
                    {" "}
                    Pencegahan Cidera:{" "}
                  </span>
                  Coaches kami akan mendampingi Anda untuk mencapai tujuan
                  dengan teknik yang tepat dan aman agar mengurangi resiko
                  cedera.
                </p>
              </li>
              <li className="d-flex align-items-center flex-column text-center flex-lg-row text-lg-start gap-3 pt-2">
                <CheckIcon className="check-icon" />
                <p>
                  <span style={{ fontWeight: "600" }}>Efisiensi Waktu: </span>
                  Anda tidak perlu membuang waktu di perjalanan karena coaches
                  kami yang akan datang ketempat Anda atau dimanapun Anda ingin
                  berolahraga.
                </p>
              </li>
              <li className="d-flex align-items-center flex-column text-center flex-lg-row text-lg-start gap-3 pt-2">
                <CheckIcon className="check-icon" />
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Edukasi Seputar Kebugaran dan Gaya Hidup Sehat:{" "}
                  </span>
                  Selain Anda mendapat pendampingan selama berolahraga, coaches
                  kami juga akan mengedukasi Anda tentang kebugaran dan gaya
                  hidup sehat untuk meningkatkan kualitas hidup Anda.
                </p>
              </li>
              <li className="d-flex align-items-center flex-column text-center flex-lg-row text-lg-start gap-3 pt-2">
                <CheckIcon className="check-icon" />
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Pendampingan Nutrisionis dan Fisioterapis:{" "}
                  </span>
                  Kami bekerja sama dengan fisioterapis dan nutrisionis untuk
                  membantu Anda mencapai tujuan Anda.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end pt-3">
            <div className="about__card">
              <p className="pt-3">
                Mau olahraga dengan coach anti ribet? Kamu tidak perlu ragu
                untuk memilih <span style={{ fontWeight: "700" }}>Sweat at Home</span> sebagai coach kamu.
              </p>
              <br />
              <p style={{ fontWeight: "700" }}>
                Dirumah aja, yuk!
              </p>
              <div className="d-flex justify-content-center flex-column align-items-center pt-3">
                <Image src={qr} alt="qr" width={256} height={256} />
                <span className="button__about">
                  Chat Sekarang!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
