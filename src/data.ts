export type Pet = '강아지' | '고양이'
export type Product = {name:string; pet:Pet; category:string; desc:string; tags:string[]; priceRange?:string; affiliateUrl?:string; imageUrl?:string}
export const products: Product[] = [
 {name:'강아지 배변패드 고흡수 탈취 애견패드, 1개, 32개입',pet:'강아지',category:'배변·위생',desc:'고흡수와 탈취 기능을 갖춘 강아지 배변패드입니다.',tags:['배변','고흡수','탈취'],priceRange:'상품 페이지에서 확인',affiliateUrl:'https://link.coupang.com/a/huRifkzAKO',imageUrl:'https://image7.coupangcdn.com/image/affiliate/banner/d9ed8d6119f9476f3e9f082ea78608e7@2x.jpg'},
 {name:'강아지 하네스+리드줄 세트 조절식 당김방지 탈출방지',pet:'강아지',category:'산책',desc:'산책 시 착용감과 조절 범위, 리드줄 포함 여부를 확인하세요.',tags:['산책','하네스','리드줄'],affiliateUrl:'https://link.coupang.com/a/huTkuo6rro'},
 {name:'강아지 이동장·캐리어',pet:'강아지',category:'외출',desc:'반려견의 크기에 맞는 내부 공간과 통풍, 휴대성을 확인하세요.',tags:['이동','여행','캐리어'],affiliateUrl:'https://link.coupang.com/a/huTnroG08O'},
 {name:'강아지 급수기 500ML',pet:'강아지',category:'급식',desc:'외출 중 물을 급여하기 편한 휴대용 급수기입니다.',tags:['급수','외출','휴대'],affiliateUrl:'https://link.coupang.com/a/huTslaI2gK'},
 {name:'강아지 노즈워크 장난감 15cm',pet:'강아지',category:'놀이·생활',desc:'노즈워크와 놀이를 함께 할 수 있는 장난감입니다.',tags:['노즈워크','놀이','IQ'],affiliateUrl:'https://link.coupang.com/a/huTvbCr0Am'},
 {name:'탐사 고양이 두부모래 7L',pet:'고양이',category:'화장실',desc:'응고형 두부모래로 고양이 화장실 관리에 사용할 수 있습니다.',tags:['두부모래','응고형','화장실'],affiliateUrl:'https://link.coupang.com/a/huTyf6IhwG'},
 {name:'네이처펫 고양이 시그니처 숨숨집 스크래처',pet:'고양이',category:'놀이·생활',desc:'스크래칭과 휴식을 함께 고려할 수 있는 숨숨집형 스크래처입니다.',tags:['스크래처','숨숨집','놀이'],affiliateUrl:'https://link.coupang.com/a/huTBjZDpsa'},
 {name:'고양이 강아지 옥희독희 튼튼백 이동장',pet:'고양이',category:'외출',desc:'외출과 이동 시 반려동물의 크기와 최대 하중을 확인해 선택하세요.',tags:['이동장','외출','캐리어'],affiliateUrl:'https://link.coupang.com/a/huTDVSXtgO'},
 {name:'조이쥬드 고양이 자동 급수기 정수기 강아지 1.5L',pet:'고양이',category:'급식',desc:'자동 순환 방식과 용량, 세척 편의성을 확인할 수 있는 급수기입니다.',tags:['급수','정수기','1.5L'],affiliateUrl:'https://link.coupang.com/a/huTHp0dS20'}
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
