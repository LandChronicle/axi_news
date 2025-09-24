import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 w-full">
      {/* Centering wrapper */}
      <div className="flex justify-center w-full">
        {/* Header Layout */}
        <div
          className="opacity-100"
          style={{
            width: '2560px',
            height: '228px',
            paddingTop: '24px',
            paddingRight: '480px',
            paddingBottom: '24px',
            paddingLeft: '480px',
            transform: 'rotate(0deg)'
          }}
        >
          <div className="flex items-center" style={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="AXI News Logo"
              width={82}
              height={44}
              className="w-16 h-8 sm:w-20 sm:h-10 lg:w-[82px] lg:h-[44px]"
              priority
            />
          </Link>

          {/* Right Box */}
          <div
            className="bg-[#D9D9D9] opacity-100"
            style={{
              width: '970px',
              height: '180px',
              borderRadius: '8px',
              transform: 'rotate(0deg)'
            }}
          >
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}