import { Helmet } from 'react-helmet-async';

/**
 * Props for the MetaTags component.
 */
interface MetaTagsProps {
  /** The page title (will be prefixed with " | kd davis"). */
  title: string;
  /** The meta description for SEO. */
  description: string;
  /** The image URL for social media sharing (relative to kd.works domain). */
  image: string;
  /** Optional URL path for the page (defaults to root if not provided). */
  url?: string;
}

/**
 * Component that sets meta tags for SEO and social media sharing using React Helmet.
 * @param {MetaTagsProps} props - The props for the MetaTags component.
 * @returns {JSX.Element} The Helmet component with meta tags.
 */
export const MetaTags = ({ title, description, image, url }: MetaTagsProps) => {
  const fullTitle = `${title} | kd davis`;
  const fullUrl = url ? `https://kd.works${url}` : 'https://kd.works';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://kd.works${image}`} />
      <meta property="og:site_name" content="kd davis" />
      <meta property="og:locale" content="en_US" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://kd.works${image}`} />
    </Helmet>
  );
};
