import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Search, Dog, Cat, ArrowRight, Check, ExternalLink, Menu, X, ChevronLeft } from 'lucide-react'
import { products, situations, guides } from './data'

type Tab = '홈'|'강아지'|'고양이'|'상황별 추천'|'상품 비교'|'반려생활 정보'|'사이트 소개'|'이용 안내'|'개인정보 처리방침'|'이용약관'|'문의하기'|'제휴 안내'

function Header({tab,go}:{tab:Tab;go:(t:Tab)=>void}) {
 const [open,setOpen]=useState(false)
 const nav:Tab[]=['홈','강아지','고양이','상황별 추천','상품 비교','반려생활 정보']
 return <header className="header"><div className="header-inner">
  <button className="logo" onClick={()=>{go('홈');setOpen(false)}}><span>펫</span>고르미</button>
  <button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="메뉴">{open?<X/>:<Menu/>}</button>
  <nav className={open?'nav open':'nav'}>{nav.map(n=><button key={n} className={tab===n?'active':''} onClick={()=>{go(n);setOpen(false)}}>{n}</button>)}</nav>
 </div></header>
}

function SeoSchema({tab,guideItem}:{tab:Tab;guideItem?:readonly [string,string,readonly string[],string,string,string]}) {
 const base=window.location.origin
 const data:any[]=[]
 if(tab==='홈'){
  data.push({
   "@context":"https://schema.org",
   "@type":"Organization",
   "name":"펫고르미",
   "url":base
  })
  data.push({
   "@context":"https://schema.org",
   "@type":"WebSite",
   "name":"펫고르미",
   "url":base,
   "description":"강아지와 고양이 용품을 조건별로 비교하고 선택 기준을 제공하는 반려생활 정보 사이트"
  })
 }
 if(guideItem){
  data.push({
   "@context":"https://schema.org",
   "@type":"Article",
   "headline":guideItem[0],
   "description":guideItem[1],
   "url":window.location.href,
   "mainEntityOfPage":{"@type":"WebPage","@id":window.location.href},
   "isPartOf":{"@type":"WebSite","name":"펫고르미","url":base},
   "author":{"@type":"Organization","name":"펫고르미"}
  })
  data.push({
   "@context":"https://schema.org",
   "@type":"BreadcrumbList",
   "itemListElement":[
    {"@type":"ListItem","position":1,"name":"홈","item":base+"/"},
    {"@type":"ListItem","position":2,"name":"반려생활 정보","item":base+"/guides"},
    {"@type":"ListItem","position":3,"name":guideItem[0]}
   ]
  })
 }
 if(!guideItem && tab!=='홈'){
  data.push({
   "@context":"https://schema.org",
   "@type":"WebPage",
   "name":document.title,
   "url":window.location.href,
   "isPartOf":{"@type":"WebSite","name":"펫고르미","url":base}
  })
 }
 return <>{data.map((item,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(item)}}/>)}</>
}
function AffiliateNotice(){return <div className="notice affiliate-notice">* 이 사이트는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</div>}

