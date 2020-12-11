import { NextSeo } from 'next-seo'

export default function Page({ name, path, children }) {
  const title = `Fast Review – ${name}`
  const url = `https://fastreviewapp.vercel.app${path}`

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </>
  )
}
