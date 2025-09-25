import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 w-full">
      {/* Centering wrapper */}
      <div className="flex justify-center w-full">
        {/* Header Layout */}
        <div className="w-full max-w-[2560px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-[480px] py-3 sm:py-4 md:py-5 xl:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="AXI News Logo"
                width={82}
                height={44}
                className="w-12 h-6 sm:w-16 sm:h-8 md:w-18 md:h-9 lg:w-20 lg:h-10 xl:w-[82px] xl:h-[44px]"
                priority
              />
            </Link>

            {/* Right Box */}
            <div className="bg-[#D9D9D9] rounded-lg flex-shrink-0 ml-2 sm:ml-3 md:ml-3 lg:ml-4 xl:ml-8">
              {/* 큰 화면에서는 기존 크기 유지 */}
              <div className="hidden xl:block w-[970px] h-[180px]"></div>
              {/* 중간 화면 (1200px 정도) */}
              <div className="hidden lg:block xl:hidden w-[600px] h-[120px]"></div>
              {/* 작은 화면 */}
              <div className="block lg:hidden w-[150px] sm:w-[200px] md:w-[400px] h-[60px] sm:h-[80px] md:h-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}