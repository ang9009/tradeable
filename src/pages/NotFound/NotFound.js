import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import NotFoundCSS from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

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
            onClick={() => navigate("/")}
          />
        </div>
      </div>
      <img
        src={require("../../assets/404_lyla.png")}
        className={NotFoundCSS["not-found-img"]}
      />
    </div>
  );
}

export default NotFound;
