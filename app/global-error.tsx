"use client";

import { useEffect } from "react";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background-light p-4">
          <div className="max-w-md w-full text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-6">
              <AlertCircle className="h-10 w-10 text-red-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-navy mb-4">Critical Error</h1>
            
            <p className="text-ink-muted mb-6 leading-relaxed">
              A critical error occurred. Please refresh the page or contact support if the problem persists.
            </p>

            <div className="bg-white border border-line rounded-lg p-4 mb-8 text-left">
              <p className="text-sm text-ink-muted font-mono">
                Error: {error.message || "Application failed to load"}
              </p>
              {error.digest && (
                <p className="text-xs text-ink-muted mt-2 font-mono">
                  Error ID: {error.digest}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.location.reload()} className="bg-oxide hover:bg-[#E64A19] text-white">
                Refresh Page
              </Button>
              <Button href="/" variant="outline" className="border-line text-navy hover:border-oxide bg-white">
                <Home className="mr-2 h-4 w-4" />
                Go to Home
              </Button>
            </div>

            <p className="text-sm text-ink-muted mt-8">
              For immediate assistance, please call us at{" "}
              <a href="tel:+919921854252" className="text-oxide hover:underline">
                +91-9921854252
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}