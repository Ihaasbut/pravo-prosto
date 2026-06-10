type TelegramInsets = Partial<
    Record<"top" | "right" | "bottom" | "left", number>
>;

type TelegramViewportEvent = {
    isStateStable?: boolean;
};

type TelegramWebApp = {
    ready?: () => void;
    expand?: () => void;
    disableVerticalSwipes?: () => void;
    requestFullscreen?: () => Promise<unknown> | void;
    safeAreaInset?: TelegramInsets;
    contentSafeAreaInset?: TelegramInsets;
    viewportHeight?: number;
    viewportStableHeight?: number;
    onEvent?: (
        eventType:
            | "safeAreaChanged"
            | "contentSafeAreaChanged"
            | "viewportChanged",
        handler: (event?: TelegramViewportEvent) => void,
    ) => void;
};

declare global {
    interface Window {
        Telegram?: {
            WebApp?: TelegramWebApp;
        };
        __telegramWebAppInitialized__?: boolean;
    }
}

const setRootVar = (name: string, value?: string) => {
    if (!value) {
        return;
    }

    document.documentElement.style.setProperty(name, value);
};

const applyInsets = (insets?: TelegramInsets) => {
    if (typeof insets?.top === "number") {
        setRootVar("--safe-area-top", `${insets.top}px`);
    }
};

const applyViewportHeight = (height?: number) => {
    if (typeof height === "number" && height > 0) {
        setRootVar("--app-height", `${height}px`);
    }
};

const syncViewportVars = (webApp: TelegramWebApp) => {
    applyInsets(webApp.contentSafeAreaInset ?? webApp.safeAreaInset);
    applyViewportHeight(webApp.viewportStableHeight ?? webApp.viewportHeight);
};

export const initTelegramWebApp = () => {
    if (typeof window === "undefined" || window.__telegramWebAppInitialized__) {
        return;
    }

    window.__telegramWebAppInitialized__ = true;
    document.documentElement.dataset.telegramWebApp = "true";

    const webApp = window.Telegram?.WebApp;

    if (!webApp) {
        return;
    }

    webApp.ready?.();
    syncViewportVars(webApp);
    webApp.expand?.();

    try {
        webApp.disableVerticalSwipes?.();
    } catch {
        // Ignore unsupported clients.
    }

    webApp.onEvent?.("safeAreaChanged", () => {
        syncViewportVars(webApp);
    });

    webApp.onEvent?.("contentSafeAreaChanged", () => {
        syncViewportVars(webApp);
    });

    webApp.onEvent?.("viewportChanged", (event) => {
        if (event?.isStateStable === false) {
            return;
        }

        syncViewportVars(webApp);
    });
};
