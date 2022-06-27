import logo from "../assets/img/logo.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img 
        src={logo} 
        alt="The Laundry Station Logo" 
        className="footer__logo"
        />
        <div className="copyright">
          <p>&#169; The Laundry Station All rights reserved.</p>
          <p>Website Designed and Developed by <a className="jerry" href="http://jerrylott.com" target="_blank" rel="noopener noreferrer">JerryLott</a>.</p>
        </div>
      </div>
    </footer>
  )
}