import Link from "next/link";
import { signUp } from "@/app/auth/actions";

const CSS = `
  .auth-wrap { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #F6F5FA; font-family: "Hanken Grotesk", system-ui, sans-serif; padding: 24px; }
  .auth-card { width: 100%; max-width: 400px; background: #FFFFFF; border: 1px solid #E7E6EE; border-radius: 24px; padding: 40px; box-shadow: 0 30px 60px -30px rgba(14,13,20,0.12); }
  .auth-mark { font-family: "Instrument Serif", serif; font-style: italic; font-size: 28px; text-align: center; color: #0E0D14; margin-bottom: 28px; }
  .auth-mark b { color: #6D5BFF; font-style: normal; }
  .auth-card h1 { font-family: "Space Grotesk", sans-serif; font-weight: 700; font-size: 24px; letter-spacing: -0.02em; margin: 0 0 24px; text-align: center; color: #0E0D14; }
  .auth-error { background: #FEECEC; color: #C22; border-radius: 12px; padding: 11px 14px; font-size: 13.5px; margin-bottom: 18px; }
  .auth-form { display: flex; flex-direction: column; gap: 12px; }
  .auth-form input { border: 1px solid #E7E6EE; border-radius: 14px; padding: 15px 16px; font-size: 15px; font-family: "Hanken Grotesk", sans-serif; color: #0E0D14; outline: none; background: #fff; width: 100%; box-sizing: border-box; transition: border-color .15s; }
  .auth-form input:focus { border-color: #6D5BFF; }
  .auth-submit { border: none; cursor: pointer; background: #0E0D14; color: #fff; padding: 15px; border-radius: 999px; font-family: "Space Grotesk", sans-serif; font-size: 15.5px; font-weight: 600; margin-top: 6px; transition: background .15s, transform .15s; }
  .auth-submit:hover { background: #6D5BFF; transform: translateY(-1px); }
  .auth-switch { text-align: center; font-size: 13.5px; color: #6B6A77; margin: 22px 0 0; }
  .auth-switch a { color: #6D5BFF; font-weight: 600; text-decoration: none; }
  .auth-switch a:hover { text-decoration: underline; }
`;

export default function SignupPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div className="auth-wrap">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="auth-card">
        <div className="auth-mark">
          Carté<b>.</b>
        </div>
        <h1>Créer un compte</h1>
        {searchParams.error && (
          <p className="auth-error">{searchParams.error}</p>
        )}
        <form action={signUp} className="auth-form">
          <input name="full_name" placeholder="Nom complet" required />
          <input name="email" type="email" placeholder="E-mail" required />
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            minLength={6}
            required
          />
          <button type="submit" className="auth-submit">
            S&apos;inscrire
          </button>
        </form>
        <p className="auth-switch">
          Déjà un compte ? <Link href="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
