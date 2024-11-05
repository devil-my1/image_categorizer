"use client"

import React, { useState } from "react"
import axios from "axios"
import styles from "./image.module.scss"

export default function ImageUpload() {
	const [file, setFile] = useState<File | null>(null)

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) setFile(e.target.files[0])
	}

	const handleUpload = async () => {
		if (!file) return

		try {
			const formData = new FormData()
			formData.append("file", file)

			const response = await axios.post(
				"https://your-api-id.execute-api.region.amazonaws.com/prod/upload",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data"
					}
				}
			)

			console.log("Image uploaded successfully:", response.data)
		} catch (error) {
			console.error("Error uploading image:", error)
		}
	}

	return (
		<div className={styles.upload_form}>
			<input
				type='file'
				onChange={handleFileChange}
			/>
			<button onClick={handleUpload}>Upload</button>
		</div>
	)
}
