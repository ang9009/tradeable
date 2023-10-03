import { createContext, useReducer } from "react";
import { useParams } from "react-router-dom";

export const ChatContext = createContext();

function ChatContextProvider({ children }) {
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const { chatId } = useParams();

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId: chatId,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}

export default ChatContextProvider;
