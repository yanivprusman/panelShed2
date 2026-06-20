import type { Metadata } from "next";
import "./globals.css";
import FeedbackChatClient from "./feedback-chat-client";

export const metadata: Metadata = {
  title: "panelShed2",
  description: "panelShed2 application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <a href="#main-content" className="skip-link" data-id="skip-to-content">
          דלג לתוכן הראשי
        </a>
        {children}
        <FeedbackChatClient />
      </body>
    </html>
  );
}
