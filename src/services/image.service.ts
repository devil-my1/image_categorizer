import axios from "axios"
import { Image } from "@/types/image.type"

axios.defaults.baseURL = process.env.BASE_API_URL

class ImageService {
	async getImages() {
		const resp = await axios.get<Image[]>("/images")
		return resp.data
	}

	async uploadImage(data: Blob) {
		const resp = await axios.post("/upload-img", data)
		return resp.data
	}
}

export const imageService = new ImageService()
