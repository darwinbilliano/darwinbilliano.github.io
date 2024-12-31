import type ArticlesModel from "@/models/articles";
import loader from "@/utils/loader";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles",
};

export default async function ArticlesPage() {
  const model = await loader.loadAsync<ArticlesModel>("articles.yaml");
  return (
    <main className="items-center">
      <section className="w-full max-w-2xl">
        <h1 className="font-bold text-2xl text-center">Articles</h1>
        <br />
        <Articles model={model} />
      </section>
    </main>
  );
}

function Articles({ model }: { model: ArticlesModel }) {
  return (
    <ul className="flex flex-col gap-8">
      {model.articles.map(({ href, title, description }) => (
        <li key={href}>
          <Link href={href}>
            <div className="p-8 bg-slate-light border rounded">
              <h2 className="font-bold">{title}</h2>
              <p>{description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
