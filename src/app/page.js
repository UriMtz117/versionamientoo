import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Proyecto de Versionamiento con Next.js y GitHub</h1>

      <p>
        Este proyecto fue creado para practicar una estrategia de versionamiento
        usando ramas, commits y Pull Requests.
      </p>

      <h2>Integrantes del equipo</h2>

      <ul>
        <li>
          <Link href="/milton">Whos-Milton-Bruh</Link>
        </li>
        <li>
          <Link href="/rafael">Rafa3312</Link>
        </li>
        <li>
          <Link href="/esryil">Esryil</Link>
        </li>
      </ul>
    </main>
  );
}