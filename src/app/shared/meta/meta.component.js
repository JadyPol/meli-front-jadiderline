import React from 'react';
import MetaTags from 'react-meta-tags';

import JsonLdComponent from '../jsonLD/jsonLD.component';

export default class MetaComponent extends React.Component {
  // Component to render JsonLdComponent (SEO) and other meta tags
  render() {
    return (
      <MetaTags>
        <title>{this.props.title}</title>
        <meta property="og:type" content="website" />
        <meta name="description" content={this.props.description} />
        <meta name="title" content={this.props.title} />
        <meta name="og:description" content={this.props.description} />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content={"content"} />
        { this.props.jsonLd && <JsonLdComponent data={this.props.jsonLd} />}
      </MetaTags>
    )
  }
}