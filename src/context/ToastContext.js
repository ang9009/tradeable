import { createContext, useContext, useState } from "react";
import Toast from "../components/ui/Toast/Toast";

const SetToastContext = createContext();

function useSetToast() {
  return useContext(SetToastContext);
}

function ToastProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [message, setMessage] = useState("");

  function setToast(duration, message) {
    setOpen(true);
    setDuration(duration);
    setMessage(message);
  }

  return (
    <SetToastContext.Provider value={setToast}>
      {children}
      <Toast setState={{ open, setOpen }} options={{ duration, message }} />
    </SetToastContext.Provider>
  );
}

export { ToastProvider, useSetToast };
