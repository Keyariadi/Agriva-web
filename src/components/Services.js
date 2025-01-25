import React from "react";

const Services = () => {
    return(
        <section id="Services" className="services">
            <h1 className="h1_services">Layanan Kami</h1>

            <div className="card">
                <div class="inner-card">
                    <img className="img_services" src="./images/Mobile Shopping 3D Animation.png" alt=""></img>
                    <h3>Mobile App</h3>
                    <p>Program Aplikasi yang di rancang untuk berjalan pada peranti bergerak seperti ponsel atau tablet.</p>
                </div>

                <div class="inner-card">
                    <img className="img_services" src="./images/Keyword 3D Animated Icon.png" alt=""></img>
                    <h3>Web App</h3>
                    <p>Suatu aplikasi yang dapat diakses menggunakan penjelajah web melalui suatu jaringan seperti Internet.</p>
                </div>

                <div class="inner-card">
                    <img className="img_services" src="./images/SEO 3D Animated Icon.png" alt=""></img>
                    <h3>Database Optimization</h3>
                    <p>Optimasi database adalah strategi untuk mengurangi waktu respon sistem database.</p>
                </div>

                <div class="inner-card">
                    <img className="img_services" src="./images/Link Building 3D Animated Icon.png" alt=""></img>
                    <h3>Integration System</h3>
                    <p>Didefinisikan dalam rekayasa sebagai proses menyatukan sub-sistem komponen kedalam satu sistem dan memastikan bahwa subsistem berfungsi bersama sebagai suatu sistem, dan dalam teknologi.</p>
                </div>

                <div class="inner-card">
                    <img className="img_services" src="./images/Search Engine 3D Animated Icon.png" alt=""></img>
                    <h3>UI/UX Design</h3>
                    <p>UI Design adalah tampilan produk yang ingin kita perlihatkan. UX berfokus pada proses pembuatan produk hingga mampu mendapatkan pengalaman kemudahan dari user.</p>
                </div>
            </div>

        </section>
    );
};

export default Services;