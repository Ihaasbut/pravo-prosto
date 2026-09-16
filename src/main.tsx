import { StrictMode } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import { LanguageProvider } from "./context/language/LanguageProvider";
import { MenuProvider } from "./context/menu/MenuProvider";
import { ModalProvider } from "./context/modal/ModalProvider";
import { ThemeProvider } from "./context/theme/ThemeProvider";
import RootLayout from "./layouts/rootLayout/RootLayout.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";
import Home from "./pages/home/Home.tsx";
import LegalPage from "./pages/legalPage/LegalPage.tsx";
import News from "./pages/news/News.tsx";
import NewsOne from "./pages/newsOne/NewsOne.tsx";
import NotFound from "./pages/notFound/NotFound.tsx";
import Service from "./pages/service/Service.tsx";
import Services from "./pages/services/Services.tsx";
import Team from "./pages/team/Team.tsx";
import { initTelegramWebApp } from "./telegram-webapp.ts";

import "./styles/index.css";
import "./styles/colors.css";

initTelegramWebApp();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ru" replace />,
  },
  {
    path: "/:lang",
    element: (
      <LanguageProvider>
        <ModalProvider>
          <MenuProvider>
            <RootLayout />
          </MenuProvider>
        </ModalProvider>
      </LanguageProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:slug",
        element: <Service />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:slug",
        element: <NewsOne />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "privacy-policy",
        element: <LegalPage pageKey="privacyPolicy" />,
      },
      {
        path: "user-agreement",
        element: <LegalPage pageKey="userAgreement" />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
