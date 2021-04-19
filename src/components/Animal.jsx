import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Seo from './Seo';
import GatsbyImageData from '../types/GatsbyImageData';

function Animal({ animal, image, body, preview }) {
  return (
    <div>
      {!preview ? (
        <Seo title={animal.title} description={animal.excerpt} image={image.src} />
      ) : null}
      <div className="mb-6">
        <Hero image={image} preview={preview} alt={animal.title} />
      </div>
      <div className="max-w-xl w-full mx-auto mb-3">
        <div className="text-gray-600 uppercase font-medium leading-tight tracking-tight -mb-2">
          {animal.category}
        </div>
        <h2 className="text-5xl font-bold text-gray-800 tracking-tight leading-tight">
          {animal.title}
        </h2>
      </div>
      <div className="max-w-xl w-full mx-auto mb-40">
        {!preview ? (
          <article
            className="prose-sm sm:prose lg:prose-xl"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: body }}
          />
        ) : (
          <article className="sm:prose lg:prose-xl prose-sm">{body}</article>
        )}
      </div>
    </div>
  );
}

Animal.defaultProps = {
  preview: false,
};

Animal.propTypes = {
  animal: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    excerpt: PropTypes.string,
  }).isRequired,
  body: PropTypes.string.isRequired,
  image: GatsbyImageData.isRequired,
  preview: PropTypes.bool,
};

export default Animal;
