import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { getAvatarColor, getAvatarInitial, getAvatarUrl } from "@/lib/avatarUtils";

export interface CommitAuthorAvatarProps {
	author: { name: string; picture?: string | null; avatar?: string | null };
	size?: string;
	textSize?: string;
	rounded?: string;
}

export function CommitAuthorAvatar({
	author,
	size = "h-5 w-5",
	textSize = "text-[10px]",
	rounded = "rounded-full",
}: CommitAuthorAvatarProps) {
	const [imageState, setImageState] = useState<{
		url: string | null;
		loaded: boolean;
		error: boolean;
	}>({ url: null, loaded: false, error: false });

	const initial = getAvatarInitial(author.name ?? "U");
	const colorClass = getAvatarColor(author.name ?? "U");
	const avatarUrl = getAvatarUrl(author);
	const hasPicture = Boolean(avatarUrl);

	const isCurrentUrl = imageState.url === avatarUrl;
	const showImage = hasPicture && isCurrentUrl && imageState.loaded && !imageState.error;
	const showFallback = !hasPicture || (isCurrentUrl && imageState.error);
	const showSkeleton = hasPicture && !showImage && !showFallback;

	useEffect(() => {
		if (!hasPicture || !avatarUrl) return;

		const img = new Image();
		img.src = avatarUrl;

		img.onload = () => setImageState({ url: avatarUrl, loaded: true, error: false });
		img.onerror = () => setImageState({ url: avatarUrl, loaded: false, error: true });

		return () => {
			img.onload = null;
			img.onerror = null;
		};
	}, [avatarUrl, hasPicture]);

	return (
		<Avatar className={`${size} ${rounded} cursor-default select-none`}>
			{showSkeleton && <div className={`${size} ${rounded} bg-muted/40 animate-pulse`} />}
			{showImage && avatarUrl && (
				<AvatarImage
					src={avatarUrl}
					alt={author.name}
					referrerPolicy="no-referrer"
					className={rounded}
				/>
			)}
			{showFallback && (
				<AvatarFallback
					className={`${rounded} ${textSize} font-bold ${colorClass} cursor-default select-none`}
				>
					{initial}
				</AvatarFallback>
			)}
		</Avatar>
	);
}
