import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css";
import "@rainbow-me/rainbowkit/styles.css";
import StyledComponentsRegistry from "@/app/lib/AntdRegistry";
import React from "react";
import { Providers } from "@/contexts/Providers";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import {TokenListProvider} from "@/contexts/TokenListProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <Providers>
              <TokenListProvider>
                {children}
              </TokenListProvider>
            </Providers>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
