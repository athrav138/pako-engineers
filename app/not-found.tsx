import { FileQuestion, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Images } from "@/lib/images";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light">
      <Container className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 bg-navy/5 rounded-full animate-pulse" />
            <div className="relative w-full h-full flex items-center justify-center">
              <FileQuestion className="h-24 w-24 text-oxide" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-navy mb-4">404</h1>
          
          <h2 className="text-2xl font-semibold text-navy mb-4">
            Page Not Found
          </h2>
          
          <p className="text-ink-muted mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Please check the URL or navigate to another section of our website.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/" className="bg-oxide hover:bg-[#E64A19] text-white">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <Button href="/products" variant="outline" className="border-line text-navy hover:border-oxide bg-white">
              <Search className="mr-2 h-4 w-4" />
              Browse Products
            </Button>
          </div>

          <div className="border-t border-line pt-8">
            <p className="text-sm text-ink-muted mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <a href="/products" className="text-sm text-navy hover:text-oxide transition-colors">
                Products
              </a>
              <span className="text-ink-muted">•</span>
              <a href="/projects" className="text-sm text-navy hover:text-oxide transition-colors">
                Projects
              </a>
              <span className="text-ink-muted">•</span>
              <a href="/about" className="text-sm text-navy hover:text-oxide transition-colors">
                About Us
              </a>
              <span className="text-ink-muted">•</span>
              <a href="/contact" className="text-sm text-navy hover:text-oxide transition-colors">
                Contact
              </a>
              <span className="text-ink-muted">•</span>
              <a href="/request-quote" className="text-sm text-navy hover:text-oxide transition-colors">
                Request Quote
              </a>
            </div>
          </div>

          <p className="text-sm text-ink-muted mt-8">
            Need assistance? Contact our team at{" "}
            <a href="mailto:sales@pakoshaft.com" className="text-oxide hover:underline">
              sales@pakoshaft.com
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}