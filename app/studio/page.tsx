import { redirect } from "next/navigation";
import Script from "next/script";
import { createClient } from "@/lib/supabase/server";
import { IOSDevice } from "@/components/legacy/ios-frame";
import { Studio } from "@/components/legacy/studio";

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function StudioPage() {
  if (supabaseConfigured) {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/login");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#EDEDF2",
        padding: 24,
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Script src="/i18n.js" strategy="beforeInteractive" />
      <Script
        src="https://unpkg.com/qrcode-generator@1.4.4/qrcode.js"
        strategy="beforeInteractive"
      />
      <IOSDevice width={402} height={874}>
        <Studio />
      </IOSDevice>
    </div>
  );
}
