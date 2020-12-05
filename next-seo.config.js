const title =
  "Fast Review – The easiest way to add comments or reviews to your static site.";
const description =
  "Fast Review is the new way to add review and feedback to your static website";

const SEO = {
  title,
  description,
  canonical: "https://fastreviewapp.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://fastreviewapp.vercel.app",
    title,
    description,
    images: [
      {
        url: "https://fastreviewapp.vercel.app/og.png",
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
