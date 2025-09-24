import Image from 'next/image'

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
      className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      style={{
        width: '527.5px',
        height: '487.5px',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      onClick={() => window.open(href, '_blank')}
    >
      {/* Image Section */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Category - positioned at top left */}
      <span
        style={{
          width: '79px',
          height: '32px',
          paddingTop: '5px',
          paddingRight: '10px',
          paddingBottom: '5px',
          paddingLeft: '10px',
          gap: '10px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '8px',
          background: '#F83A47',
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#FFFFFF'
        }}
      >
        {category}
      </span>

      {/* Title */}
      <h3
        className="text-gray-900 mb-3 line-clamp-2"
        style={{
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '140%',
          letterSpacing: '0%'
        }}
      >
        {title}
      </h3>

      {/* Excerpt */}
      <p
        className="text-gray-600 mb-4 line-clamp-3"
        style={{
          fontSize: '14px',
          lineHeight: '140%'
        }}
      >
        {excerpt}
      </p>

      {/* Date */}
      <div className="mt-auto">
        <span
          className="text-gray-500"
          style={{
            fontSize: '14px',
            fontWeight: 400
          }}
        >
          {publishDate}
        </span>
      </div>
    </div>
  )
}