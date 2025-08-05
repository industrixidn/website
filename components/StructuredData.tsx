import Head from 'next/head'

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'Article'
  data: Record<string, any>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    }

    if (type === 'Organization') {
      return {
        ...baseData,
        name: 'Industrix',
        url: 'https://industrix.id',
        logo: 'https://industrix.id/logo.svg',
        description: 'Digital infrastructure powering Indonesia\'s industrial transformation through IoT, automation, and smart operations.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Indonesia'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'info@industrix.id'
        },
        sameAs: [
          'https://linkedin.com/company/industrix',
          'https://twitter.com/industrixid'
        ],
        ...data
      }
    }

    if (type === 'WebSite') {
      return {
        ...baseData,
        name: 'Industrix - Industrial Digital Transformation',
        url: 'https://industrix.id',
        description: 'Transform your industrial operations with smart digital solutions for manufacturing, logistics, and industrial processes.',
        publisher: {
          '@type': 'Organization',
          name: 'Industrix'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://industrix.id/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        ...data
      }
    }

    return baseData
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData())
        }}
      />
    </Head>
  )
}