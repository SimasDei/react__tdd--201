import React, { Component } from 'react';

import './headline.styles.scss';

interface IProps {
  header: string;
  description: string;
}

export class Headline extends Component {
  render() {
    //@ts-ignore
    const { header, description } = this.props;

    if (!header) return null;

    return (
      <div data-test='HeadlineComponent'>
        <h1 data-test='header'>{header}</h1>
        <p data-test='description'>{description}</p>
      </div>
    );
  }
}

export default Headline;
