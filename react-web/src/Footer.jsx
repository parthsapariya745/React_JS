function Footer() {
  return (
    <>
        <div className="footer">
            <div className="footer-box">
                <img src="https://cdn.pulse2.com/cdn/2024/11/Camouflet-Logo.jpg" alt="" />
                <div className="address">
                    <p>Privacy Policy</p>
                    <p>Accessibility Statement</p>
                    <div className="add-box" style={{marginTop: "38px"}}>
                        <div className="add-part">
                            <p>123-456-7890</p>
                            <p>info@mysite.com</p>
                        </div>
                        <div className="add-part">
                            <p>500 Terry Francine St.</p>
                            <p>San Francisco, CA 94158</p>
                        </div>
                    </div>
                </div>
                <h1 style={{paddingTop: "40px"}}>ApexTax</h1>
                <h1>Solutions</h1>
            </div>
            <div className="footer-box">
                <h2>Contact Us</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" style={{marginTop: "15px"}} required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Subject" rows="4"></textarea>
                    <textarea placeholder="Your Message" rows="4"></textarea>
                    <button type="submit">Get In Touch</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Footer