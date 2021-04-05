import styled from "styled-components"

export const Star = ({ fill }) => {
	return (
		<svg
			height="20"
			viewBox="0 -10 511.98685 511"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
			fill={fill ? fill : "none"}
			stroke="#F7D372"
			strokeWidth="30"
		>
			<path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" />
		</svg>
	)
}

export const Delete = () => {
	return (
		<svg
			height="20"
			width="20"
			enable-background="new 0 0 32 32"
			version="1.1"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Cancel">
				<path
					clip-rule="evenodd"
					d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z"
					fill="#F7D372"
					fill-rule="evenodd"
				/>
				<path
					clip-rule="evenodd"
					d="M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z"
					fill="#F7D372"
					fill-rule="evenodd"
				/>
			</g>
		</svg>
	)
}

export const Wrapper = styled.div`
	max-width: 960px;
	padding: 0 10px;
	margin: 0 auto;
`

export const Input = styled.input`
	width: 100px;
`

export const Header = styled.div`
	border: 1px solid #fefefe;
	background-color: #f7f7f7;
`
export const HeaderFlex = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 50px;
`

export const Video = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 10px;
`
export const Title = styled.div`
	display: none;
	position: absolute;
	text-align: center;
	top: 50%;
	right: 0;
	left: 0;
	margin: auto;
	color: #eee9e4;
`
export const VideoItem = styled.div`
	position: relative;
	&:hover ${Title} {
		display: block;
	}
`

export const Icon = styled.div`
	cursor: pointer;
	position: absolute;
	bottom: 10px;
	right: 10px;
	z-index: 999;
`
