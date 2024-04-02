// src/utils/imageLoader.js

// Import all images from the images folder
function importAllImages() {
  const images = {};
  const importAll = (r) => {
    r.keys().forEach((key) => {
      images[key.replace('./', '')] = r(key).default;
    });
  };
  importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
  return images;
}

// Export the bundled images
export const images = importAllImages();
