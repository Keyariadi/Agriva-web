import React from "react";

const Cover = () => {
    return (
        <section className="cover_section">
            <div className="cover">
                <h4 className="h4_cover">Hallo, selamat datang</h4>
                <h1 className="h1_cover">Temukan layanan <br /> untuk kebutuhan anda</h1>
                <hr></hr>
                <h3 className="h3_cover">Kami siap memberikan layanan <br />
                    yang dapat membantu anda.</h3>

                <div className="ctnbutton">
                    <button className="button_cover1">
                        <a href="#About" className="a1_cover">Mulai</a>
                    </button>
                    <button className="button_cover2">
                        <a href="https://wa.me/6281381432012" target="blank" className="a2_cover">Contact</a>
                    </button>
                </div>
            </div>
            <img src="./images/Customer Persona 3D Animated Icon (1).png" alt="" className="img_cover1"></img>
            <img src="./images/Customer Persona 3D Animated Icon (2).png" alt="" className="img_cover2"></img>
            <img src="./images/Influencer Marketing 3D Animated Icon.png" alt="" className="img_cover3"></img>
        </section>
    );
};

export default Cover;
