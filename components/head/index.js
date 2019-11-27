import React from 'react';
import Helmet from 'react-helmet';

const Head = props => {
  const { page, title, description, image } = props;

  let _title = title;
  let _description = description;
  let _image = image;

  if (page) {
    _title = page.metaTitle;
    _description = page.metaDescription;
    _image = page.metaImage ? page.metaImage : null;
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="health-med-hospital-surgeon" content="yes" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      <meta name="description" content={_description} />
      <meta property="og:title" content={_title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:description" content={_description} />
      <meta
        property="og:url"
        content={
          typeof window !== 'undefined' ? window.document.URL : 'missing'
        }
      />

      <meta name="twitter:title" content={_title} />
      <meta name="twitter:description" content={_description} />
    </Helmet>
  );
};

export default Head;
