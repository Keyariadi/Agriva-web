import React from "react";

const About = () => {
    return (
        <section id="About" className="about">
            <div className="about_teks">
                <h1 className="h1_about1">Tentang Kami</h1>
                <p className="p_about">
                    Kami lebih utama bergerak dibidang <br />
                    software Agriva Teknologi Nusantara <br />
                    berdiri pada tahun 2014 dan <br />
                    berpengalaman selama 7 tahun, <br />
                    kami dapat bekerja sama dengan client <br />
                    kami dengan baik, Tim kami memiliki <br />
                    hubungan yang solid, berpengalaman <br />
                    dan memiliki budaya kerja yang baik.
                </p>
                <div className="ctnbutton">
                    <button className="button_about1">
                        <a href="#Services" className="a1_about">Selengkapnya</a>
                    </button>

                    <button className="button_about2">
                        <a href="#Portofolio" className="a2_about">Portofolio</a>
                    </button>
                </div>
                </div>

            <h1 className="h1_about2">About</h1>
            <h1 className="h1_about3">Agriva ?</h1>

            <img src="./images/Customer Persona 3D Animated Icon (3).png" alt="" className="img_about1" />
        </section>
    );
};

export default About;
