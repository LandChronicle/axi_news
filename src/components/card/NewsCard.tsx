import Image from 'next/image'
import CategoryLabel from '@/components/indicators/CategoryLabel'

interface NewsCardProps {
  title: string
  excerpt: string
  imageUrl: string
  publishDate: string
  category: string
  href: string
}

export default function NewsCard({
  title,
  excerpt,
  imageUrl,
  publishDate,
  category,
  href
}: NewsCardProps) {
  return (
    <div
      className="bg-white cursor-pointer w-full max-w-[559.5px] mx-auto sm:mx-0"
      style={{
        height: 'auto',
        minHeight: '520px',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      onClick={() => window.open(href, '_blank')}
    >
      {/* Category - positioned at top left */}
      <CategoryLabel text={category} />

      {/* Image Section */}
      <div
        className="relative mb-4 mt-14 w-full max-w-[527.5px]"
        style={{
          height: '241px',
          borderRadius: '8px',
          background: '#D9D9D9'
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            style={{ borderRadius: '8px' }}
          />
        ) : null}
      </div>

      {/* Title */}
      <div
        className="flex items-center justify-between mb-3 w-full max-w-[527.5px]"
        style={{
          height: '32px'
        }}
      >
        <h3
          className="text-gray-900 line-clamp-2 flex-1"
          style={{
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '140%'
          }}
        >
          {title}
        </h3>
        <Image
          src="/images/button.png"
          alt="Link icon"
          width={32}
          height={32}
          style={{
            cursor: 'pointer',
            marginLeft: '10px'
          }}
          onClick={() => window.open(href, '_blank')}
        />
      </div>

      {/* Date */}
      <div className="mb-3">
        <span
          className="text-gray-500"
          style={{
            fontWeight: 500,
            fontSize: '16px'
          }}
        >
          ·&nbsp;&nbsp;{publishDate}
        </span>
      </div>

      {/* Excerpt */}
      <div
        className="text-gray-600 w-full max-w-[527.5px]"
        style={{
          height: '28px',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '14px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          wordBreak: 'break-word'
        }}
      >
        {excerpt}
      </div>
    </div>
  )
}