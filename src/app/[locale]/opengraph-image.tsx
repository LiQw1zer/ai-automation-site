import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Lumeo AI";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "ru");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(800px 400px at 20% -10%, rgba(124,58,237,0.45), transparent), radial-gradient(700px 400px at 100% 30%, rgba(168,85,247,0.3), transparent)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            }}
          >
            L
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>{siteConfig.brand}</div>
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 950,
          }}
        >
          {dict.hero.title}
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#a1a1aa", maxWidth: 900 }}>
          {dict.hero.subtitle}
        </div>
      </div>
    ),
    { ...size },
  );
}
