"use client";

import { useEffect } from "react";
import { AlertTriangle, Package, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Products page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light p-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-6">
          <Package className="h-10 w-10 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-navy mb-4">Products Error</h1>
        
        <p className="text-ink-muted mb-6 leading-relaxed">
          We encountered an error loading our product catalogue. Please try again or contact us directly for product information.
        </p>

        <div className="bg-white border border-line rounded-lg p-4 mb-8 text-left">
          <p className="text-sm text-ink-muted font-mono">
            Error: {error.message || "Failed to load products"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-oxide hover:bg-[#E64A19] text-white">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button href="/contact" variant="outline" className="border-line text-navy hover:border-oxide bg-white">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}