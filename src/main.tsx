import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/colors.css";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout.tsx";
import Home from "./pages/Home/Home.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import Services from "./pages/Services/Services.tsx";
import { LanguageProvider } from "./context/LanguageProvider.tsx";
import Team from "./pages/Team/Team.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import News from "./pages/News/News.tsx";
import Service from "./pages/Service/Service.tsx";
import NewsOne from "./pages/NewsOne/NewsOne.tsx";
import ModalProvider from "./context/ModalProvider.tsx";
import LegalPage from "./pages/LegalPage/LegalPage.tsx";
import { initTelegramWebApp } from "./telegram-webapp.ts";

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
                    <RootLayout />
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
