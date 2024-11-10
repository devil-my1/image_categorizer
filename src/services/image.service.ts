import axios from "axios"
import { Image } from "@/types/image.type"

axios.defaults.baseURL =
	"https://ikiu54bife.execute-api.ap-northeast-1.amazonaws.com/dev"

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
