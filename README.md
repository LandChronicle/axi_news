# AXI News - Next.js 홈페이지

뉴스와 정보를 빠르고 정확하게 전달하는 AXI News 홈페이지입니다.

## 🚀 시작하기

### 필요한 환경
- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 시작**
   ```bash
   # Windows PowerShell에서 실행 (권장)
   npm run dev

   # 또는 npx 직접 사용
   npx next dev
   ```

3. **브라우저에서 확인**
   - http://localhost:3000 접속

### 사용 가능한 스크립트

```bash
npm run dev        # 개발 서버 시작 (포트 3000)
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 서버 시작
npm run lint       # ESLint 코드 검사
npm run type-check # TypeScript 타입 검사
```

## 🛠️ 기술 스택

- **프레임워크**: Next.js 15
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **린팅**: ESLint
- **패키지 매니저**: npm

## 📁 프로젝트 구조

```
axi_news/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # 루트 레이아웃
│   │   └── page.tsx         # 홈페이지
│   ├── components/          # 재사용 가능한 컴포넌트
│   ├── lib/                 # 유틸리티 함수
│   └── styles/              # 글로벌 스타일
│       └── globals.css
├── public/                  # 정적 파일
├── tailwind.config.js       # Tailwind CSS 설정
├── tsconfig.json           # TypeScript 설정
├── next.config.js          # Next.js 설정
└── package.json            # 프로젝트 설정
```

## 🎨 주요 기능

- ✅ **반응형 디자인**: 모바일과 데스크탑 최적화
- ✅ **다크모드 지원**: 시스템 테마 자동 감지
- ✅ **타입스크립트**: 타입 안전성 보장
- ✅ **Tailwind CSS**: 빠른 스타일링
- ✅ **Next.js App Router**: 최신 라우팅 시스템

## 🚨 문제 해결

### WSL 환경에서 실행 문제
현재 WSL과 Windows Node.js 간의 경로 충돌이 있을 수 있습니다.

**해결 방법:**
1. **Windows PowerShell 사용 (권장)**
   ```powershell
   cd C:\\Users\\a\\Desktop\\Git\\axi_news
   npm run dev
   ```

2. **WSL에서 실행하는 경우**
   ```bash
   # node_modules 재설치
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

### 포트 충돌 시
다른 포트로 실행:
```bash
npm run dev -- -p 3001
```

## 📝 개발 가이드

### 새 페이지 추가
```typescript
// src/app/about/page.tsx
export default function About() {
  return <div>About 페이지</div>
}
```

### 컴포넌트 생성
```typescript
// src/components/Header.tsx
export default function Header() {
  return <header>헤더 컴포넌트</header>
}
```

### 스타일 커스터마이징
`tailwind.config.js`에서 테마 설정을 수정할 수 있습니다.

## 🔗 유용한 링크

- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [TypeScript 문서](https://www.typescriptlang.org/docs)

---

**AXI News** - 뉴스와 정보의 새로운 경험