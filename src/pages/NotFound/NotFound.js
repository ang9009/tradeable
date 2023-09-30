import NotFoundCSS from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={NotFoundCSS["page-container"]}>
      <div>
        <img
          src={require("../../assets/404.png")}
          className={NotFoundCSS["not-found-img"]}
        />
        <div className={NotFoundCSS["not-found-msg"]}>
          <h1>404</h1>
          <p>Oops, we couldn't find the page you were looking for</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
