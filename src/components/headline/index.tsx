import React, { Component } from 'react';

import { IProps } from './headline.types';
import './headline.styles.scss';

export class Headline extends Component<IProps> {
  render() {
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
