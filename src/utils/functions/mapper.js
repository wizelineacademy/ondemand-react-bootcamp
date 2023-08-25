export function productCategoryToCard(data) {
  return data.results.map((image) => {
    return {
      id: image.id,
      key: image.id,
      name: image.data.name,
      description: image.data.description,
      image: image.data.main_image.url,
    };
  });
}

export function featuredProductsToCard(data) {
  return data.results.map((image) => {
    return {
      id: image.id,
      key: image.id,
      name: image.data.name,
      description: image.data.description[0].text,
      image: image.data.mainimage.url,
    };
  });
}

export function allProductsToCard(data) {
  return data.results.map((image) => {
    return {
      id: image.id,
      key: image.id,
      name: image.data.name,
      description: image.data.description[0].text,
      image: image.data.mainimage.url,
    };
  });
}
