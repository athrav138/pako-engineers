import Script from 'next/script';

const isAnalyticsId = (value: string | undefined, prefix: string) =>
  typeof value === "string" && value.startsWith(prefix) && /^[A-Z0-9-]+$/i.test(value);

export function Analytics() {
  const gaId = isAnalyticsId(process.env.NEXT_PUBLIC_GA_ID, "G-")
    ? process.env.NEXT_PUBLIC_GA_ID
    : undefined;
  const clarityId = isAnalyticsId(process.env.NEXT_PUBLIC_CLARITY_ID, "")
    ? process.env.NEXT_PUBLIC_CLARITY_ID
    : undefined;

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {clarityId && (
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  );
}
