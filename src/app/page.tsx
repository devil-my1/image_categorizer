import ImageUpload from "@/components/ImageUpload/ImageUpload"
import ImageGallery from "@/components/Gallery/ImageGallery"

export default function ChatInterface() {
	return (
		<div className='app-container'>
			<h1>Image Gallery with AWS</h1>
			<ImageUpload />
			<ImageGallery />
		</div>
	)
}
