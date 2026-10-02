export type Pet = '강아지' | '고양이'
export type Product = {
 name:string
 pet:Pet
 category:string
 desc:string
 tags:string[]
 suitableFor?:string
 checkPoints:string[]
 priceRange?:string
 affiliateUrl?:string
 imageUrl?:string
}

export const products: Product[] = [
 {name:'강아지 배변패드 고흡수 탈취 애견패드, 1개, 32개입',pet:'강아지',category:'배변·위생',desc:'고흡수와 탈취 기능을 갖춘 강아지 배변패드입니다.',tags:['배변','고흡수','탈취'],checkPoints:['반려견 체형에 맞는 패드 크기','흡수력과 젖음 방지 정도','사용량에 맞는 장당 가격'],priceRange:'상품 페이지에서 확인',affiliateUrl:'https://link.coupang.com/a/huRifkzAKO',imageUrl:'https://image7.coupangcdn.com/image/affiliate/banner/d9ed8d6119f9476f3e9f082ea78608e7@2x.jpg'},
 {name:'파스텔펫 반려동물 곰돌이 하네스 + 리드줄 세트, 베이지, 1세트',pet:'강아지',category:'산책',desc:'산책 시 착용감과 조절 범위, 리드줄 포함 여부를 확인하세요.',tags:['산책','하네스','리드줄'],checkPoints:['가슴둘레에 맞는 조절 범위','목과 가슴에 가해지는 압박 정도','리드줄 길이와 연결 방식'],affiliateUrl:'https://link.coupang.com/a/hvOsNYMyu4',imageUrl:'https://img4c.coupangcdn.com/image/affiliate/banner/37b05833bf979a98dc68e4b631783c15@2x.jpg'},
 {name:'푸르미 반려동물 FC3000 스페이스 하드형 이동장, 브라운, 1개',pet:'강아지',category:'외출',desc:'반려견의 크기에 맞는 내부 공간과 통풍, 휴대성을 확인하세요.',tags:['이동','여행','캐리어'],checkPoints:['반려견이 편하게 움직일 수 있는 내부 크기','통풍구와 출입구 구조','이동 시 손잡이와 휴대 방식'],affiliateUrl:'https://link.coupang.com/a/huVjwJao4i',imageUrl:'https://image12.coupangcdn.com/image/affiliate/banner/4fa95388c379602ac69ed1d9c0f9a54b@2x.jpg'},
 {name:'실리콩 물결 급수기 정수기 반려동물 고양이 강아지 자동급수기, 1개, 화이트',pet:'강아지',category:'급식',desc:'고양이와 강아지가 사용할 수 있는 자동 급수기로 용량과 세척 편의성을 확인하세요.',tags:['급수','자동급수','외출'],checkPoints:['하루 음수량에 맞는 물통 용량','필터와 급수부 세척 방법','전원 연결 방식과 소음 여부'],affiliateUrl:'https://link.coupang.com/a/huVoYSe9N6',imageUrl:'https://img2c.coupangcdn.com/image/affiliate/banner/207f4be365d1bb80d20bbb29babf4136@2x.jpg'},
 {name:'오브펫 강아지 노즈워크 장난감 플라워 담요 매트, 1개, 혼합색상',pet:'강아지',category:'놀이·생활',desc:'후각 놀이와 간식 찾기 활동에 활용할 수 있는 노즈워크 매트입니다.',tags:['노즈워크','놀이','IQ'],checkPoints:['반려견 크기와 놀이 방식에 맞는 크기','간식을 넣고 꺼내는 난이도','세척과 보관이 편한 구조인지'],affiliateUrl:'https://link.coupang.com/a/huVu3HjR1w',imageUrl:'https://img5a.coupangcdn.com/image/affiliate/banner/b5b9439c8eb4fceb56038c1f7453a1ef@2x.jpg'},
 {name:'탐사 가는 입자 고양이 두부모래 1.5mm, 7L, 1팩, 베이비파우더향',pet:'고양이',category:'화장실',desc:'가는 입자의 응고형 두부모래로 고양이 화장실 관리에 사용할 수 있습니다.',tags:['두부모래','응고형','화장실'],checkPoints:['고양이가 선호하는 입자와 향인지','응고 상태와 부스러짐 정도','먼지와 냄새 관리 방식'],affiliateUrl:'https://link.coupang.com/a/huVBjV88yq',imageUrl:'https://img5c.coupangcdn.com/image/affiliate/banner/e395aa3141423193791dda59c54bf492@2x.jpg'},
 {name:'캣박스 고양이 스크래쳐 스크래처 숨숨집 박스 하우스, 1) 커튼형, 1개',pet:'고양이',category:'놀이·생활',desc:'스크래칭과 휴식을 함께 고려할 수 있는 숨숨집형 스크래처입니다.',tags:['스크래처','숨숨집','놀이'],checkPoints:['고양이가 몸을 충분히 펼칠 수 있는 크기','스크래칭 면의 재질과 교체 가능 여부','숨숨집과 휴식 공간의 구조'],affiliateUrl:'https://link.coupang.com/a/huVLU8GtyK',imageUrl:'https://image13.coupangcdn.com/image/affiliate/banner/298455fed0b2eeaec6e6cff57bc506b1@2x.jpg'},
 {name:'옥희독희 위로열림 이동장, 아이보리, 1개',pet:'고양이',category:'외출',desc:'외출과 이동 시 반려동물의 크기와 최대 하중을 확인해 선택하세요.',tags:['이동장','외출','캐리어'],checkPoints:['고양이 체형에 맞는 내부 공간','최대 하중과 이동 방식','출입구와 통풍 구조'],affiliateUrl:'https://link.coupang.com/a/hvRkxClU4W',imageUrl:'https://img5c.coupangcdn.com/image/affiliate/banner/d9edbbe3e11ea7e45e28c77ba197834b@2x.jpg'},
 {name:'실리콩 물결 급수기 정수기 반려동물 고양이 강아지 자동급수기, 1개, 화이트',pet:'고양이',category:'급식',desc:'고양이와 강아지가 사용할 수 있는 자동 급수기로 용량과 세척 편의성을 확인하세요.',tags:['급수','정수기','자동급수'],checkPoints:['다묘 가정에 필요한 물통 용량','필터 교체와 세척 편의성','전원 연결 위치와 소음 여부'],affiliateUrl:'https://link.coupang.com/a/huVViieK5c',imageUrl:'https://image12.coupangcdn.com/image/affiliate/banner/207f4be365d1bb80d20bbb29babf4136@2x.jpg'}
]

