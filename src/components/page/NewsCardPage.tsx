import NewsCard from '@/components/card/NewsCard'

export default function NewsCardPage() {
  // 목업 데이터 - 나중에 비동기 데이터로 대체 예정
  const mockNewsData = [
    {
      id: 1,
      title: "데모 계좌로 외환거래 훈련하기",
      excerpt: "외환 거래의 기초부터 심화까지, 데모 계좌를 활용한 실전 훈련 방법을 알아보세요.",
      imageUrl: "/api/placeholder/527/200",
      publishDate: "3월 29, 2025",
      category: "교육자료",
      href: "#"
    },
    {
      id: 2,
      title: "차트 분석, 볼린저밴드란 무엇인가요?",
      excerpt: "기술적 분석의 핵심 도구인 볼린저밴드의 개념과 활용법을 상세히 설명합니다.",
      imageUrl: "/api/placeholder/527/200",
      publishDate: "3월 29, 2025",
      category: "분석",
      href: "#"
    },
    {
      id: 3,
      title: "경제지표 읽는 방법과 거래 전략",
      excerpt: "주요 경제지표들을 어떻게 해석하고 거래 전략에 활용할 수 있는지 알아보세요.",
      imageUrl: "/api/placeholder/527/200",
      publishDate: "3월 29, 2025",
      category: "전략",
      href: "#"
    },
    {
      id: 4,
      title: "외환시장 동향과 주요 통화 분석",
      excerpt: "글로벌 외환시장의 최신 동향과 주요 통화들의 전망을 분석합니다.",
      imageUrl: "/api/placeholder/527/200",
      publishDate: "3월 29, 2025",
      category: "시장",
      href: "#"
    },
    {
      id: 5,
      title: "투자 리스크 관리의 기본 원칙",
      excerpt: "성공적인 투자를 위한 리스크 관리 원칙과 실제 적용 방법을 소개합니다.",
      imageUrl: "/api/placeholder/527/200",
      publishDate: "3월 29, 2025",
      category: "리스크",
      href: "#"
    },
    {
      id: 6,
      title: "글로벌 경제 전망과 투자 기회",
      excerpt: "2025년 글로벌 경제 전망과 새로운 투자 기회를 분석해봅니다.",
      imageUrl: "/api/placeholder/527/200",
      publishDate: "3월 29, 2025",
      category: "전망",
      href: "#"
    }
  ]

  return (
    <section>
      <div
        className="grid grid-cols-2 gap-8"
        style={{
          width: '100%',
          maxWidth: '1100px'
        }}
      >
        {mockNewsData.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            excerpt={news.excerpt}
            imageUrl={news.imageUrl}
            publishDate={news.publishDate}
            category={news.category}
            href={news.href}
          />
        ))}
      </div>
    </section>
  )
}