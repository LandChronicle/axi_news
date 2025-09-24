'use client'

import InfoCard from '@/components/card/InfoCard'

export default function MainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Featured News Section */}
        <section
          className="mb-12 mx-auto"
          style={{
            width: '1082px',
            height: '704px',
            gap: '32px',
            transform: 'rotate(0deg)',
            opacity: 1,
            display: 'flex',
            alignItems: 'stretch'
          }}
        >
          {/* Left Side - Two News Cards */}
          <div
            className="flex flex-col justify-between"
            style={{ gap: '32px' }}
          >
            <div style={{ width: '350px', height: '336px' }}>
              <InfoCard
                title="데모 계좌로 외환거래 훈련하기"
                imageUrl="/api/placeholder/350/192"
                publishDate="12월 23, 2024"
                category="교육자로"
                href="#"
              />
            </div>
            <div style={{ width: '350px', height: '336px' }}>
              <InfoCard
                title="차트 분석, 볼린저밴드란 무엇인가요?"
                imageUrl="/api/placeholder/350/192"
                publishDate="2024.09.24"
                category="교육자로"
                href="#"
              />
            </div>
          </div>

          {/* Right Side - Large News Card */}
          <div style={{ width: '700px', height: '704px' }}>
            <InfoCard
              title="데모 계좌로 외환거래 훈련하기"
              imageUrl="/api/placeholder/350/192"
              publishDate="12월 23, 2024"
              category="거래가이드"
              href="#"
            />
          </div>
        </section>
      </div>
    </main>
  )
}