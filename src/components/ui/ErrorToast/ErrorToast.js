import * as RadixToast from "@radix-ui/react-toast";
import { FiAlertOctagon, FiX } from "react-icons/fi";
import ErrorToastCSS from "./ErrorToast.module.css";

function ErrorToast({
  setState: { open, setOpen },
  options: { duration, message },
}) {
  return (
    <RadixToast.Provider>
      <RadixToast.Root
        open={open}
        onOpenChange={setOpen}
        className={ErrorToastCSS["toast-root"]}
        onEscapeKeyDown={() => setOpen(false)}
        duration={duration || 4000}
      >
        <RadixToast.Description className={ErrorToastCSS["description"]}>
          <FiAlertOctagon size={"20px"} />
          <p>{message}</p>
        </RadixToast.Description>
        <RadixToast.Close
          onClick={() => setOpen(false)}
          className={ErrorToastCSS["close-btn"]}
          asChild
        >
          <FiX size={"20px"} />
        </RadixToast.Close>
      </RadixToast.Root>

      <RadixToast.Viewport className={ErrorToastCSS["viewport"]} />
    </RadixToast.Provider>
  );
}

export default ErrorToast;
