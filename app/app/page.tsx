import { redirect } from "next/navigation";
import Script from "next/script";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/auth/actions";
import { IOSDevice } from "@/components/legacy/ios-frame";
import { CartéApp } from "@/components/legacy/appShell";

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function DashboardPage() {
  let initialPerson: { name?: string; email?: string } = {};

  if (supabaseConfigured) {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/login");
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, plan, locale")
      .eq("id", user.id)
      .single();

    initialPerson = {
      name: profile?.full_name || user.email || undefined,
      email: user.email || undefined,
    };
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
        <CartéApp
          initialPerson={initialPerson}
          onSignOut={supabaseConfigured ? signOut : undefined}
        />
      </IOSDevice>
    </div>
  );
}
