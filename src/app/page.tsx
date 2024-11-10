import ImageUpload from "@/components/ImageUpload/ImageUpload"
import ImageGallery from "@/components/Gallery/ImageGallery"

export default function GalleryPage() {
	return (
		<div className='app-container'>
			<ImageUpload />
			<ImageGallery />
		</div>
	)
}
