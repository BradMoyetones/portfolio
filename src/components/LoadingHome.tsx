import { Skeleton } from "@/components/ui/skeleton"
export default function LoadingHome() {
    return (
        <div className="px-4">
            <div className="py-16">
                <div className="flex gap-4 mb-4 items-center">
                    <Skeleton className="size-16 rounded-full" />
                    <Skeleton className="h-7 max-w-44 w-full rounded-full" />
                </div>
                <div className="flex gap-4 mb-4 items-center">
                    <Skeleton className="max-w-[425px] w-full h-[62px] rounded-lg" />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                    <Skeleton className="max-w-[451px] w-full h-[25px] rounded-full" />
                    <Skeleton className="max-w-[476px] w-full h-[25px] rounded-full" />
                    <Skeleton className="max-w-[520px] w-full h-[25px] rounded-full" />
                </div>
                <div className="flex gap-2 mb-4 mt-8">
                    <Skeleton className="max-w-[139px] w-full h-9 rounded-full" />
                    <Skeleton className="max-w-[113px] w-full h-9 rounded-full" />
                </div>
            </div>
            <div className="py-10">
                <div className="flex gap-4 mb-4 items-center">
                    <Skeleton className="size-6 rounded-md" />
                    <Skeleton className="h-[38px] max-w-[273px] w-full rounded-full" />
                </div>
                <div className="grid flex-col md:flex-row gap-10 grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-1 mb-4">
                        <Skeleton className="max-w-[283px] w-full h-[28px] rounded-full" />
                        <Skeleton className="max-w-[195px] w-full h-[28px] rounded-full" />
                        <Skeleton className="max-w-[93px] w-full h-[18px] rounded-full" />
                    </div>
                    <div className="flex flex-col gap-1 mb-4">
                        <Skeleton className="max-w-[440px] w-full h-[20px] rounded-full" />
                        <Skeleton className="max-w-[430px] w-full h-[20px] rounded-full" />
                        <Skeleton className="max-w-[420px] w-full h-[20px] rounded-full" />
                        <Skeleton className="max-w-[440px] w-full h-[20px] rounded-full" />
                        <Skeleton className="max-w-[435px] w-full h-[20px] rounded-full" />
                        <Skeleton className="max-w-[95px] w-full h-[28px] rounded-full mt-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}
