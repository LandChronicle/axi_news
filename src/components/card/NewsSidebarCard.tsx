import CategoryLabel from '@/components/indicators/CategoryLabel'

interface NewsSidebarCardProps {
  title: string
  timeAgo: string
  rank?: number
  imageUrl?: string
  category?: string
}

export default function NewsSidebarCard({
  title,
  timeAgo,
  rank,
  imageUrl,
  category
}: NewsSidebarCardProps) {
  return (
    <div
      className="flex items-start hover:bg-gray-50 transition-colors cursor-pointer"
      style={{
        width: '456px',
        height: '176px',
        paddingTop: '24px',
        paddingBottom: '24px',
        gap: '32px',
        transform: 'rotate(0deg)',
        opacity: 1,
        borderBottomWidth: '1px',
        borderBottom: '1px solid #D9D9D9'
      }}
    >
      {/* Left Side - News Info */}
      <div
        className="relative"
        style={{
          width: '309px',
          height: '128px',
          transform: 'rotate(0deg)',
          opacity: 1
        }}
      >
        {/* Category - positioned at top left */}
        {category && (
          <div style={{ position: 'absolute', top: '0', left: '0' }}>
            <CategoryLabel text={category} position="relative" />
          </div>
        )}

        {/* Title and Date aligned with category */}
        <div
          className="flex flex-col justify-between"
          style={{
            marginTop: category ? '44px' : '0',
            height: category ? '84px' : '128px'
          }}
        >
          <h4
            className="text-gray-900 line-clamp-2"
            style={{
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '140%',
              letterSpacing: '0%'
            }}
          >
            {title}
          </h4>
          <p
            className="text-gray-500"
            style={{
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            {timeAgo}
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-shrink-0">
        <div
          className="bg-gray-300 flex items-center justify-center"
          style={{
            width: '115px',
            height: '115px',
            transform: 'rotate(0deg)',
            opacity: 1,
            borderRadius: '8px'
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              style={{ borderRadius: '8px' }}
            />
          ) : (
            <span className="text-gray-500 text-xs">IMG</span>
          )}
        </div>
      </div>
    </div>
  )
}