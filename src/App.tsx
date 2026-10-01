import { useMemo, useState } from 'react'
import { Search, Dog, Cat, ArrowRight, Check, ExternalLink, Menu, X } from 'lucide-react'
import { products, situations, guides } from './data'

type Tab = '홈'|'강아지'|'고양이'|'상황별 추천'|'상품 비교'|'반려생활 정보'

function Header({tab,setTab}:{tab:Tab;setTab:(t:Tab)=>void}) {
 const [open,setOpen]=useState(false)
 const nav:Tab[]=['홈','강아지','고양이','상황별 추천','상품 비교','반려생활 정보']
 return <header className="header"><div className="header-inner">
  <button className="logo" onClick={()=>{setTab('홈');setOpen(false)}}><span>펫</span>고르미</button>
  <button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="메뉴">{open?<X/>:<Menu/>}</button>
  <nav className={open?'nav open':'nav'}>{nav.map(n=><button key={n} className={tab===n?'active':''} onClick={()=>{setTab(n);setOpen(false)}}>{n}</button>)}</nav>
 </div></header>
}

function AffiliateNotice(){return <div className="notice">※ 현재는 상품 선택 기준을 제공하는 단계입니다. 실제 상품 링크가 연결되는 경우 해당 링크를 통해 구매가 발생하면 제휴 수수료를 받을 수 있습니다.</div>}

function ProductCard({p}:{p:typeof products[number]}){return <article className="product-card"><div className="product-icon">{p.pet==='강아지'?<Dog/>:<Cat/>}</div><div><span className="eyebrow">{p.pet} · {p.category}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><button className="text-link">상품 정보 보기 <ArrowRight size={15}/></button></div></article>}

function Home({go}:{go:(t:Tab)=>void}){return <main>
 <section className="hero"><div className="hero-copy"><span className="pill">반려생활 선택 가이드</span><h1>우리 아이에게 필요한 것을<br/><em>더 쉽게</em> 골라보세요</h1><p>강아지와 고양이 용품을 조건별로 살펴보고<br/>나에게 맞는 상품을 찾아보세요.</p>
 <div className="search"><Search size={20}/><input placeholder="무엇을 찾고 계세요?" /><button onClick={()=>go('상품 비교')}>찾아보기</button></div></div><div className="hero-art"><div className="pet-orb dog-orb"><Dog/></div><div className="pet-orb cat-orb"><Cat/></div></div></section>
 <section className="section"><div className="section-head"><div><span className="section-kicker">PET CATEGORY</span><h2>반려동물별로 찾아보기</h2></div></div><div className="pet-grid"><button className="pet-card dog" onClick={()=>go('강아지')}><Dog/><div><span>FOR DOG</span><h3>강아지 용품</h3><p>산책 · 배변 · 급식 · 이동 · 놀이</p></div><ArrowRight/></button><button className="pet-card cat" onClick={()=>go('고양이')}><Cat/><div><span>FOR CAT</span><h3>고양이 용품</h3><p>화장실 · 급식 · 스크래처 · 이동 · 놀이</p></div><ArrowRight/></button></div></section>
 <section className="section soft"><div className="section-head"><div><span className="section-kicker">BY SITUATION</span><h2>이런 상황이라면</h2></div><button onClick={()=>go('상황별 추천')} className="more">전체 보기 <ArrowRight size={16}/></button></div><div className="situation-grid">{situations.map(([a,b,c])=><button className="situation" key={a} onClick={()=>go('상황별 추천')}><strong>{a}</strong><span>{b}</span><small>{c}</small></button>)}</div></section>
 <section className="section"><div className="section-head"><div><span className="section-kicker">POPULAR GUIDE</span><h2>많이 찾는 용품</h2></div><button onClick={()=>go('상품 비교')} className="more">상품 비교 <ArrowRight size={16}/></button></div><div className="product-grid">{products.slice(0,6).map(p=><ProductCard key={p.name} p={p}/>)}</div></section>
 <section className="section soft"><div className="section-head"><div><span className="section-kicker">RECENT GUIDES</span><h2>반려생활 정보</h2></div><button onClick={()=>go('반려생활 정보')} className="more">전체 보기 <ArrowRight size={16}/></button></div><div className="guide-grid">{guides.map(([a,b])=><article className="guide" key={a}><span>GUIDE</span><h3>{a}</h3><p>{b}</p><button onClick={()=>go('반려생활 정보')}>자세히 보기 <ArrowRight size={15}/></button></article>)}</div></section>
 </main>}

