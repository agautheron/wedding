import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

import generateBgGradient from './../utils/generateBgGradient';

export default class HeroImage extends Component {
  render() {
    return (
      <Fragment>
        <HeroImageWrapper {...this.props}>
          <ChildrenWrapper
            style={{...this.props.childrenStyles}}
            >
            {this.props.children}
          </ChildrenWrapper>
        </HeroImageWrapper>
      </Fragment>
    );
  }
}

const heroProps = ['imageSrc', 'gradientDirection', 'childrenStyles', 'parallax', 'textPosition', 'color', 'opacity', 'height'];

const HeroImageWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !heroProps.includes(prop)
})`
	align-items: center;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	position: relative;
	text-align: center;
	width: 100vw;
	height: ${props => props.height};

	/* Determine parallax behavior based on our 'parallax' prop */
	background-attachment: ${props =>
		props.parallax ? 'fixed' : 'scroll'};

	/* Dynamically set this property based on our 'textPosition' prop */
	justify-content: ${props => {
  switch (props.textPosition) {
    case 'center':
      return 'center';
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
}};

	/* 
		We stitch together our background-image property by generating a gradient (util function) 
		and getting the 'imageSrc' prop value 
	*/
	background-image: ${props =>
			generateBgGradient(
				props.gradientDirection,
				props.color,
				props.opacity
			)},
		url(${props => props.imageSrc});
`;

const ChildrenWrapper = styled.div``;
