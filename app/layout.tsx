import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EverKind Home Care | Private Home Care & Senior Care UK",
  description:
    "Luxury private home care, companionship, dementia support, live-in care and daily assistance for older adults across the UK.",
  keywords: [
    "private home care UK",
    "senior care agency",
    "domiciliary care",
    "live-in care",
    "dementia support",
    "EverKind Home Care"
  ],
  openGraph: {
    title: "EverKind Home Care",
    description:
      "Personalised home care designed around dignity, comfort and family peace of mind.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
