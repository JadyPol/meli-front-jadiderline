// Map detail item props and convert to structured data
module.exports.productDetailSeoHelper = (detail) => {
  return {
    "@context": "http://schema.org/",
    "@type": "Product",
    "productID": detail.id,
    "name": detail.title,
    "image": detail.picture,
    "offers": {
      "price": detail.price?.amount,
      "availability": "http:\u002F\u002Fschema.org\u002FInStock",
      "url": detail.permalink,
      "@type": "Offer",
      "priceCurrency": detail.price?.currency
    },
  };
}
