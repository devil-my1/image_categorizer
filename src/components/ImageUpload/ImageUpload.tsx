"use client"
import React, { useState } from "react"
import styles from "./image.module.scss"
import { useUploadImage } from "./useUploadImage"
import Loader from "@/components/ui/Loader"

export default function ImageUpload() {
	const [file, setFile] = useState<File | null>(null)
	const [fileName, setFileName] = useState<string>("No file chosen")
	const { mutate, isPending } = useUploadImage()

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0])
			setFileName(e.target.files[0].name)
		}
	}

	const handleUpload = async () => {
		if (!file) return

		try {
			const reader = new FileReader()
			reader.onloadend = async () => {
				if (reader.result) {
					// Create a Blob from the ArrayBuffer
					const blob = new Blob([reader.result], { type: "image/jpeg" })
					mutate(blob)
					setFile(null)
					setFileName("No file chosen")
				}
			}
			reader.readAsArrayBuffer(file) // Read the file as ArrayBuffer
		} catch (error) {
			console.log("Error uploading image:", error)
		}
	}

	return (
		<div className={styles.upload_form}>
			<label
				htmlFor='file-upload'
				className={`${styles.custom_file_upload} ${styles.button}`}
			>
				Choose File
			</label>
			<input
				id='file-upload'
				type='file'
				onChange={handleFileChange}
				style={{ display: "none" }}
			/>
			<span className={styles.file_name}>{fileName}</span>
			<button
				disabled={!file}
				onClick={handleUpload}
				className={`${styles.upload_button} ${styles.button}`}
			>
				{isPending ? <Loader /> : "Upload"}
			</button>
		</div>
	)
}
