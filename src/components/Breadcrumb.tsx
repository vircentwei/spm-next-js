import type { Crumb } from "@/lib/site";

export default function Breadcrumb({ parents, current }: { parents: Crumb[]; current: string }) {
  const chain: Crumb[] = [{ name: "Home", url: "/" }, ...parents];
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol>
          {chain.map(({ name, url }) => (
            <li key={url}>
              <a href={url}>{name}</a>
            </li>
          ))}
          <li aria-current="page">{current}</li>
        </ol>
      </div>
    </nav>
  );
}
