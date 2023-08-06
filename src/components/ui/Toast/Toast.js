import * as RadixToast from "@radix-ui/react-toast";
import { FiAlertOctagon, FiX } from "react-icons/fi";
import ToastCSS from "./Toast.module.css";

// Accessible using the toast context
function Toast({
  setState: { open, setOpen },
  options: { duration, message },
}) {
  return (
    <RadixToast.Provider>
      <RadixToast.Root
        open={open}
        onOpenChange={setOpen}
        className={ToastCSS["toast-root"]}
        onEscapeKeyDown={() => setOpen(false)}
        duration={duration || 4000}
      >
        <RadixToast.Description className={ToastCSS["description"]}>
          <FiAlertOctagon size={"20px"} />
          <p>{message}</p>
        </RadixToast.Description>
        <RadixToast.Close
          onClick={() => setOpen(false)}
          className={ToastCSS["close-btn"]}
          asChild
        >
          <FiX size={"20px"} />
        </RadixToast.Close>
      </RadixToast.Root>

      <RadixToast.Viewport className={ToastCSS["viewport"]} />
    </RadixToast.Provider>
  );
}

export default Toast;
