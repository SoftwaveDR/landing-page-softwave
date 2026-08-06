import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        textAlign: "center",
        background: "var(--color-surface)",
      }}
    >
      <div>
        <p
          style={{
            color: "var(--color-primary)",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Error 404
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            letterSpacing: "-0.04em",
          }}
        >
          Página no encontrada
        </h1>

        <p
          style={{
            maxWidth: "540px",
            margin: "18px auto 28px",
            color: "var(--color-text-secondary)",
          }}
        >
          La dirección solicitada no existe o ha sido movida.
        </p>

        <Link
          to="/"
          className="button button--primary button--large"
          style={{ display: "inline-flex" }}
        >
          <FiArrowLeft />
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;