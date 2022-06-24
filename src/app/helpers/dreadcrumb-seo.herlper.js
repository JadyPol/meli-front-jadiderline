// Map breadcrumb item props and convert to structured data
module.exports.breadcrumbListSeoHelper = (breadcrumbList) => {
  const items = breadcrumbList.map((breadcrumb, index) => ({
    "position": index + 1,
    "item": {
      "name": breadcrumb.name,
      "@id": `/items?category=${breadcrumb.name}`
    },
    "@type": "ListItem"
  }));
  return {
    "@context": "http://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
}
