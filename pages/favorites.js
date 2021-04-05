import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import styled from "styled-components"

import { removeFavoriteVideo } from "../redux/appReducer"
import { getFavoritesVideos } from "../redux/appSelectors"
import { Header, Video, Icon, Delete, Wrapper, HeaderFlex } from "./../styles/styles"

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

export default function Favorites() {
	const dispatch = useDispatch()
	const favorites = useSelector(getFavoritesVideos)

	return (
		<>
			<header>
				<Header>
					<Wrapper>
						<HeaderFlex>
							<h3>Favorites</h3>
						</HeaderFlex>
					</Wrapper>
				</Header>
			</header>
			<Video>
				{favorites &&
					favorites.map((video) => {
						return (
							<VideoItem key={video._id}>
								<Title>{video.title}</Title>
								<Link href={video.url}>
									<img src={video.preview.medium} alt={video.title} />
								</Link>
								<Icon onClick={() => dispatch(removeFavoriteVideo(video))}>
									<Delete />
								</Icon>
							</VideoItem>
						)
					})}
			</Video>
		</>
	)
}
