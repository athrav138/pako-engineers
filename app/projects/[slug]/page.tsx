import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getAllProducts, getProductBySlug } from "@/lib/content/products";
import { getProjectPage, getProjectPages } from "@/lib/content/projects";
import { company } from "@/lib/content/company";

export function generateStaticParams() {
  return getProjectPages().map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getProjectPage(slug);

  if (!page) {
    return { title: "Project Not Found | Pako Engineers" };
  }

  return {
    title: `${page.title} | Pako Engineers Projects`,
    description: page.description,
    alternates: { canonical: `/projects/${page.slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getProjectPage(slug);
  if (!page) notFound();

  const relatedProducts = (page.relatedProductSlugs ?? [])
    .map((productSlug) => getProductBySlug(productSlug))
    .filter((product): product is ReturnType<typeof getAllProducts>[number] => Boolean(product));

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `https://pakoshaft.com/projects/${page.slug}`,
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: company.links.website,
      logo: `https://pakoshaft.com${company.logo}`,
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: company.links.website,
    email: company.contact.email,
    telephone: company.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: "Sangli",
      addressRegion: "Maharashtra",
      postalCode: "416308",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        backgroundImage={page.image}
      />
      <Breadcrumb items={[{ label: "Projects", href: "/projects" }, { label: page.title, href: `/projects/${page.slug}` }]} />

      <main>
        <section className="bg-white py-16 lg:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Overview</p>
                <h2 className="mb-5 font-display text-3xl font-bold text-navy">Project Scope</h2>
                <p className="text-lg leading-relaxed text-ink-muted">{page.overview}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-6">
                <h3 className="mb-4 font-display text-xl font-bold text-navy">Project Navigation</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {page.links.map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center justify-between rounded-lg border border-line bg-white px-4 py-3 text-sm font-semibold text-navy transition hover:border-oxide hover:text-oxide">
                      {link.label}
                      <ArrowRight size={15} />
                    </Link>
                  ))}
                </div>
                <p className="mt-5 rounded-lg bg-white p-4 text-sm text-ink-muted">
                  Documents & Drawings: Available Upon Request
                </p>
              </div>
            </div>
          </Container>
        </section>

        {page.sections.length > 0 && (
          <section className="bg-background-light py-16 lg:py-24">
            <Container>
              <div className="grid gap-6 md:grid-cols-2">
                {page.sections.map((section) => (
                  <article key={section.title} className="rounded-xl border border-line bg-white p-6 shadow-sm">
                    <h2 className="mb-4 font-display text-2xl font-bold text-navy">{section.title}</h2>
                    {section.body && <p className="leading-relaxed text-ink-muted">{section.body}</p>}
                    {section.items && (
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                            <CheckCircle2 className="mt-0.5 shrink-0 text-oxide" size={18} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}

        {page.gallery && (
          <section className="bg-white py-16 lg:py-24">
            <Container>
              <div className="mb-10">
                <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Gallery</p>
                <h2 className="font-display text-3xl font-bold text-navy">Manufacturing Environment</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {page.gallery.map((item) => (
                  <figure key={item.title} className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                    <div className="relative aspect-[4/3]">
                      <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <figcaption className="p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-oxide">{item.category}</p>
                      <p className="mt-1 font-bold text-navy">{item.title}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Container>
          </section>
        )}

        {page.industrySolutions && (
          <section className="bg-background-light py-16 lg:py-24">
            <Container>
              <div className="mb-10 max-w-2xl">
                <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Industries</p>
                <h2 className="font-display text-3xl font-bold text-navy">Industrial Solution Cards</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {page.industrySolutions.map((solution) => (
                  <article key={solution.industry} className="rounded-xl border border-line bg-white p-5 shadow-sm">
                    <h3 className="mb-4 font-display text-xl font-bold text-navy">{solution.industry}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-oxide">Challenge</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{solution.challenge}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-oxide">Solution</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{solution.solution}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-oxide">Products Used</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{solution.productsUsed.join(", ")}</p>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}

        {relatedProducts.length > 0 && (
          <section className="bg-white py-16 lg:py-24">
            <Container>
              <div className="mb-10">
                <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">Related Products</p>
                <h2 className="font-display text-3xl font-bold text-navy">Components Used in Similar Work</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} className="group overflow-hidden rounded-xl border border-line bg-white shadow-sm transition hover:border-oxide">
                    <div className="relative aspect-[4/3] bg-surface">
                      <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-oxide">{product.category}</p>
                      <h3 className="mt-2 font-display text-lg font-bold text-navy">{product.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{product.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}

        {page.faqs && (
          <section className="bg-background-light py-16 lg:py-24">
            <Container>
              <div className="max-w-3xl">
                <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-oxide">FAQ</p>
                <h2 className="mb-8 font-display text-3xl font-bold text-navy">Common Questions</h2>
                <div className="space-y-4">
                  {page.faqs.map((faq) => (
                    <details key={faq.question} className="rounded-xl border border-line bg-white p-5">
                      <summary className="cursor-pointer font-bold text-navy">{faq.question}</summary>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}

        <section className="bg-white py-16 lg:py-24">
          <Container className="flex flex-col gap-4 sm:flex-row">
            <Button href="/request-quote" size="lg">Request RFQ</Button>
            <Button href="/contact" variant="outline" size="lg">Contact Engineering</Button>
            <Button href="/products" variant="outline" size="lg">View Products</Button>
          </Container>
        </section>
      </main>

      <CTABand
        title={`Discuss ${page.title.toLowerCase()}`}
        description="Share your drawing, material grade, quantity and documentation requirements for a manufacturing review."
      />
    </>
  );
}
