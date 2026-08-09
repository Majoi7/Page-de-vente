export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-primary text-slate-400 text-center text-sm">
      <p>© {new Date().getFullYear()} — Tous droits réservés.</p>
    </footer>
  );
}