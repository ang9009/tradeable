import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReportErrorModal from "../../components/form/ReportErrorModal/ReportErrorModal";
import Button from "../../components/ui/Button/Button";
import NotFoundCSS from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();
  const [reportErrorModalIsOpen, setReportErrorModalIsOpen] = useState(false);

  return (
    <div className={NotFoundCSS["page-container"]}>
      <div className={NotFoundCSS["text-container"]}>
        <h1>404 - Page Not Found</h1>
        <p>Oops, Lyla couldn't find the page you were looking for</p>
        <div className={NotFoundCSS["btns-container"]}>
          <Button
            options={{
              type: "burgundy-filled",
              text: "To homepage",
              className: NotFoundCSS["btn"],
            }}
            onClick={() => navigate("/")}
          />
          <Button
            options={{
              type: "gray-outline",
              text: "Report",
              className: NotFoundCSS["btn"],
            }}
            onClick={() => setReportErrorModalIsOpen(true)}
          />
        </div>
      </div>
      <img
        src={require("../../assets/404_lyla.png")}
        className={NotFoundCSS["not-found-img"]}
      />
      <ReportErrorModal
        reportErrorModalIsOpen={reportErrorModalIsOpen}
        setReportErrorModalIsOpen={setReportErrorModalIsOpen}
      />
    </div>
  );
}

export default NotFound;
