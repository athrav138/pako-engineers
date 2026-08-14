"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light p-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-6">
          <AlertTriangle className="h-10 w-10 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-navy mb-4">Something Went Wrong</h1>
        
        <p className="text-ink-muted mb-6 leading-relaxed">
          We apologize for the inconvenience. An unexpected error occurred while processing your request.
        </p>

        <div className="bg-white border border-line rounded-lg p-4 mb-8 text-left">
          <p className="text-sm text-ink-muted font-mono">
            Error: {error.message || "Unknown error occurred"}
          </p>
          {error.digest && (
            <p className="text-xs text-ink-muted mt-2 font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-oxide hover:bg-[#E64A19] text-white">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button href="/" variant="outline" className="border-line text-navy hover:border-oxide bg-white">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <p className="text-sm text-ink-muted mt-8">
          If this problem persists, please contact our support team at{" "}
          <a href="mailto:sales@pakoshaft.com" className="text-oxide hover:underline">
            sales@pakoshaft.com
          </a>
        </p>
      </div>
    </div>
  );
}