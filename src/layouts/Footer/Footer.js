import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReportErrorModal from "../../components/form/ReportErrorModal/ReportErrorModal";
import Icon from "../../components/ui/Logo/Icon";
import Logo from "../../components/ui/Logo/Logo";
import { useUser } from "../../context/UserContext";
import pdf from "../../files/terms.pdf";
import FooterCSS from "./Footer.module.css";

function Footer() {
  const [reportErrorModalIsOpen, setReportErrorModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <div className={FooterCSS["footer-bottom-container"]}>
        <div className={FooterCSS["mobile-footer-logo"]}>
          <Icon color={"var(--tradeable-burgundy)"} />
          <div className={FooterCSS["name"]}>tradeable</div>
        </div>
      </div>
      <div className={FooterCSS["footer-container"]}>
        <ul>
          <li onClick={() => setReportErrorModalIsOpen(true)}>
            Report an error
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/neu">NEU Exchange</Link>
          </li>
          <li>
            <a href={pdf} target="_blank" className={FooterCSS["terms-link"]}>
              Terms{" "}
              <span className={FooterCSS["conditions-text"]}>& Conditions</span>
            </a>
          </li>
        </ul>
        <Logo
          color={"var(--tradeable-burgundy)"}
          className={FooterCSS["footer-top-logo"]}
        />
      </div>

      <ReportErrorModal
        reportErrorModalIsOpen={reportErrorModalIsOpen}
        setReportErrorModalIsOpen={setReportErrorModalIsOpen}
      />
    </>
  );
}

export default Footer;
