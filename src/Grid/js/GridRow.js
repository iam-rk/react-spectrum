/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/

import classNames from 'classnames';
import filterDOMProps from '../../utils/filterDOMProps';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import responsive from './responsive';

/**
 * A row in a grid
 */
export default class GridRow extends Component {
  static propTypes = {
    /**
     * Fill me in and fix my prop type
     */
    align: PropTypes.any,

    /**
     * Fill me in and fix my prop type
     */
    valign: PropTypes.any,

    /**
     * Fill me in and fix my prop type
     */
    distribution: PropTypes.any,

    /**
     * Fill me in and fix my prop type
     */
    reverse: PropTypes.any,

    /**
     * Fill me in and fix my prop type
     */
    className: PropTypes.string
  };

  static defaultProps = {
    reverse: false
  };

  render() {
    const {
      align,
      children,
      valign,
      distribution,
      reverse,
      className,
      ...otherProps
    } = this.props;

    let classes = classNames(
      'spectrum-grid-row',
      responsive('spectrum-grid-#value-#size', align),
      responsive('spectrum-grid-#value-#size', valign),
      responsive('spectrum-grid-#value-#size', distribution),
      {'spectrum-grid-reverse': reverse},
      className
    );

    return (
      <div className={classes} {...filterDOMProps(otherProps)}>
        {children}
      </div>
    );
  }
}