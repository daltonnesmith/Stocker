import styled from "styled-components";
import BTCCard from "../Components/Cards";

export const AppContainer = styled.div`
	/* width: 100%;
	height: 100%; */
	background-image: linear-gradient(
		to right,
		#ffce00 50%,
		#ffce00 50%,
		#fe4880
	);
	/* width: 100vw;
	height: 100vh; */
	display: flex;
	flex-direction: column;
	justify-content: center;

	border: 1px solid black;
`;
export const LogoutButtonContainer = styled.div`
	font-size: 1rem;
	font-weight: 500;
	z-index: index 2;
	margin-bottom: 5px;
	display: flex;
	flex-direction: row-reverse;
`;

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
`;

export const InlineContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-right: 20px;
`;

export const MarginContainer = styled.div`
	margin-right: 2px;
`;
export const ChartContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	max-width: 100vh;
	/* position: relative;
	top: -100px;
	right: 0px; */
`;
export const CoinCardContainer = styled.div`
	/* display: inline-flex; */
	width: 15%;
	height: auto;
	border: 1px solid black;
	border-radius: 8px;
	background-color: #ffffff;
	box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
	margin: 10px;
	text-align: left;
	padding-right: 20px;
	font-family: arial;

	& img .ethlogo {
		max-width: 30px;
		max-height: 50px;
	}
	& img {
		max-width: 100px;
		max-height: 50px;
	}
	h4 {
		background-color: #cfcfcf;
		opacity: 1;
		margin-left: 5px;
		margin-right: 5px;
		margin-top: 5px;
		border-radius: 8px;
	}
`;

export const CoinButtonContainer = styled.div`
	/* border: 1px solid #000; */
	/* background-color: #182cdf; */
	color: #fff;
	border: none;
	/* border-radius: 10px; */
	/* box-shadow: 0px 0px 2px 2px rgb(0, 0, 0); */
	width: 10%;
	height: auto;
	display: flex;
	flex-direction: row;

	/* position: relative; */
	/* right: 195px; */
	/* top: 0px; */
`;

export const Page = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	font-size: 1rem;
	font-weight: 500;
	z-index: index 2;
	margin-bottom: 5px;
	justify-content: center;
	align-items: center;

	div {
		border-radius: 8px;
		position: relative;
		display: block;
		background-color: #ffffff;
		padding: 30px;
		z-index: 2;
		& h2 {
			color: #888;
			font-size: 28px;
			font-weight: 500;
			margin-bottom: 30px;
		}
		& div {
			border-radius: 8px;
			position: relative;
			display: block;
			background-color: #ffffff;
			padding: 30px;
			z-index: 2;
			& h2 {
				color: #888;
				font-size: 28px;
				font-weight: 500;
				margin-bottom: 30px;
			}
			display: block;
			width: 300px;
			margin-bottom: 15px;
			& label {
				color: #666;
				font-size: 28px;
				margin-bottom: 5px;
				&:focus-within {
					color: fe4880;
				}
			}
			& input {
				display: block;
				width: 100%;
				padding: 10px 15px;
				background-color: #f8f8f8;
				border-radius: 8px;
				transition: 0.4s;
			}
			&:focus input {
				box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
			}
		}
		&:after {
			content: "";
			display: block;
			/* position: absolute; */
			/* top: -5px;
			left: -5px;
			right: -5px;
			bottom: -5px; */
			z-index: 1;
			/* background-image: linear-gradient(to bottom right, #ffce00, #fe4880); */
		}
	}
`;
