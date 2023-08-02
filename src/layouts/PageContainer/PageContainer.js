import PageContainerCSS from "./PageContainer.module.css";

function PageContainer({ children, type }) {
  return <div className={PageContainerCSS[type]}>{children}</div>;
}

export default PageContainer;
