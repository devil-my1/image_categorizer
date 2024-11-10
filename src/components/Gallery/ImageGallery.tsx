"use client"

import React, { useState, useRef, useEffect } from "react"
import { Image } from "@/types/image.type"
import styles from "./gallery.module.scss"
import { useImages } from "@/hooks/useImages"
import Loader from "@/components/ui/Loader"
import { X } from "lucide-react"

export default function ImageGallery() {
	const [searchTag, setSearchTag] = useState("")
	const [showModal, setShowModal] = useState(false)
	const { data: images, isLoading, isSuccess } = useImages()
	const modalRef = useRef(null) // Reference for modal content

	const allTags = Array.from(new Set(images?.flatMap(img => img.labels) || []))

	const filteredImages = searchTag
		? images?.filter(img =>
				img.labels.some(label =>
					label.toLowerCase().startsWith(searchTag.toLowerCase())
				)
			)
		: images

	// Close modal if clicking outside of the modal content
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!(modalRef.current as Node).contains(event.target as Node)
			) {
				setShowModal(false)
			}
		}

		if (showModal) {
			document.addEventListener("mousedown", handleClickOutside)
		} else {
			document.removeEventListener("mousedown", handleClickOutside)
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [showModal])

	return (
		<div className={styles.gallery}>
			<button
				onClick={() => setShowModal(true)}
				className={styles.filterButton}
			>
				Filter Tags
			</button>
			<button
				onClick={() => setSearchTag("")}
				className={styles.clear_button}
				disabled={!searchTag}
			>
				Clear
			</button>
			{showModal && (
				<div className={styles.modal}>
					<div
						className={styles.modalContent}
						ref={modalRef}
					>
						<h3>Select a Tag</h3>
						<div className={styles.tagList}>
							{allTags.map(tag => (
								<button
									key={tag}
									className={tag === searchTag ? styles.activeTag : ""}
									onClick={() => {
										setSearchTag(tag)
										setShowModal(false)
									}}
								>
									{tag}
								</button>
							))}
						</div>
						<button
							onClick={() => setShowModal(false)}
							className={styles.closeModal}
						>
							<X />
						</button>
					</div>
				</div>
			)}
			<input
				type='text'
				placeholder='Search by tag'
				value={searchTag}
				onChange={e => setSearchTag(e.target.value)}
				className={styles.searchInput}
			/>
			<div className={styles.gallery_grid}>
				{isLoading ? (
					<div className={styles.loaderContainer}>
						<Loader />
					</div>
				) : isSuccess && filteredImages && filteredImages.length > 0 ? (
					filteredImages.map((img, index) => (
						<div
							key={index}
							className={styles.image_card}
						>
							<img
								loading='lazy'
								src={img.imageUrl}
								alt='Uploaded'
							/>
						</div>
					))
				) : (
					<div className={styles.noImages}>
						<p>No images found</p>
					</div>
				)}
			</div>
		</div>
	)
}
