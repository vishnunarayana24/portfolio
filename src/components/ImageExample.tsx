import { getImageUrl } from "@/lib/utils"

interface ImageExampleProps {
  imageName: string
  altText: string
  className?: string
}

export function ImageExample({ imageName, altText, className }: ImageExampleProps) {
  return (
    <div className="p-4">
      <img
        src={getImageUrl(imageName)}
        alt={altText}
        className={className}
      />
    </div>
  )
} 