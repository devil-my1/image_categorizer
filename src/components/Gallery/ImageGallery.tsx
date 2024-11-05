"use client"

import React, { useEffect, useState } from "react"
import styles from "./gallery.module.scss"
import axios from "axios"

interface Image {
	imageUrl: string
	labels: string[]
}

axios.defaults.baseURL =
	"https://ikiu54bife.execute-api.ap-northeast-1.amazonaws.com/dev"
axios.defaults.headers.common["Content-Type"] = "application/json"

export default function ImageGallery() {
	const [images, setImages] = useState<Image[]>([])
	const [searchTag, setSearchTag] = useState("")

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await axios.get("/images")
				setImages(response.data)
			} catch (error) {
				console.log("Error fetching images:", error)
			}
		}

		fetchImages()
	}, [])

	console.log(images)

	const filteredImages = searchTag
		? images.filter(img => img.labels.includes(searchTag))
		: images

	return (
		<div className={styles.gallery}>
			<input
				type='text'
				placeholder='Search by tag'
				value={searchTag}
				onChange={e => setSearchTag(e.target.value)}
			/>
			<div className={styles.image_grid}>
				{filteredImages.map((img, index) => (
					<div
						key={index}
						className={styles.image_card}
					>
						<img
							src={img.imageUrl}
							alt='Uploaded'
						/>
						<div className={styles.tags}>
							{img.labels.map(label => (
								<span
									key={label}
									className={styles.tag}
								>
									{label}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
