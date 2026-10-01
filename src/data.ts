export type Pet = '강아지' | '고양이'
export type Product = {name:string; pet:Pet; category:string; desc:string; tags:string[]; priceRange?:string; affiliateUrl?:string; imageUrl?:string}
export const products: Product[] = [
 {name:'강아지 배변패드 고흡수 탈취 애견패드, 1개, 32개입',pet:'강아지',category:'배변·위생',desc:'고흡수와 탈취 기능을 갖춘 강아지 배변패드입니다.',tags:['배변','고흡수','탈취'],priceRange:'상품 페이지에서 확인',affiliateUrl:'https://link.coupang.com/a/huRifkzAKO',imageUrl:'https://image7.coupangcdn.com/image/affiliate/banner/d9ed8d6119f9476f3e9f082ea78608e7@2x.jpg'},
 {name:'강아지 산책용품',pet:'강아지',category:'산책',desc:'목줄·하네스·리드줄을 용도에 맞게 선택하세요.',tags:['산책','외출'],priceRange:'가격대 비교 예정'},
 {name:'강아지 이동장',pet:'강아지',category:'외출',desc:'크기와 통풍, 휴대성을 먼저 확인하세요.',tags:['이동','여행'],priceRange:'가격대 비교 예정'},
 {name:'강아지 급수기',pet:'강아지',category:'급식',desc:'물 섭취량과 세척 편의성, 외출 여부를 함께 고려하세요.',tags:['급수','관리'],priceRange:'가격대 비교 예정'},
 {name:'강아지 장난감',pet:'강아지',category:'놀이·생활',desc:'크기와 내구성, 반려견의 놀이 습관을 확인하세요.',tags:['놀이','내구성'],priceRange:'가격대 비교 예정'},
 {name:'고양이 모래',pet:'고양이',category:'화장실',desc:'응고형·흡수형·두부모래 등의 특징을 비교해보세요.',tags:['화장실','냄새'],priceRange:'가격대 비교 예정'},
 {name:'고양이 스크래처',pet:'고양이',category:'놀이·생활',desc:'설치 공간과 소재, 안정성을 기준으로 골라보세요.',tags:['스크래처','집'],priceRange:'가격대 비교 예정'},
 {name:'고양이 이동장',pet:'고양이',category:'외출',desc:'입구 구조와 통풍, 세척 편의성을 살펴보세요.',tags:['이동','병원'],priceRange:'가격대 비교 예정'},
 {name:'고양이 급수기',pet:'고양이',category:'급식',desc:'용량과 세척, 필터 관리 방식 등을 확인하세요.',tags:['급수','관리'],priceRange:'가격대 비교 예정'},
 {name:'고양이 화장실',pet:'고양이',category:'화장실',desc:'크기와 입구 높이, 청소 편의성을 함께 살펴보세요.',tags:['화장실','청소'],priceRange:'가격대 비교 예정'}
]
export const situations = [
 ['초보 보호자','처음 준비하는 필수 용품','처음 반려동물을 맞이했다면 꼭 필요한 품목부터 확인하세요.'],
 ['좁은 집','공간을 아끼는 용품','크기와 보관성을 중심으로 생활용품을 살펴보세요.'],
 ['자주 외출한다면','산책·여행용품','이동장과 산책용품을 상황별로 비교해보세요.'],
 ['가성비를 찾는다면','가격보다 필요한 기능','비슷한 제품의 핵심 기능을 먼저 비교해보세요.'],
 ['강아지 여러 마리','다견 가정용품','사용량과 관리 편의성을 함께 고려하세요.'],
 ['고양이 여러 마리','다묘 가정용품','화장실과 급식 등 수량이 중요한 품목을 살펴보세요.']
] as const
export const guides = [
 ['강아지 배변패드 고르는 법','흡수력, 크기, 두께, 냄새 관리까지 확인해야 할 기준을 정리했습니다.'],
 ['고양이 모래 종류 비교','응고형·흡수형 등 주요 모래의 특징과 선택 기준을 알아봅니다.'],
 ['강아지 산책용품 고르는 법','하네스와 목줄의 차이, 리드줄을 고를 때 확인할 부분을 정리했습니다.'],
 ['고양이 화장실 고르는 법','크기와 입구, 청소 편의성을 중심으로 살펴보세요.']
] as const
