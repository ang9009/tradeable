import PageContainerCSS from "./PageContainer.module.css";

function PageContainer({ children, type }) {
  return (
    <div
      className={`${PageContainerCSS["all-containers"]} ${PageContainerCSS[type]}`}
    >
      <div
        className={
          type === "centered" && PageContainerCSS["centered-inner-container"]
        }
      >
        {children}
      </div>
    </div>
  );
}

export default PageContainer;