export const situations = [
 ['초보 보호자','처음 준비하는 필수 용품','처음 반려동물을 맞이했다면 꼭 필요한 품목부터 확인하세요.',['매일 사용하는 기본 용품부터 우선순위 정하기','반려동물의 크기와 생활공간에 맞추기','세척·교체 등 관리 방법까지 확인하기']],
 ['좁은 집','공간을 아끼는 용품','크기와 보관성을 중심으로 생활용품을 살펴보세요.',['제품의 실제 설치·사용 공간 확인하기','접거나 겹쳐 보관할 수 있는지 확인하기','청소할 때 주변 공간이 충분한지 살펴보기']],
 ['자주 외출한다면','산책·여행용품','이동장과 산책용품을 상황별로 비교해보세요.',['반려동물의 체형에 맞는 이동 공간 확인하기','휴대성과 무게를 함께 고려하기','산책용품은 조절 범위와 연결 방식을 확인하기']],
 ['가성비를 찾는다면','가격보다 필요한 기능','비슷한 제품의 핵심 기능을 먼저 비교해보세요.',['처음부터 필요하지 않은 기능은 제외하기','소모품은 사용량과 교체 주기까지 계산하기','가격과 함께 관리·교체 비용도 살펴보기']],
 ['강아지 여러 마리','다견 가정용품','사용량과 관리 편의성을 함께 고려하세요.',['여러 마리가 동시에 사용할 수 있는지 확인하기','소모품은 묶음 구성과 사용량 비교하기','세척과 정리 시간이 많이 들지 않는지 확인하기']],
 ['고양이 여러 마리','다묘 가정용품','화장실과 급식 등 수량이 중요한 품목을 살펴보세요.',['고양이 수에 맞는 용품 수량 고려하기','화장실·급수기 등 관리 빈도 확인하기','공간별 배치와 청소 동선을 함께 고려하기']]
] as const

