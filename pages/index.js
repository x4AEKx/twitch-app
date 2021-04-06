import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"

import { setFavoriteVideo, setVideosThunk } from "../redux/appReducer"
import { getFavoritesVideos, getVideos } from "../redux/appSelectors"
import {
	Header,
	Video,
	Icon,
	Star,
	Input,
	Wrapper,
	HeaderFlex,
	Title,
	VideoItem,
} from "./../styles/styles"

export default function App() {
	const videos = useSelector(getVideos)
	const favorites = useSelector(getFavoritesVideos)
	const dispatch = useDispatch()
	const [value, setValue] = useState("")

	const handleClick = (event) => {
		event.preventDefault()
		dispatch(setVideosThunk(value))
	}

	return (
		<>
			<header>
				<Header>
					<Wrapper>
						<HeaderFlex>
							<div>
								<label htmlFor="search">Введите название канала</label>
								<Input
									value={value}
									onChange={(e) => setValue(e.target.value)}
									name="search"
									type="text"
								/>
								<button onClick={handleClick}>Найти</button>
							</div>
							<Link href="/favorites">
								<a>
									Favorites <Star fill="#F7D372" />
								</a>
							</Link>
						</HeaderFlex>
					</Wrapper>
				</Header>
			</header>
			<main>
				<Wrapper>
					<Video>
						{videos &&
							videos.map((video) => {
								return (
									<VideoItem key={video._id}>
										<Title>{video.title}</Title>
										<Link href={video.url}>
											<img src={video.preview.medium} alt={video.title} />
										</Link>
										<Icon onClick={() => dispatch(setFavoriteVideo(video))}>
											<Star
												fill={favorites.some((item) => item._id === video._id) ? "yellow" : "none"}
											/>
										</Icon>
									</VideoItem>
								)
							})}
					</Video>
				</Wrapper>
			</main>
		</>
	)
}
