import { Helmet } from 'react-helmet-async';

const SEOHead = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogType = 'website'
}) => {
    const siteTitle = 'AI7Miao 智能作业辅导';
    const fullTitle = title ? `${title} - ${siteTitle}` : siteTitle;
    const baseUrl = 'https://ai7miao.com';
    const canonical = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={`${baseUrl}/og-image.png`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={fullTitle} />
            {description && <meta property="twitter:description" content={description} />}
            <meta property="twitter:image" content={`${baseUrl}/og-image.png`} />
        </Helmet>
    );
};

export default SEOHead;
