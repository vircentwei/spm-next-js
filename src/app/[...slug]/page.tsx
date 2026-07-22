import Breadcrumb from "@/components/Breadcrumb";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { BRAND, PAGES, SITE, findPage } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGES.map((p) => ({ slug: p.path.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) return {};
  const url = `${SITE}/${page.path}/`;
  return {
    title: page.title,
    description: page.desc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: BRAND,
      title: page.title,
      description: page.desc,
      url,
    },
    twitter: { card: "summary" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();

  const url = `${SITE}/${page.path}/`;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", url: "/" },
      ...page.parents,
      { name: page.h1, url: `/${page.path}/` },
    ].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: SITE + c.url,
    })),
  };
  const webpageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.desc,
    url,
    isPartOf: { "@type": "WebSite", name: BRAND, url: `${SITE}/` },
    publisher: { "@type": "Organization", name: BRAND, url: `${SITE}/` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageLd) }}
      />
      <SiteHeader currentSection={page.path.split("/")[0]} />
      <Breadcrumb parents={page.parents} current={page.h1} />
      <main>
        <div className="container">
          <section className="page-hero">
            <h1>{page.h1}</h1>
            <p className="lead">{page.desc}</p>
          </section>
          <section className="section" aria-label="Content placeholder">
            <div className="placeholder-grid">
              {[1, 2, 3].map((n) => (
                <div key={n} className="placeholder-card">
                  Content block {n}
                  <br />
                  (to be filled by module {page.mod})
                </div>
              ))}
            </div>
          </section>
          <section className="cta">
            <h2>Ready to start your custom denim project?</h2>
            <a href="/contact-us.html">Get a Quote</a>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
