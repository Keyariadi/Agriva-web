import React from "react";

const Contact = () => {
    return(
        <section id="Contact" className="contact">

            <div className="text1_footer">
                <h1 className="h1_footer">Contact</h1>
                <h4 className="contact_footer1">Call :</h4>
                <h3 className="contact_footer">Mirza Halim <br />
                0813-8143-2012</h3>
                <h4 className="contact_footer1">Email :</h4>
                <h3 className="contact_footer">mirza.halim@loginusa.id</h3>
            </div>

        <div className="container">
        <h4 className="contact_footer2">Addres:</h4>
            <div className="alamat">
            <iframe title="ADREESS"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5616200748764!2d106.99773217409776!3d-6.321166161853155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993b063ab5ad1%3A0x925410c64467bb9e!2sRuko%20Pasar%20Alam!5e0!3m2!1sid!2sid!4v1737730584567!5m2!1sid!2sid">
            </iframe>
            </div>     
            </div>
        </section>
    );
};

export default Contact;