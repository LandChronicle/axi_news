import NewsSidebarCard from '@/components/card/NewsSidebarCard'

export default function NewsSidebar() {
  // 목업 데이터 - 나중에 비동기 데이터로 대체 예정
  const mockNewsData = [
    {
      id: 1,
      title: "DeepSeek-R1, 강화학습으로 AI추론 혁신 이끌다",
      timeAgo: "3월 29, 2025",
      imageUrl: "/api/placeholder/120/80",
      category: "교육자료"
    },
    {
      id: 2,
      title: "차트 분석, 볼린저밴드란 무엇인가요?",
      timeAgo: "3월 29, 2025",
      imageUrl: "/api/placeholder/120/80",
      category: "분석"
    },
    {
      id: 3,
      title: "경제지표 읽는 방법과 거래 전략",
      timeAgo: "3월 29, 2025",
      imageUrl: "/api/placeholder/120/80",
      category: "전략"
    },
    {
      id: 4,
      title: "외환시장 동향과 주요 통화 분석",
      timeAgo: "3월 29, 2025",
      imageUrl: "/api/placeholder/120/80",
      category: "시장"
    },
    {
      id: 5,
      title: "투자 리스크 관리의 기본 원칙",
      timeAgo: "3월 29, 2025",
      imageUrl: "/api/placeholder/120/80",
      category: "리스크"
    },
    {
      id: 6,
      title: "글로벌 경제 전망과 투자 기회",
      timeAgo: "3월 29, 2025",
      imageUrl: "/api/placeholder/120/80",
      category: "전망"
    },
    {
      id: 7,
      title: "암호화폐 시장 분석과 전망",
      timeAgo: "3월 29, 2025",
      imageUrl: "/api/placeholder/120/80",
      category: "암호화폐"
    }
  ]

  return (
    <aside>
      <div className="space-y-0">
        {mockNewsData.map((news, index) => (
          <NewsSidebarCard
            key={news.id}
            title={news.title}
            timeAgo={news.timeAgo}
            imageUrl={news.imageUrl}
            category={news.category}
          />
        ))}
      </div>
    </aside>
  )
}