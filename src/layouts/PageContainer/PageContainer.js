import PageContainerCSS from "./PageContainer.module.css";

function PageContainer({ children, type }) {
  return (
    <div
      className={`${PageContainerCSS[type]} ${PageContainerCSS["all-containers"]}`}
    >
      {children}
    </div>
  );
}

export default PageContainer;
