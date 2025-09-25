import Link from 'next/link'
import Image from 'next/image'

export default function MenuBar() {
  const leftMenuItems = [
    { name: '거래가이드', href: '/trading-guide' },
    { name: '교육자료', href: '/education' },
    { name: '경제지표', href: '/economic-indicators' },
    { name: '경제정보', href: '/economic-info' },
    { name: '경제뉴스', href: '/economic-news' },
  ]

  return (
    <div className="w-full sticky top-[228px] z-40 bg-white dark:bg-gray-900 border-t border-b border-gray-300">
      {/* Centering wrapper */}
      <div className="flex justify-center w-full">
        {/* MenuBar Layout */}
        <div className="w-full max-w-[2560px] px-2 sm:px-4 md:px-6 lg:px-[480px] xl:px-[480px] py-6">
          <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
          {/* Left Menu Items */}
          <nav
            className="flex items-center opacity-100"
            style={{
              width: '438px',
              height: '22px',
              gap: '32px',
              transform: 'rotate(0deg)'
            }}
          >
            {leftMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons and Subscribe */}
          <div
            className="flex items-center opacity-100"
            style={{
              width: '240.5712127685547px',
              height: '38px',
              gap: '32px',
              transform: 'rotate(0deg)'
            }}
          >
            {/* Menu Icon */}
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Search Icon */}
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Subscribe Badge */}
            <div className="border border-[#D9D9D9] hover:border-gray-400 transition-colors rounded-[20px] flex items-center px-4 py-2 gap-2">
              <Image
                src="/images/ellipse.png"
                alt="Subscribe Icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-gray-700 dark:text-gray-300 text-sm">Subscribe</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}