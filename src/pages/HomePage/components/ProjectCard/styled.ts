import styled from 'styled-components'

import { BLUE, GRAY } from 'common/styles/colors'

const BADGE_HEIGHT = '22px'
const IMAGE_HEIGHT = '240px'

export const CardContainer = styled.div`
	border-radius: 16px;
	border: 1px solid ${GRAY[200]};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 20px 16px 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Badge = styled.div`
	height: ${BADGE_HEIGHT};
	padding: 4px 12px;
	border-radius: calc(${BADGE_HEIGHT} / 2);
	color: ${GRAY.white};
	background: ${BLUE[400]};
	font-size: 12px;
	text-transform: lowercase;
`

export const Image = styled.img`
	border-radius: 12px;
	border: 3px solid ${GRAY[200]};
	width: 100%;
	height: ${IMAGE_HEIGHT};
	object-fit: contain;
	padding: 8px;
`

export const Description = styled.div`
	font-size: 16px;
	margin-bottom: 24px;
`

export const Footer = styled.div`
	margin-top: auto;
	display: flex;
	justify-content: space-between;
	font-size: 12px;
`

export const DemoLink = styled.a`
	cursor: pointer;
	transform: 0.2s all;
	border-radius:8px;
	transition: 0.2s all;	
	padding:8px 0;

	:hover{
		padding:8px 12px;
		background-color:${BLUE[100]};
	}

`