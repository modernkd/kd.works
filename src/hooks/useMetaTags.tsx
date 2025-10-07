import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export const MetaTags = ({ title, description, image, url }: MetaTagsProps) => {
  const fullTitle = `${title} | kd davis`;
  const fullUrl = url ? `https://kd.works${url}` : 'https://kd.works';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://kd.works${image}`} />
      <meta property="og:site_name" content="kd davis" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://kd.works${image}`} />
    </Helmet>
  );
};
