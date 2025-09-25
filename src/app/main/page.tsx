'use client'

import NewsSidebar from '@/components/sidebar/NewsSidebar'
import InfoCardPage from '@/components/page/Infocardpage'
import NewsCardPage from '@/components/page/NewsCardPage'
import TagButton from '@/components/indicators/TagButton'

export default function MainPage() {
  return (
    <main className="w-full">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[2560px] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[480px] py-4 sm:py-6 md:py-8">

          <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 lg:gap-8">
            <section className="flex-1 order-2 lg:order-1">
              {/* 정보 카드 영역 */}
              <InfoCardPage />
            </section>

            {/* 뉴스 사이드바 영역 */}
            <aside className="w-full lg:w-[456px] flex-shrink-0 order-1 lg:order-2"
                   style={{ height: 'auto', minHeight: '300px', maxHeight: '704px' }}>
              <div className="h-full overflow-y-auto scrollbar-hide">
                <NewsSidebar />
              </div>
            </aside>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8">
            <section className="flex-1 order-2 lg:order-1">
              {/* 뉴스카드 영역 */}
              <NewsCardPage />
            </section>

            {/* 사이드바 영역 (같은 크기 유지) */}
            <aside className="w-full lg:w-[456px] flex-shrink-0 order-1 lg:order-2"
                   style={{ height: 'auto', minHeight: '300px', maxHeight: '704px' }}>
              <div className="h-full overflow-y-auto scrollbar-hide">
                <NewsSidebar />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}