function Listing({pet}:{pet?:'강아지'|'고양이'}){const list=products.filter(p=>!pet||p.pet===pet);return <main className="page"><div className="page-title"><span className="section-kicker">{pet==='강아지'?'FOR DOG':pet==='고양이'?'FOR CAT':'PRODUCT GUIDE'}</span><h1>{pet?pet+' 용품': '상품 비교'}</h1><p>{pet?pet+'에게 필요한 용품을 선택 기준과 함께 살펴보세요.':'용품별 핵심 기준을 비교하고 필요한 상품을 찾아보세요.'}</p></div><div className="filter-row">{['전체','산책','배변·위생','급식','외출','놀이·생활','화장실'].map(x=><button key={x}>{x}</button>)}</div><div className="product-grid">{list.map(p=><ProductCard key={p.name} p={p}/>)}</div><AffiliateNotice/></main>}

function Situations(){return <main className="page"><div className="page-title"><span className="section-kicker">BY SITUATION</span><h1>상황별 추천</h1><p>우리 집 환경과 생활 방식에 맞춰 필요한 용품을 찾아보세요.</p></div><div className="situation-list">{situations.map(([a,b,c],i)=><article key={a} className="situation-large"><div className="num">0{i+1}</div><div><h2>{a}</h2><h3>{b}</h3><p>{c}</p><ul><li><Check/> 필요한 기능부터 확인</li><li><Check/> 공간과 사용 빈도 고려</li><li><Check/> 관리가 쉬운지 확인</li></ul></div></article>)}</div></main>}

function Guides(){return <main className="page"><div className="page-title"><span className="section-kicker">LIFE GUIDE</span><h1>반려생활 정보</h1><p>제품을 사기 전에 알아두면 좋은 선택 기준을 쉽게 정리했습니다.</p></div><div className="guide-list">{guides.map(([a,b])=><article className="guide-detail" key={a}><span>GUIDE</span><h2>{a}</h2><p>{b}</p><h3>고를 때 확인할 기준</h3><ul><li>반려동물의 크기와 생활환경에 맞는지 확인합니다.</li><li>매일 사용하는 제품은 세척과 관리가 편한지 살펴봅니다.</li><li>가격만 비교하기보다 필요한 기능과 내구성을 함께 봅니다.</li></ul></article>)}</div></main>}

function Compare(){const [q,setQ]=useState('');const filtered=useMemo(()=>products.filter(p=>(p.name+p.category+p.desc).includes(q)),[q]);return <main className="page"><div className="page-title"><span className="section-kicker">COMPARE</span><h1>상품 비교</h1><p>궁금한 용품을 검색하고 선택 기준을 확인해보세요.</p></div><div className="compare-search"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="예: 배변패드, 고양이 모래, 이동장"/></div><div className="compare-table"><div className="compare-head"><span>용품</span><span>대상</span><span>카테고리</span><span>선택 기준</span><span></span></div>{filtered.map(p=><div className="compare-row" key={p.name}><strong>{p.name}</strong><span>{p.pet}</span><span>{p.category}</span><span>{p.desc}</span><button aria-label="상품 정보 보기"><ExternalLink size={16}/></button></div>)}</div><AffiliateNotice/></main>}

export default function App(){const [tab,setTab]=useState<Tab>('홈');const go=(t:Tab)=>setTab(t);let content:React.ReactNode=<Home go={go}/>;if(tab==='강아지')content=<Listing pet="강아지"/>;if(tab==='고양이')content=<Listing pet="고양이"/>;if(tab==='상황별 추천')content=<Situations/>;if(tab==='상품 비교')content=<Compare/>;if(tab==='반려생활 정보')content=<Guides/>;return <><Header tab={tab} setTab={setTab}/>{content}<footer><div className="footer-inner"><div><button className="logo footer-logo" onClick={()=>setTab('홈')}><span>펫</span>고르미</button><p>우리 아이에게 필요한 것을<br/>더 쉽게 고르는 곳</p></div><div className="footer-links"><button>사이트 소개</button><button>이용 안내</button><button>개인정보 처리방침</button><button>이용약관</button><button>문의하기</button><button>제휴 안내</button></div></div><div className="copyright">© 2026 펫고르미. All rights reserved.</div></footer></>}
