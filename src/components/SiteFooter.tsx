import { BRAND } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div>
            <h3>{BRAND}</h3>
            <ul>
              <li>2nd Floor, Building 1, Chuangye Industrial Park,</li>
              <li>No. 8 Xiangshan Avenue, Xintang Town, Zengcheng District,</li>
              <li>Guangzhou, Guangdong, China</li>
              <li>
                <a href="mailto:Ablehuang@sanhorses.com">Ablehuang@sanhorses.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Products</h3>
            <ul>
              <li>
                <a href="/products/jeans/">Custom Jeans</a>
              </li>
              <li>
                <a href="/products/denim-jackets/">Denim Jackets</a>
              </li>
              <li>
                <a href="/products/denim-shorts/">Denim Shorts</a>
              </li>
              <li>
                <a href="/products/denim-shirts/">Denim Shirts</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/company/">About Us</a>
              </li>
              <li>
                <a href="/company/factory-tour/">Factory Tour</a>
              </li>
              <li>
                <a href="/company/certificates/">Certificates</a>
              </li>
              <li>
                <a href="/clients/">Clients</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>
                <a href="/faq/">FAQ</a>
              </li>
              <li>
                <a href="/contact-us.html">Contact Us</a>
              </li>
              <li>
                <a href="/terms-conditions/">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="/privacy-policy/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">© {BRAND}. All rights reserved.</div>
      </div>
    </footer>
  );
}
