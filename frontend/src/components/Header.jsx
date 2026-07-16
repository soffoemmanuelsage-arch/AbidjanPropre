import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-green-600">
          🌿 AbidjanPropre
        </h1>

        <nav className="flex gap-8 font-medium">
          <Link to="/" className="hover:text-green-600">
            Accueil
          </Link>

          <Link to="/carte" className="hover:text-green-600">
            Carte
          </Link>

          <Link to="/signaler" className="hover:text-green-600">
            Signaler
          </Link>

          <Link to="/a-propos" className="hover:text-green-600">
            À propos
          </Link>
        </nav>

        <Link
          to="/connexion"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Connexion
        </Link>

      </div>
    </header>
  );
}