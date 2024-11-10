import { imageService } from "@/services/image.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export function useUploadImage() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ["uploadImage"],
		mutationFn: (data: Blob) => imageService.uploadImage(data),
		onSuccess: () => {
			setTimeout(() => {
				queryClient.invalidateQueries({
					queryKey: ["images"]
				})
				queryClient.refetchQueries({
					queryKey: ["images"]
				})
				toast.success("Image uploaded successfully")
			}, 5000)
		}
	})

	return {
		mutate,
		isPending
	}
}
