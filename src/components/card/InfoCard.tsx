import Image from 'next/image'

interface InfoCardProps {
  title: string
  imageUrl: string
  publishDate: string
  category: string
  href: string
}

export default function InfoCard({
  title,
  imageUrl,
  publishDate,
  category,
  href
}: InfoCardProps) {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer opacity-100"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        padding: '12px',
        transform: 'rotate(0deg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
      }}
      onClick={() => window.open(href, '_blank')}
    >
      {/* Background Image - Full Card Coverage */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>

      {/* Category - Positioned on image */}
      <div className="relative z-10">
        <span
          className="text-white"
          style={{
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
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '1px',
            zIndex: 10,
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            whiteSpace: 'nowrap'
          }}
        >
          {category}
        </span>
      </div>

      {/* Bottom Content Section */}
      <div
        className="relative z-10"
        style={{
          background: '#000000BF',
          gap: '15px',
          transform: 'rotate(0deg)',
          opacity: 1,
          padding: '12px',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          right: '12px',
          height: '86px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* Title */}
        <h3
          className="text-white line-clamp-2"
          style={{
            transform: 'rotate(0deg)',
            opacity: 1,
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '0%',
            margin: '2px 0 0 0',
            flex: 1
          }}
        >
          {title}
        </h3>

        {/* Date */}
        <span
          className="text-white"
          style={{
            opacity: 0.75,
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            margin: '0 0 2px 0'
          }}
        >
          ·{publishDate}
        </span>
      </div>
    </div>
  )
}