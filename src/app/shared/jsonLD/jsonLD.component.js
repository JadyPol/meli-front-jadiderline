import React from 'react';

// Create JsonLd script data
const JsonLdComponent = ({ data }) => <script data-testid="jsonLD" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;

export default JsonLdComponent;