function ProductCard({p,onCompare}:{p:typeof products[number];onCompare?:()=>void}){return <article className="product-card">{p.imageUrl?(p.affiliateUrl?<a className="product-image-link" href={p.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer"><img className="product-image" src={p.imageUrl} alt={p.name} decoding="async"/></a>:<img className="product-image" src={p.imageUrl} alt={p.name} decoding="async"/>):<div className="product-icon">{p.pet==='강아지'?<Dog/>:<Cat/>}</div>}<div><span className="eyebrow">{p.pet} · {p.category}</span><h3>{p.name}</h3><p>{p.desc}</p>{p.suitableFor&&<div className="fit"><strong>이런 경우 살펴보세요</strong><span>{p.suitableFor}</span></div>}<div className="check-points"><strong>고를 때 확인</strong><ul>{p.checkPoints.slice(0,3).map(x=><li key={x}>{x}</li>)}</ul></div><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>{p.affiliateUrl?<a className="text-link" href={p.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">쿠팡에서 바로 보기 <ExternalLink size={15}/></a>:<button className="text-link" onClick={onCompare}>상품 정보 보기 <ArrowRight size={15}/></button>}</div></article>}

function Home({go}:{go:(t:Tab)=>void;goCompare:(q?:string)=>void}){const [search,setSearch]=useState('');const popularSearches=['배변패드','하네스','이동장','고양이 모래'];const submitSearch=()=>goCompare(search);return <main>
 <section className="hero"><div className="hero-copy"><span className="pill">반려생활 선택 가이드</span><h1>우리 아이에게 필요한 것을<br/><em>더 쉽게</em> 골라보세요</h1><p>강아지와 고양이 용품을 조건별로 살펴보고<br/>나에게 맞는 상품을 찾아보세요.</p>
 <div className="search"><Search size={20}/><input value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={e=>e.key==='Enter'&&submitSearch()} placeholder="무엇을 찾고 계세요?" /><button onClick={submitSearch}>찾아보기</button></div><div className="quick-search"><span>자주 찾는 검색</span>{popularSearches.map(x=><button key={x} onClick={()=>{setSearch(x);submitSearch()}}>{x}</button>)}</div></div><div className="hero-art"><div className="pet-orb dog-orb"><Dog/></div><div className="pet-orb cat-orb"><Cat/></div></div></section>
 <section className="section"><AffiliateNotice/><div className="section-head"><div><span className="section-kicker">PET CATEGORY</span><h2>반려동물별로 찾아보기</h2></div></div><div className="pet-grid"><button className="pet-card dog" onClick={()=>go('강아지')}><Dog/><div><span>FOR DOG</span><h3>강아지 용품</h3><p>산책 · 배변 · 급식 · 이동 · 놀이</p></div><ArrowRight/></button><button className="pet-card cat" onClick={()=>go('고양이')}><Cat/><div><span>FOR CAT</span><h3>고양이 용품</h3><p>화장실 · 급식 · 스크래처 · 이동 · 놀이</p></div><ArrowRight/></button></div></section>
 <section className="section soft"><div className="section-head"><div><span className="section-kicker">BY SITUATION</span><h2>이런 상황이라면</h2></div><button onClick={()=>go('상황별 추천')} className="more">전체 보기 <ArrowRight size={16}/></button></div><div className="situation-grid">{situations.map(([a,b,c])=><button className="situation" key={a} onClick={()=>go('상황별 추천')}><strong>{a}</strong><span>{b}</span><small>{c}</small></button>)}</div></section>
 <section className="section"><div className="section-head"><div><span className="section-kicker">POPULAR GUIDE</span><h2>많이 찾는 용품</h2></div><button onClick={()=>go('상품 비교')} className="more">상품 비교 <ArrowRight size={16}/></button></div><div className="product-grid">{products.slice(0,6).map(p=><ProductCard key={p.name} p={p} onCompare={()=>go('상품 비교')}/>)}</div></section>
 <section className="section soft"><div className="section-head"><div><span className="section-kicker">RECENT GUIDES</span><h2>반려생활 정보</h2></div><button onClick={()=>go('반려생활 정보')} className="more">전체 보기 <ArrowRight size={16}/></button></div><div className="guide-grid">{guides.map(([a,b])=><article className="guide" key={a}><span>GUIDE</span><h3>{a}</h3><p>{b}</p><button onClick={()=>{openGuide(guideSlug(a))}}>자세히 보기 <ArrowRight size={15}/></button></article>)}</div></section>
 </main>}

function Listing({pet}:{pet?:'강아지'|'고양이'}){const [filter,setFilter]=useState('전체');const cats=['전체','산책','배변·위생','급식','외출','놀이·생활','화장실'];const list=products.filter(p=>(!pet||p.pet===pet)&&(filter==='전체'||p.category===filter));return <main className="page"><AffiliateNotice/><div className="page-title"><span className="section-kicker">{pet==='강아지'?'FOR DOG':pet==='고양이'?'FOR CAT':'PRODUCT GUIDE'}</span><h1>{pet?pet+' 용품': '상품 비교'}</h1><p>{pet?pet+'에게 필요한 용품을 선택 기준과 함께 살펴보세요.':'용품별 핵심 기준을 비교하고 필요한 상품을 찾아보세요.'}</p></div><div className="filter-row">{cats.map(x=><button key={x} className={filter===x?'selected':''} onClick={()=>setFilter(x)}>{x}</button>)}</div>{list.length?<div className="product-grid">{list.map(p=><ProductCard key={p.name} p={p}/>)}</div>:<div className="empty">현재 선택한 조건에 맞는 상품 정보가 없습니다. 다른 항목을 선택해보세요.</div>}<AffiliateNotice/></main>}

function Situations({goSearch}:{goSearch:(q:string)=>void}){const searchTerms:Record<string,string>={'초보 보호자':'배변','좁은 집':'놀이','자주 외출한다면':'외출','가성비를 찾는다면':'배변','강아지 여러 마리':'강아지','고양이 여러 마리':'고양이'};return <main className="page"><div className="page-title"><span className="section-kicker">BY SITUATION</span><h1>상황별 추천</h1><p>우리 집 환경과 생활 방식에 맞춰 필요한 용품을 찾아보세요.</p></div><div className="situation-list">{situations.map(([a,b,c,points],i)=><article key={a} className="situation-large"><div className="num">0{i+1}</div><div><h2>{a}</h2><h3>{b}</h3><p>{c}</p><ul>{points.map(x=><li key={x}><Check/>{x}</li>)}</ul><button className="situation-action" onClick={()=>goSearch(searchTerms[a]||a)}>관련 상품 찾아보기 <ArrowRight size={15}/></button></div></article>)}</div></main>}

function guideSlug(title:string){return title.toLowerCase().replace(/[^가-힣a-z0-9]+/g,'-').replace(/^-|-$/g,'')}

const guideProductKeywords:Record<string,string[]> = {
 '강아지 배변패드 고르는 법':['배변','패드'],
 '고양이 모래 종류 비교':['두부모래','화장실'],
 '강아지 산책용품 고르는 법':['하네스','리드줄'],
 '고양이 화장실 고르는 법':['화장실'],
 '강아지 하네스 착용법과 사이즈 확인':['하네스'],
 '강아지 배변패드 교체 주기와 선택 기준':['배변','패드'],
 '고양이 모래 추천 전에 알아둘 종류별 특징':['두부모래','화장실'],
 '고양이 모래 교체 주기와 관리 방법':['두부모래','화장실'],
 '고양이 화장실 위치 고르는 법':['화장실'],
 '고양이 화장실 크기 고르는 법':['화장실'],
 '고양이 스크래쳐 고르는 법':['스크래쳐','스크래처'],
 '강아지 이동장 고르는 법':['이동장'],
 '강아지 자동급수기 고르는 법':['급수기','자동급수기'],
 '강아지 노즈워크 장난감 고르는 법':['노즈워크','놀이'],
 '고양이 이동장 고르는 법':['이동장'],
 '고양이 급수기 고르는 법':['급수기','자동급수'],
 '고양이 모래 버리는 법':['두부모래','화장실'],
 '고양이 화장실 추천 전에 확인할 기준':['화장실'],
 '강아지 하네스 추천 전에 확인할 기준':['하네스'],
 '강아지 이동장 크기 고르는 법':['이동장']
}
function getGuideProducts(title:string){
 const keys=guideProductKeywords[title]||[]
 return products.filter(p=>keys.some(k=>(p.name+p.category+p.desc+p.tags.join('')).includes(k))).slice(0,2)
}
const relatedGuideMap:Record<string,string[]> = {
 '강아지 배변패드 고르는 법':['강아지 배변패드 교체 주기와 선택 기준'],
 '고양이 모래 종류 비교':['고양이 모래 추천 전에 알아둘 종류별 특징','고양이 모래 교체 주기와 관리 방법','고양이 화장실 고르는 법'],
 '강아지 산책용품 고르는 법':['강아지 하네스 착용법과 사이즈 확인'],
 '고양이 화장실 고르는 법':['고양이 화장실 크기 고르는 법','고양이 화장실 위치 고르는 법','고양이 모래 종류 비교'],
 '강아지 하네스 착용법과 사이즈 확인':['강아지 산책용품 고르는 법'],
 '강아지 배변패드 교체 주기와 선택 기준':['강아지 배변패드 고르는 법'],
 '고양이 모래 추천 전에 알아둘 종류별 특징':['고양이 모래 종류 비교','고양이 모래 교체 주기와 관리 방법'],
 '고양이 모래 교체 주기와 관리 방법':['고양이 모래 종류 비교','고양이 화장실 고르는 법'],
 '고양이 화장실 위치 고르는 법':['고양이 화장실 고르는 법','고양이 화장실 크기 고르는 법'],
 '고양이 화장실 크기 고르는 법':['고양이 화장실 고르는 법','고양이 화장실 위치 고르는 법'],
 '고양이 스크래쳐 고르는 법':['고양이 화장실 고르는 법'],
 '강아지 이동장 고르는 법':['강아지 산책용품 고르는 법'],
 '강아지 자동급수기 고르는 법':['강아지 배변패드 고르는 법'],
 '강아지 노즈워크 장난감 고르는 법':['강아지 산책용품 고르는 법'],
 '고양이 이동장 고르는 법':['고양이 화장실 고르는 법'],
 '고양이 급수기 고르는 법':['고양이 모래 종류 비교'],
 '고양이 모래 버리는 법':['고양이 모래 교체 주기와 관리 방법','고양이 모래 추천 전에 알아둘 종류별 특징'],
 '고양이 화장실 추천 전에 확인할 기준':['고양이 화장실 고르는 법','고양이 화장실 크기 고르는 법'],
 '강아지 하네스 추천 전에 확인할 기준':['강아지 하네스 착용법과 사이즈 확인','강아지 산책용품 고르는 법'],
 '강아지 이동장 크기 고르는 법':['강아지 이동장 고르는 법']
}
function getRelatedGuides(title:string){
 const names=relatedGuideMap[title]||[]
 return names.map(name=>guides.find(g=>g[0]===name)).filter(Boolean) as typeof guides[number][]
}
function Guides({slug,openGuide}:{slug?:string;openGuide:(slug?:string)=>void}){
 const item=slug?guides.find(([a])=>guideSlug(a)===slug):null;
 if(item){
  const [a,b,points,body,faq,summary]=item;
  const guideProducts=getGuideProducts(a);
  return <main className="page"><AffiliateNotice/><div className="page-title"><span className="section-kicker">LIFE GUIDE</span><h1>{a}</h1><p>{b}</p></div>
   <article className="guide-detail guide-article"><span>GUIDE</span><h2>고를 때 확인할 기준</h2><ul>{points.map(x=><li key={x}>{x}</li>)}</ul><p className="guide-body">{body}</p><div className="guide-faq"><h3>자주 묻는 질문</h3><p><strong>{faq}</strong></p></div><div className="guide-summary"><strong>한눈에 정리</strong><p>{summary}</p></div></article>
   {guideProducts.length>0&&<section className="guide-products"><div className="guide-products-head"><div><span className="section-kicker">RELATED PRODUCTS</span><h2>이 기준에 맞는 상품 살펴보기</h2><p>위에서 확인한 선택 기준과 관련된 상품을 함께 비교해보세요.</p></div><button className="text-link" onClick={()=>{window.history.pushState({},'', '/compare');window.dispatchEvent(new PopStateEvent('popstate'))}}>전체 상품 비교 <ArrowRight size={15}/></button></div>
    <div className="guide-product-grid">{guideProducts.map(p=><article className="guide-product" key={p.name}><a href={p.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" className="guide-product-image"><img src={p.imageUrl} alt={p.name} loading="lazy" decoding="async"/></a><div className="guide-product-body"><span className="eyebrow">{p.pet} · {p.category}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="guide-product-check"><strong>고를 때 확인</strong><span>{p.checkPoints[0]}</span><span>{p.checkPoints[1]}</span></div><a className="text-link" href={p.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">쿠팡에서 상품 확인 <ExternalLink size={15}/></a></div></article>)}</div></section>}
   {getRelatedGuides(a).length>0&&<section className="related-guides"><div className="related-guides-head"><span className="section-kicker">RELATED GUIDES</span><h2>함께 보면 좋은 정보</h2></div><div className="related-guide-grid">{getRelatedGuides(a).map(([title,desc])=><button className="related-guide-card" key={title} onClick={()=>{openGuide(guideSlug(title))}}><strong>{title}</strong><span>{desc}</span><em>자세히 보기 <ArrowRight size={14}/></em></button>)}</div></section>}
   <div className="guide-back"><button className="text-link" onClick={()=>{openGuide()}}>반려생활 정보 전체 보기 <ArrowRight size={15}/></button></div>
  </main>
 }
 return <main className="page guides-page"><div className="page-title"><span className="section-kicker">LIFE GUIDE</span><h1>반려생활 정보</h1><p>제품을 사기 전에 알아두면 좋은 선택 기준을 쉽게 정리했습니다.</p></div><div className="guide-list">{guides.map(([a,b,points])=><article className="guide-detail" key={a}><span>GUIDE</span><h2>{a}</h2><p>{b}</p><h3>고를 때 확인할 기준</h3><ul>{points.map(x=><li key={x}>{x}</li>)}</ul><button className="text-link" onClick={()=>openGuide(guideSlug(a))}>자세히 보기 <ArrowRight size={15}/></button></article>)}</div></main>
}

function Compare(){const [q,setQ]=useState(()=>new URLSearchParams(window.location.search).get('q')||'');const filtered=useMemo(()=>products.filter(p=>(p.name+p.pet+p.category+p.desc+p.tags.join('')+(p.suitableFor||'')+p.checkPoints.join('')).toLowerCase().includes(q.trim().toLowerCase())),[q]);return <main className="page"><AffiliateNotice/><div className="page-title"><span className="section-kicker">COMPARE</span><h1>상품 비교</h1><p>궁금한 용품을 검색하고 선택 기준을 확인해보세요.</p></div><div className="compare-search"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="예: 배변패드, 고양이 모래, 이동장"/>{q&&<button className="clear-search" onClick={()=>setQ('')}>초기화</button>}</div><div className="compare-hint">상품명뿐 아니라 대상, 카테고리, 선택 기준까지 함께 검색됩니다.</div><div className="compare-filters"><button className={!q?'selected':''} onClick={()=>setQ('')}>전체</button>{['강아지','고양이','산책','배변·위생','급식','외출','놀이·생활','화장실'].map(x=><button key={x} onClick={()=>setQ(x)}>{x}</button>)}</div>{filtered.length?<div className="compare-table"><div className="compare-head"><span>용품</span><span>대상</span><span>카테고리</span><span>선택 기준</span><span></span></div>{filtered.map(p=><div className="compare-row" key={p.name}><strong>{p.name}</strong><span>{p.pet}</span><span>{p.category}</span><span><strong className="compare-desc-title">핵심:</strong> {p.desc}<br/><strong className="compare-desc-title">추천:</strong> {p.suitableFor||'상품의 용도와 생활환경을 확인해보세요.'}</span>{p.affiliateUrl?<a className="compare-link" href={p.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" aria-label="쿠팡에서 상품 보기" title="쿠팡에서 상품 보기"><ExternalLink size={16}/></a>:<button aria-label="상품 정보 보기" title="상품 정보 보기"><ExternalLink size={16}/></button>}</div>)}</div>:<div className="empty">검색 결과가 없습니다. 다른 키워드로 검색해보세요.</div>}</main>}

function InfoPage({tab,go}:{tab:Tab;go:(t:Tab)=>void}){const data:Record<string,{title:string;body:string[]}>={ 
 '사이트 소개':{title:'사이트 소개',body:['펫고르미는 강아지와 고양이 용품을 고를 때 필요한 기준을 쉽게 정리하는 반려생활 정보 사이트입니다.','특정 상품만을 일방적으로 권하기보다 용도와 생활환경에 따라 무엇을 확인해야 하는지 비교할 수 있도록 정보를 제공합니다.','상품 정보와 가격은 판매처의 실제 페이지에서 최종 확인하시기 바랍니다.']},
 '이용 안내':{title:'이용 안내',body:['카테고리에서 강아지·고양이 용품을 살펴보거나 상품 비교에서 필요한 키워드를 검색할 수 있습니다.','펫고르미의 상품 정보는 선택을 돕기 위한 참고 자료이며, 실제 판매 여부·가격·배송·재고 등은 판매처에서 확인해야 합니다.']},
 '개인정보 처리방침':{title:'개인정보 처리방침',body:['현재 펫고르미는 별도의 회원가입 기능을 제공하지 않으며, 이름·전화번호 등 회원정보를 직접 수집하는 기능을 두고 있지 않습니다.','향후 문의 폼, 방문자 통계, 광고 또는 제휴 서비스가 추가되면 해당 기능에 맞춰 개인정보 처리방침을 업데이트할 예정입니다.','외부 서비스가 정보를 처리하는 경우 각 서비스의 정책도 함께 확인하시기 바랍니다.']},
 '이용약관':{title:'이용약관',body:['펫고르미가 제공하는 콘텐츠는 반려생활과 상품 선택을 돕기 위한 일반적인 정보입니다.','상품의 구매 여부와 사용 적합성은 이용자가 상품 상세정보와 제조·판매처의 안내를 확인하여 판단해야 합니다.','사이트 콘텐츠를 무단 복제하거나 상업적으로 재배포하는 행위는 제한될 수 있습니다.']},
 '문의하기':{title:'문의하기',body:['사이트 이용 중 오류나 콘텐츠 관련 문의를 준비하고 있습니다.','현재는 별도의 문의 접수 이메일을 운영하지 않고 있습니다.','운영 이메일이 확정되면 이 페이지에 공식 문의 방법을 안내하겠습니다.']},
 '제휴 안내':{title:'제휴 안내',body:['펫고르미는 반려동물 용품에 관한 정보와 비교 콘텐츠를 제공하고 제휴 링크를 통해 수익을 얻을 수 있는 구조로 운영됩니다.','제휴 링크가 연결된 상품 영역에는 제휴 사실을 알아보기 쉽게 표시하고 있습니다.','상품별 제휴 링크가 연결된 경우 제휴 사실을 확인할 수 있도록 안내 문구를 함께 표시합니다.']}
};const d=data[tab];return <main className="page info-page"><button className="back-link" onClick={()=>go('홈')}><ChevronLeft size={17}/> 홈으로 돌아가기</button><div className="page-title"><span className="section-kicker">PETGOREUMI</span><h1>{d.title}</h1></div><div className="info-card">{d.body.map((x,i)=><p key={i}>{x}</p>)}</div></main>}

const pathToTab=(path:string):Tab=>{
 if(path.startsWith('/guides/')) return '반려생활 정보'
 const map:Record<string,Tab>={
  '/':'홈','/dog':'강아지','/cat':'고양이','/situations':'상황별 추천','/compare':'상품 비교','/guides':'반려생활 정보',
  '/about':'사이트 소개','/usage':'이용 안내','/privacy':'개인정보 처리방침','/terms':'이용약관','/contact':'문의하기','/partnership':'제휴 안내'
 }
 return map[path]||'홈'
}
const tabToPath=(t:Tab)=>{
 const map:Record<Tab,string>={'홈':'/','강아지':'/dog','고양이':'/cat','상황별 추천':'/situations','상품 비교':'/compare','반려생활 정보':'/guides','사이트 소개':'/about','이용 안내':'/usage','개인정보 처리방침':'/privacy','이용약관':'/terms','문의하기':'/contact','제휴 안내':'/partnership'}
 return map[t]
}
export default function App(){const [path,setPath]=useState(()=>window.location.pathname);const [tab,setTab]=useState<Tab>(()=>pathToTab(window.location.pathname));const go=(t:Tab)=>{const nextPath=tabToPath(t);window.history.pushState({},'',nextPath);setPath(nextPath);setTab(t);window.scrollTo({top:0,behavior:'smooth'})}; const goCompare=(q='')=>{const nextPath=q.trim()?'/compare?q='+encodeURIComponent(q.trim()):'/compare';window.history.pushState({},'',nextPath);setPath(nextPath);setTab('상품 비교');window.scrollTo({top:0,behavior:'smooth'})};
 useEffect(()=>{const onPop=()=>{setPath(window.location.pathname);setTab(pathToTab(window.location.pathname))};window.addEventListener('popstate',onPop);return()=>window.removeEventListener('popstate',onPop)},[]);
 useEffect(()=>{const titles:Record<Tab,string>={'홈':'펫고르미 | 반려동물 용품 선택 가이드','강아지':'강아지 용품 추천 | 펫고르미','고양이':'고양이 용품 추천 | 펫고르미','상황별 추천':'상황별 반려동물 용품 추천 | 펫고르미','상품 비교':'반려동물 용품 비교 | 펫고르미','반려생활 정보':'반려생활 정보 | 펫고르미','사이트 소개':'사이트 소개 | 펫고르미','이용 안내':'이용 안내 | 펫고르미','개인정보 처리방침':'개인정보 처리방침 | 펫고르미','이용약관':'이용약관 | 펫고르미','문의하기':'문의하기 | 펫고르미','제휴 안내':'제휴 안내 | 펫고르미'};const guideSlugPath=tab==='반려생활 정보'&&path.startsWith('/guides/')?path.slice(8):'';const guideItem=guideSlugPath?guides.find(([a])=>guideSlug(a)===guideSlugPath):null;document.title=guideItem?guideItem[0]+' | 펫고르미':titles[tab];let desc=document.querySelector('meta[name="description"]') as HTMLMetaElement|null;if(!desc){desc=document.createElement('meta');desc.name='description';document.head.appendChild(desc)}desc.content=guideItem?guideItem[1]:'강아지와 고양이 용품을 조건별로 비교하고 나에게 맞는 상품을 찾도록 도와주는 펫고르미입니다.';const canonical=document.querySelector('link[rel="canonical"]')||document.head.appendChild(document.createElement('link'));canonical.setAttribute('rel','canonical');canonical.setAttribute('href',window.location.origin+(guideItem?'/guides/'+guideSlug(guideItem[0]):tabToPath(tab)))},[tab,path]);let content:ReactNode=<Home go={go} goCompare={goCompare}/>;if(tab==='강아지')content=<Listing pet="강아지"/>;if(tab==='고양이')content=<Listing pet="고양이"/>;if(tab==='상황별 추천')content=<Situations goSearch={goCompare}/>;if(tab==='상품 비교')content=<Compare/>;if(tab==='반려생활 정보')content=<Guides slug={path.startsWith('/guides/')?path.slice(8):undefined} openGuide={(slug)=>{const next=slug?'/guides/'+slug:'/guides';window.history.pushState({},'',next);setPath(next);setTab('반려생활 정보');window.scrollTo({top:0,behavior:'smooth'})}}/>;if(['사이트 소개','이용 안내','개인정보 처리방침','이용약관','문의하기','제휴 안내'].includes(tab))content=<InfoPage tab={tab} go={go}/>;const guideSlugPath=tab==='반려생활 정보'&&window.location.pathname.startsWith('/guides/')?window.location.pathname.slice(8):'';const guideItem=guideSlugPath?guides.find(([a])=>guideSlug(a)===guideSlugPath):null;return <><SeoSchema tab={tab} guideItem={guideItem||undefined}/><Header tab={tab} go={go}/>{content}<footer><div className="footer-inner"><div><button className="logo footer-logo" onClick={()=>go('홈')}><span>펫</span>고르미</button><p>우리 아이에게 필요한 것을<br/>더 쉽게 고르는 곳</p></div><div className="footer-links">{(['사이트 소개','이용 안내','개인정보 처리방침','이용약관','문의하기','제휴 안내'] as Tab[]).map(n=><button key={n} onClick={()=>go(n)}>{n}</button>)}</div></div><div className="copyright">© 2026 펫고르미. All rights reserved.</div></footer></>}
