const about = searchQuery => `Encuentra lo que buscas para ${searchQuery}`;

// Map result search props and convert to structured data
module.exports.resultsSeoHelper = (searchURL, searchQuery) => {
  return {
    "@context": "http://schema.org/",
    "@graph": [
      {
        "@type": "SearchResultsPage",
        "id": searchURL,
        "name": searchQuery,
        "about": about(searchQuery)
      },
    ]
  };
}

module.exports.aboutSeoMessage = about;
