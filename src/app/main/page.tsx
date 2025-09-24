'use client'

import NewsSidebar from '@/components/sidebar/NewsSidebar'
import InfoCardPage from '@/components/page/Infocardpage'
import NewsCardPage from '@/components/page/NewsCardPage'

export default function MainPage() {
  return (
    <main className="w-full">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[2560px] px-[480px] py-8">
          <div className="flex w-full gap-8">
          <section className="flex-1">
            {/* 정보 카드 영역 */}
            <InfoCardPage />
          </section>

          {/* 뉴스 사이드바 영역 */}
          <aside className="w-[456px] flex-shrink-0" style={{ height: '704px' }}>
            <div className="h-full overflow-y-auto scrollbar-hide">
              <NewsSidebar />
            </div>
          </aside>
          </div>

          <div className="flex w-full gap-8 mt-8">
            <section className="flex-1">
              {/* 뉴스카드 영역 */}
              <NewsCardPage />
            </section>

            {/* 사이드바 영역 (같은 크기 유지) */}
            <aside className="w-[456px] flex-shrink-0" style={{ height: '704px' }}>
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