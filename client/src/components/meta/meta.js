import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

import img4 from '../../images/portfolio_background.jpg';

class Meta extends Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <title>Portfolio</title>
            <meta id="meta-description" name="description" content="Some description." />
            <meta id="og-title" property="og:title" content="Jessen Portfolio" />
            <meta id="og-image" property="og:image" content={img4} />
          </MetaTags>
        </div>
      )
  }
}

export default Meta;