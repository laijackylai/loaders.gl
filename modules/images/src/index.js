export {default as ImageLoader} from './image-loader';
export {default as ImageWriter} from './image-writer';

// IMAGE CATEGORY API

// Binary Image API
export {getBinaryImageMetadata} from './lib/category-api/binary-image-api';

// Parsed Image API
export {isImageTypeSupported, getDefaultImageType} from './lib/category-api/image-type';

export {
  isImage,
  getImageType,
  getImageSize,
  getImageData
} from './lib/category-api/parsed-image-api';

// DEPRECATED - Remove in V3 (fix dependency in luma.gl)
export {loadImage} from './lib/texture-api/load-image';
