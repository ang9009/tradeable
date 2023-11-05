import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReportErrorModal from "../../components/form/ReportErrorModal/ReportErrorModal";
import Icon from "../../components/ui/Logo/Icon";
import Logo from "../../components/ui/Logo/Logo";
import { useUser } from "../../context/UserContext";
import FooterCSS from "./Footer.module.css";

function Footer() {
  const [reportErrorModalIsOpen, setReportErrorModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <div className={FooterCSS["footer-container"]}>
        <ul>
          <li
            onClick={() =>
              user ? setReportErrorModalIsOpen(true) : navigate("/signup")
            }
          >
            Report an error
          </li>
          <li>About</li>
          <li>
            Terms
            <span className={FooterCSS["conditions-text"]}> & Conditions</span>
          </li>
        </ul>
        <Logo
          color={"var(--tradeable-burgundy)"}
          className={FooterCSS["footer-top-logo"]}
        />
      </div>
      <div className={FooterCSS["footer-bottom-container"]}>
        <div className={FooterCSS["mobile-footer-logo"]}>
          <Icon color={"var(--tradeable-burgundy)"} />
          <div className={FooterCSS["name"]}>tradeable</div>
        </div>
      </div>
      <ReportErrorModal
        reportErrorModalIsOpen={reportErrorModalIsOpen}
        setReportErrorModalIsOpen={setReportErrorModalIsOpen}
      />
    </>
  );
}

export default Footer;
