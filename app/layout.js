import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from '@/components/providers';

export const metadata = {
  metadataBase: new URL('https://www.bulsoft.com'),
  title: {
    default: 'Bulsoft | Enterprise Quality Assurance Solutions',
    template: '%s | Bulsoft',
  },
  description: 'Enterprise-grade quality assurance solutions combining AI-powered innovation with 15+ years of expertise. Specializing in AI agent testing, automation testing, and comprehensive QA services for global enterprises.',
  keywords: [
    'quality assurance',
    'QA testing',
    'AI agent testing',
    'automation testing',
    'software testing',
    'test automation',
    'AI testing',
    'performance testing',
    'security testing',
    'enterprise QA',
    'BFSI testing',
    'telecom testing',
    'healthcare testing',
    'FinTech testing',
    'SaaS testing',
    'Bulsoft',
  ],
  authors: [{ name: 'Bulsoft' }],
  creator: 'Bulsoft',
  publisher: 'Bulsoft',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bulsoft.com',
    siteName: 'Bulsoft',
    title: 'Bulsoft | Enterprise Quality Assurance Solutions',
    description: 'Enterprise-grade quality assurance solutions combining AI-powered innovation with 15+ years of expertise. Trusted by 200+ global companies.',
    images: [
      {
        url: '/favicon.svg',
        width: 42,
        height: 42,
        alt: 'Bulsoft Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulsoft | Enterprise Quality Assurance Solutions',
    description: 'Enterprise-grade quality assurance solutions combining AI-powered innovation with 15+ years of expertise.',
    images: ['/favicon.svg'],
    creator: '@bulsoft',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://www.bulsoft.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Bulsoft',
              url: 'https://www.bulsoft.com',
              logo: 'https://www.bulsoft.com/favicon.svg',
              description: 'Enterprise-grade quality assurance solutions combining AI-powered innovation with 15+ years of expertise.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-201-308-3005',
                contactType: 'Customer Service',
                email: 'info@bulsoft.com',
                areaServed: 'Worldwide',
                availableLanguage: ['English'],
              },
              address: [
                {
                  '@type': 'PostalAddress',
                  streetAddress: '2 North Market Street, Suite #400',
                  addressLocality: 'San Jose',
                  addressRegion: 'California',
                  postalCode: '95113',
                  addressCountry: 'US',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress: '65 Chulia Street, #46-00 OCBC Centre',
                  addressLocality: 'Singapore',
                  postalCode: '049513',
                  addressCountry: 'SG',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'B-4/5, Sector 63',
                  addressLocality: 'Noida',
                  addressRegion: 'UP',
                  postalCode: '201301',
                  addressCountry: 'IN',
                },
              ],
              sameAs: [
                'https://www.linkedin.com/company/bulsoft',
                'https://twitter.com/bulsoft',
                'https://github.com/bulsoft',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '200',
              },
            }),
          }}
        />
      </head>
      <body>
        <Script src="https://assets.emergent.sh/scripts/emergent-main.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/rrweb@latest/dist/rrweb.min.js" strategy="afterInteractive" />
        <Script src="https://d2adkz2s9zrlge.cloudfront.net/rrweb-recorder-20250919-1.js" strategy="afterInteractive" />
        <Script
          id="posthog-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !(function (t, e) {
                var o, n, p, r;
                e.__SV ||
                    ((window.posthog = e),
                    (e._i = []),
                    (e.init = function (i, s, a) {
                        function g(t, e) {
                            var o = e.split(".");
                            2 == o.length && ((t = t[o[0]]), (e = o[1])),
                                (t[e] = function () {
                                    t.push(
                                        [e].concat(
                                            Array.prototype.slice.call(
                                                arguments,
                                                0,
                                            ),
                                        ),
                                    );
                                });
                        }
                        ((p = t.createElement("script")).type =
                            "text/javascript"),
                            (p.crossOrigin = "anonymous"),
                            (p.async = !0),
                            (p.src =
                                s.api_host.replace(
                                    ".i.posthog.com",
                                    "-assets.i.posthog.com",
                                ) + "/static/array.js"),
                            (r =
                                t.getElementsByTagName(
                                    "script",
                                )[0]).parentNode.insertBefore(p, r);
                        var u = e;
                        for (
                            void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
                                u.people = u.people || [],
                                u.toString = function (t) {
                                    var e = "posthog";
                                    return (
                                        "posthog" !== a && (e += "." + a),
                                        t || (e += " (stub)"),
                                        e
                                    );
                                },
                                u.people.toString = function () {
                                    return u.toString(1) + ".people (stub)";
                                },
                                o =
                                    "init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric".split(
                                        " ",
                                    ),
                                n = 0;
                            n < o.length;
                            n++
                        )
                            g(u, o[n]);
                        e._i.push([i, s, a]);
                    }),
                    (e.__SV = 1));
            })(document, window.posthog || []);
            posthog.init("phc_yJW1VjHGGwmCbbrtczfqqNxgBDbhlhOWcdzcIJEOTFE", {
                api_host: "https://us.i.posthog.com",
                person_profiles: "identified_only",
            });
            `,
          }}
        />
        <Providers>
          <div className="App">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
