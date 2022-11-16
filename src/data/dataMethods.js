const getImagePath = (imageName) => {
  return new URL(`../assets/img/${imageName}`, import.meta.url).href
};

export {getImagePath};