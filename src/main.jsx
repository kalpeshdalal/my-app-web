import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
				<ToastContainer
					toastClassName={({ type }) =>
						`${contextClass[type || "default"]
						} relative flex p-1 min-h-10 rounded-md justify-between bg-black overflow-hidden cursor-pointer mb-2`
					}
					bodyClassName={() => "flex text-sm font-white font-med block p-3"}
					position="bottom-right"
					pauseOnFocusLoss={false}
					closeOnClick
				/>
				<App />
		</Provider>
	</React.StrictMode>
);
