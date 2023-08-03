import { FiCamera } from "react-icons/fi";
import DropzoneContentCSS from "./DropzoneContent.module.css";

function DropzoneContent({ getRootProps, getInputProps }) {
  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={DropzoneContentCSS["dropzone"]}>
          <div className={DropzoneContentCSS["dropzone-content"]}>
            <FiCamera size={"25px"} />
            <p>Drag and drop up to 6 photos here, or click to select</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropzoneContent;
