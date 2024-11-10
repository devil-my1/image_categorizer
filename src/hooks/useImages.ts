import { imageService } from "@/services/image.service"
import { useQuery } from "@tanstack/react-query"

export function useImages() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ["images"],
		queryFn: () => imageService.getImages(),
		refetchOnWindowFocus: true,
		refetchOnMount: true,
		refetchOnReconnect: true,
		refetchInterval: 0,
		retry: true,
		staleTime: 0
	})

	return { data, isLoading, isSuccess }
}
