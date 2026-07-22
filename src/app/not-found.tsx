import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="page-hero">
            <h1>404 - Page Not Found</h1>
            <p className="lead">
              The page you are looking for does not exist. <a href="/">Back to home</a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
