import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Homepage do site</h1>
      <hr />
      <nav>
        <Link href="/portal">Acesse o portal</Link> ou{" "}
        <Link href="/portal/cadastro">Crie sua conta</Link>
      </nav>
    </main>
  );
}
