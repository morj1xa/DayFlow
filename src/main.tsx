import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { init, viewport, swipeBehavior } from "@tma.js/sdk";
import "./index.css";
import App from "./App.tsx";

// Сначала сразу отображаем приложение
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Определяем мобильное устройство
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Telegram настраиваем отдельно от React
async function startTelegram() {
  try {
    init();

    await viewport.mount();
    viewport.bindCssVars();

    if (swipeBehavior.isSupported()) {
      swipeBehavior.mount();
      swipeBehavior.disableVertical();
    }

    // Разворачиваем и включаем Fullscreen только на телефонах
    if (isMobile) {
      viewport.expand();

      if (viewport.requestFullscreen.isSupported()) {
        await viewport.requestFullscreen();
      }
    }
  } catch (error) {
    console.error("Telegram initialization error:", error);
  }
}

void startTelegram();