export const guides = [
 ['강아지 배변패드 고르는 법','흡수력, 크기, 두께, 냄새 관리까지 확인해야 할 기준을 정리했습니다.',['반려견 크기에 맞는 패드 크기','흡수력과 젖음 방지 정도','하루 사용량을 고려한 비용']],
 ['고양이 모래 종류 비교','응고형·흡수형 등 주요 모래의 특징과 선택 기준을 알아봅니다.',['고양이의 입자·향 선호도','응고력과 청소 편의성','먼지와 냄새 관리']],
 ['강아지 산책용품 고르는 법','하네스와 목줄의 차이, 리드줄을 고를 때 확인할 부분을 정리했습니다.',['가슴둘레와 목둘레에 맞는 사이즈','조절 범위와 착용 방식','리드줄 길이와 연결 방식']],
 ['고양이 화장실 고르는 법','크기와 입구, 청소 편의성을 중심으로 살펴보세요.',['고양이가 몸을 돌릴 수 있는 내부 크기','입구 높이와 출입 방식','모래 교체와 청소가 편한 구조']],
 ['강아지 하네스 착용법과 사이즈 확인','강아지 하네스를 고를 때 사이즈와 조절 범위를 확인하는 방법을 정리했습니다.',['가슴둘레를 기준으로 사이즈 확인하기','목과 가슴을 조이지 않는지 확인하기','버클과 연결부가 제대로 잠기는지 확인하기']],
 ['강아지 배변패드 교체 주기와 선택 기준','사용량과 흡수 상태를 기준으로 배변패드를 관리할 때 확인할 부분을 정리했습니다.',['패드가 충분히 흡수했는지 확인하기','젖음이나 냄새가 남으면 교체하기','하루 사용량에 맞춰 묶음 구성을 비교하기']],
 ['고양이 모래 추천 전에 알아둘 종류별 특징','고양이 모래를 고를 때 입자, 응고, 먼지와 향을 비교하는 기준을 정리했습니다.',['벤토나이트·두부 등 재질별 특징 확인하기','응고력과 청소 편의성 비교하기','고양이가 선호하는 입자와 향 확인하기']],
 ['고양이 모래 교체 주기와 관리 방법','고양이 화장실을 깨끗하게 관리할 때 모래 상태와 청소 주기를 확인하는 방법을 정리했습니다.',['응고된 부분을 수시로 제거하기','냄새와 오염 상태를 함께 확인하기','전체 교체 시 제품 사용 안내를 확인하기']],
 ['고양이 화장실 위치 고르는 법','고양이가 편하게 이용할 수 있도록 화장실 위치와 주변 환경을 확인하는 기준을 정리했습니다.',['조용하고 접근하기 쉬운 위치 선택하기','급식·급수 공간과 적절히 분리하기','청소와 모래 보충이 편한 공간인지 확인하기']],
 ['고양이 화장실 크기 고르는 법','고양이의 체형과 움직임을 고려해 화장실 크기와 출입구를 확인하는 방법을 정리했습니다.',['고양이가 몸을 돌릴 수 있는 내부 공간 확인하기','출입구 높이가 고양이에게 적절한지 확인하기','모래가 충분히 깔릴 수 있는 깊이 확인하기']]
] as const
