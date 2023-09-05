export function productCategoryToCard(data) {
  console.log(data);
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

export function filterProducts(data, categoriesSelected) {
  if (Object.keys(data).length === 0) return [];
  return data.results
    .filter(
      (product) =>
        categoriesSelected.size === 0 ||
        categoriesSelected.has(product.data.category.id)
    )
    .map((product) => {
      return {
        id: product.id,
        key: product.id,
        name: product.data.name,
        description: product.data.description[0].text,
        image: product.data.mainimage.url,
      };
    });
}

export function imageFromProductToCard(data) {
  return data;
}
