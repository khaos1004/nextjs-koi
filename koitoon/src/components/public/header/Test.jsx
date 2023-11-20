import 'jquery';
import 'jquery-migrate';
import 'slick-carousel/slick/slick.min.js';

export default function Test(){
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    return(
        <>
<section id="wrap" data-device="mobile">
      <div id="header" className="move">
        <p className="gnbBg"></p>
        <div className="inConts">
          <h1>
            <a href="/"><img src="/static/images/h1_logo.png" alt="People&amp;Story"/></a>
          </h1>

          <div id="pcMenu">
            <ul id="list">

                <li className="">
                    <a href="/about/"><span>ABOUT</span><i></i></a>
                    <ul className="gnbSub d2" >
                        <li><a href="/about/company"><span>기업소개</span></a></li>
                        <li><a href="/about/greeting"><span>CEO인사말</span></a></li>
                        <li><a href="/about/history"><span>연혁</span></a></li>
                        <li><a href="/about/organization"><span>조직도</span></a></li>
                        <li><a href="/about/location"><span>오시는길</span></a></li>
                    </ul>
                </li>
                <li className="">
                    <a href="/contents/"><span>CONTENTS</span><i></i></a>
                    <ul className="gnbSub d2" >
                        <li><a href="/contents/novel"><span>웹소설</span></a></li>
                        <li><a href="/contents/webtoon"><span>웹툰</span></a></li>
                        <li><a href="/contents/metaverse"><span>메타버스</span></a></li>
                        <li><a href="/contents/osmu"><span>OSMU</span></a></li>
                    </ul>
                </li>
                <li className="">
                    <a href="/pr/"><span>PR</span><i></i></a>
                    <ul className="gnbSub d2" >
                        <li><a href="/pr/news"><span>News</span></a></li>
                    </ul>
                </li>
                <li className="">
                    <a href="/contact/"><span>CONTACT</span><i></i></a>
                    <ul className="gnbSub d2" >
                        <li><a href="/contact/posting"><span>투고문의</span></a></li>
                        <li><a href="/contact/affiliation"><span>제휴문의/제휴사</span></a></li>
                    </ul>
                </li>
                <li className="">
                    <a href="/scm/"><span>정산관리</span><i></i></a>
                    <ul className="gnbSub d2" >
                        <li><a href="/scm/"><span>정산관리</span></a></li>
                    </ul>
                </li>
            </ul>
          </div>

          <div className="right-utill">
            <div className="language">
              <a href="javascript:set_language('ko');" id="lang_ko" className="active">
                <span>KO</span></a>
              <a href="javascript:set_language('en');" id="lang_en">
                <span>EN</span></a>
            </div>

            <form action="/i18n/setlang/" method="post" id="language_form">
                <input type="hidden" name="csrfmiddlewaretoken" value="g2rOrT4gCNOLXkwzWEQpDIN0mnyaniKRHB6yDj91d8RsxwVKcGk4xJClEELXgj7D"/>
                <input type="hidden" id="language" name="language" value="ko"/>
            </form>

            <button type="button" className="mMenu"><span></span></button>
          </div>
        </div>
      </div>

      <div id="pt_Menu">
        <div id="pt_MenuArea">
          <div className="head">
            <a href="/"><img src="/static/images/big_logo.png" alt="People&amp;Story"/></a>
            <a href="javascript:void(0);" className="closeMenu"></a>
          </div>
          <ul id="pt_Menu_list">

            <li className="">
                <a href="javascript:void(0);"><span>ABOUT</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/about/company"><span>기업소개</span></a></li>
                    <li><a href="/about/greeting"><span>CEO인사말</span></a></li>
                    <li><a href="/about/history"><span>연혁</span></a></li>
                    <li><a href="/about/organization"><span>조직도</span></a></li>
                    <li><a href="/about/location"><span>오시는길</span></a></li>
                </ul>
            </li>
            <li className="">
                <a href="javascript:void(0);"><span>CONTENTS</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/contents/novel"><span>웹소설</span></a></li>
                    <li><a href="/contents/webtoon"><span>웹툰</span></a></li>
                    <li><a href="/contents/metaverse"><span>메타버스</span></a></li>
                    <li><a href="/contents/osmu"><span>OSMU</span></a></li>
                </ul>
            </li>
            <li className="">
                <a href="javascript:void(0);"><span>PR</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/pr/news"><span>News</span></a></li>
                </ul>
            </li>
            <li className="">
                <a href="javascript:void(0);"><span>CONTACT</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/contact/posting"><span>투고문의</span></a></li>
                    <li><a href="/contact/affiliation"><span>제휴문의/제휴사</span></a></li>
                </ul>
            </li>
            <li className="">
                <a href="javascript:void(0);"><span>정산관리</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/scm/"><span>정산관리</span></a></li>
                </ul>
            </li>
          </ul>
        </div>
      </div>

      <div id="menuArea" className="menuLayer">
        <div className="menuclose"></div>
        <ul id="menu" className="gnb">

            <li className="">
                <a href="javascript:void(0);" pc-href="/about/"><span>ABOUT</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/about/company"><span>기업소개</span></a></li>
                    <li><a href="/about/greeting"><span>CEO인사말</span></a></li>
                    <li><a href="/about/history"><span>연혁</span></a></li>
                    <li><a href="/about/organization"><span>조직도</span></a></li>
                    <li><a href="/about/location"><span>오시는길</span></a></li>
                </ul>
            </li>
            <li className="">
                <a href="javascript:void(0);" pc-href="/about/"><span>CONTENTS</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/contents/novel"><span>웹소설</span></a></li>
                    <li><a href="/contents/webtoon"><span>웹툰</span></a></li>
                    <li><a href="/contents/metaverse"><span>메타버스</span></a></li>
                    <li><a href="/contents/osmu"><span>OSMU</span></a></li>
                </ul>
            </li>
            <li className="">
                <a href="javascript:void(0);" pc-href="/about/"><span>PR</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/pr/news"><span>News</span></a></li>
                </ul>
            </li>
            <li className="">
                <a href="javascript:void(0);" pc-href="/about/"><span>CONTACT</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/contact/posting"><span>투고문의</span></a></li>
                    <li><a href="/contact/affiliation"><span>제휴문의/제휴사</span></a></li>
                </ul>
            </li>
            <li className="">
                <a href="javascript:void(0);" pc-href="/about/"><span>정산관리</span><i></i></a>
                <ul className="gnbSub d2">
                    <li><a href="/scm/"><span>정산관리</span></a></li>
                </ul>
            </li>
        </ul>
      </div>
    </section>

	<section id="fullpage">
		<section className="section" data-anchor="Main" data-num="0">
			<div className="inConts">
				<div id="mVisual"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" >←</button>
					<div className="visualRoll slick-initialized slick-slider">
                        
                            <div className="slick-list draggable"><div className="slick-track" >
                                <a href="/contents/novel" className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" >
                                <div className="slick-slide" aria-hidden="true">
                                    
                                    
                                    <img src="/media/banner/2023/06/thumb_visual02.jpg" className="ptVar" alt=""/>
                                    <img src="/media/banner/2023/06/홈페이지롤링이미지-모바일640x800_웹소설.jpg" className="mVar" alt=""/>
                                    
                                </div>
                            </a><a href="/contents/webtoon" className="slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1">
                                <div className="slick-slide" aria-hidden="true">
                                    
                                    
                                    <img src="/media/banner/2023/06/thumb_visual01_3l5EXZi.jpg" className="ptVar" alt=""/>
                                    <img src="/media/banner/2023/06/thumb_visual01_m_NOyjlqA.jpg" className="mVar" alt=""/>
                                    
                                </div>
                            </a><a href="/contents/novel" className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" >
                                <div className="slick-slide" aria-hidden="true">
                                    
                                    
                                    <img src="/media/banner/2023/06/thumb_visual02.jpg" className="ptVar" alt=""/>
                                    <img src="/media/banner/2023/06/홈페이지롤링이미지-모바일640x800_웹소설.jpg" className="mVar" alt=""/>
                                </div>
                            </a><a href="/contents/webtoon" className="slick-slide slick-cloned" data-slick-index="2" aria-hidden="true" tabindex="-1" >
                                <div className="slick-slide" aria-hidden="true">

                                    <img src="/media/banner/2023/06/thumb_visual01_3l5EXZi.jpg" className="ptVar" alt=""/>
                                    <img src="/media/banner/2023/06/thumb_visual01_m_NOyjlqA.jpg" className="mVar" alt=""/>
                                    
                                </div>
                            </a><a href="/contents/novel" className="slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabindex="-1">
                                <div className="slick-slide" aria-hidden="true">
                                    
                                    
                                    <img src="/media/banner/2023/06/thumb_visual02.jpg" className="ptVar" alt=""/>
                                    <img src="/media/banner/2023/06/홈페이지롤링이미지-모바일640x800_웹소설.jpg" className="mVar" alt=""/>
                                    
                                </div>
                            </a></div></div>
                            
                            
                  
                        
					</div>
				<button className="slick-next slick-arrow" aria-label="Next" type="button">→</button></div>
			</div>
		</section>
		<section className="section page-1" data-anchor="Company" data-num="1">
			<div className="inConts">
				<div className="about-people f0">
					<div className="text-area">
						<div className="hGroup aos-init aos-animate" data-aos="fade-up">
							<p className="title"><span f-point="">People</span> &amp; Story</p>
						</div>

						<div className="about-text aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
							<p className="tit">스토리의 힘을 믿는 사람들</p>
							<p className="title">피플앤스토리</p>
							<p className="text">
                                웹소설과 웹툰을 제작·유통하고, 확보된 IP를 기반으로 영화·드라마·게임·뮤지컬 등 다양한 분야로 확장해 나가고 있는 콘텐츠 전문 기업입니다.
							</p>
                        
							<p className="btn"><a href="/about/company" className="vMore">VIEW MORE <span className="arr"></span></a></p>
						</div>
					</div>
					<div className="thumb-area aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"><button className="slick-prev slick-arrow" aria-label="Previous" type="button">←</button>
						<div className="thumbRoll slick-initialized slick-slider">
                            <div className="slick-list draggable">
                                <div className="slick-track" ><div className="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" >
                                    <img src="/static/images/main/thumb_company04.jpg" alt=""/>
                                        </div>
                                        <div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company05.jpg" alt=""/></div>
                                            <div className="slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company01.jpg" alt=""/></div>
                                            <div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" tabindex="0" >
                                            <img src="/static/images/main/thumb_company06.jpg" alt=""/></div>
                                            <div className="slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="0">
                                            <img src="/static/images/main/thumb_company02.jpg" alt=""/></div>
                                            <div className="slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company03.jpg" alt=""/></div>
                                            <div className="slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company04.jpg" alt=""/></div>
                                            <div className="slick-slide" data-slick-index="5" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company05.jpg" alt=""/></div>
                                            <div className="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company01.jpg" alt=""/></div>
                                            <div className="slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company06.jpg" alt=""/></div>
                                            <div className="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company02.jpg" alt=""/></div>
                                            <div className="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company03.jpg" alt=""/></div>
                                            <div className="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" tabindex="-1" >
                                            <img src="/static/images/main/thumb_company04.jpg" alt=""/></div>
                                            <div className="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" tabindex="-1" >
                                                <img src="/static/images/main/thumb_company05.jpg" alt=""/>
                                                </div>
                                                </div>
                                                </div>
							
							
							
							
							
						</div>
					<button className="slick-next slick-arrow" aria-label="Next" type="button">→</button></div>
				</div>
			</div>
		</section>
		<section className="section page-2" data-anchor="Contents" data-num="2">
			<div className="inConts">
				<div className="hGroup aos-init aos-animate" data-aos="fade-up">
					<p className="title">Our <span f-point="">Contents</span></p>
					<p className="text"></p>
				</div>

				<div className="contents-area f0">
					<div className="contents-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
						<dl className="book-title">
							<dt>웹소설</dt>
							<dd>로맨스, 로맨스 판타지, BL, 판타지, 무협을 중심으로 다양한 웹소설 콘텐츠를 기획·생산하여 국내·외 플랫폼에 유통하는 등 원작 IP를 기반으로 한 콘텐츠 사업을 관리합니다.</dd>
                            
						</dl>
						<ul className="book-list">
                            
                                
                                <li>
                                    <a href="/media/contents/2023/06/가르쳐주세요_선베_2.jpg" data-fancybox="">
                                        <p className="cate">인기</p>
                                        <p className="thumb"><img src="/media/contents/2023/06/가르쳐주세요_선베_2.jpg" alt=""/></p>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="/media/contents/2023/06/07._아기_약사_황녀님.jpg" data-fancybox="">
                                        <p className="cate">인기</p>
                                        <p className="thumb"><img src="/media/contents/2023/06/07._아기_약사_황녀님.jpg" alt=""/></p>
                                    </a>
                                </li>
                                
                            
                            
                                
                                <li>
                                    <a href="/media/contents/2023/06/비밀_임신_2_C4wE9VX.jpg" data-fancybox="">
                                        <p className="cate new">신규</p>
                                        <p className="thumb"><img src="/media/contents/2023/06/비밀_임신_2_C4wE9VX.jpg" alt=""/></p>
                                    </a>
                                </li>
                                
                            
						</ul>
						<p className="btn"><a href="/contents/novel" className="vMore">VIEW MORE <span className="arr"></span></a></p>
					</div>

					<div className="contents-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
						<dl className="book-title">
							<dt>웹툰</dt>
							<dd>자체 IP를 바탕으로 한 노블코믹스(웹소설 원작을 웹툰으로 제작)와 공모전 수상작, 그리고 기획을 통해 제작되는 오리지널 웹툰을 제작합니다.</dd>                         
						</dl>
						<ul className="book-list">
                            
                                
                                <li>
                                    <a href="/media/contents/2023/06/툰16_신부가_필요해_완.jpg" data-fancybox="">
                                        <p className="cate">인기</p>
                                        <p className="thumb"><img src="/media/contents/2023/06/툰16_신부가_필요해_완.jpg" alt=""/></p>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="/media/contents/2023/06/툰9_갑의_순정_완.jpg" data-fancybox="">
                                        <p className="cate">인기</p>
                                        <p className="thumb"><img src="/media/contents/2023/06/툰9_갑의_순정_완.jpg" alt=""/></p>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="/media/contents/2023/06/구마흥신소_표지.jpg" data-fancybox="">
                                        <p className="cate new">신규</p>
                                        <p className="thumb"><img src="/media/contents/2023/06/구마흥신소_표지.jpg" alt=""/></p>
                                    </a>
                                </li>
                                
                            
						</ul>
						<p className="btn"><a href="/contents/webtoon" className="vMore">VIEW MORE <span className="arr"></span></a></p>
					</div>
				</div>
			</div>
		</section>
		<section className="section page-3" data-anchor="KeyMetrics" data-num="3">
			<div className="inConts">
				<div className="hGroup aos-init aos-animate" data-aos="fade-up">
					<p className="title"><span f-point="">Key</span> Metrics</p>
					<p className="text">
                        <strong>강력한 작가 네트워크와 전문적인 내부 제작 시스템을 바탕으로</strong><br/> 안정적 ·고품질 콘텐츠를 제작하며, 글로벌 시장을 선도하고 있습니다.                    
					</p>
				</div>
				<div className="keyMetrics-area f0 aos-init aos-animate on" data-aos="fade-up" data-aos-delay="100">
					<div className="keyMetrics-re">
						<dl>
							<dt>보유 웹소설 IP 수</dt>
							<dd><span className="counter-value" data-count="100000">100,000</span> +</dd>
						</dl>
					</div>
					<div className="keyMetrics-re">
						<dl>
							<dt>보유 웹툰 IP 수</dt>
							<dd><span className="counter-value" data-count="5000">5,000</span> +</dd>
						</dl>
					</div>
					<div className="keyMetrics-re">
						<dl>
							<dt>제휴 글로벌 유통사 수</dt>
							<dd><span className="counter-value" data-count="24">24</span> +</dd>
						</dl>
					</div>
					<div className="keyMetrics-re">
						<dl>
							<dt>유통채널 수</dt>
							<dd><span className="counter-value" data-count="54">54</span> +</dd>
						</dl>
					</div>
					<div className="keyMetrics-re">
						<dl>
							<dt>작가 네트워크 수</dt>
							<dd><span className="counter-value" data-count="600">600</span>명 +</dd>
						</dl>
					</div>
					<div className="keyMetrics-re">
						<dl>
							<dt>자체 웹툰 제작 스튜디오 운영</dt>
							<dd><span className="counter-value" data-count="70">70</span>명 +</dd>
						</dl>
					</div>
				</div>
			</div>
		</section>
		<section className="section page-4" data-anchor="Metaverse" data-num="4">
			<div className="inConts">
				<div className="hGroup aos-init" data-aos="fade-up">
					<p className="title"><span f-point="">Meta</span>verse</p>
					<p className="text">
                        웹툰과 지역을 결합한 국내 최초·유일의<br /> <strong>메타버스 플랫폼 ‘툰빌(Toonvill)’을 준비중입니다 <br/><span f-point="">(2024년 공개 예정)</span></strong>
                      
					</p>
				</div>
				<p className="metaverse-thumb aos-init" data-aos="fade-up" data-aos-delay="100"><img src="/static/images/main/thumb_metaverse01.jpg" alt=""/></p>
			</div>
		</section>
		<section className="section page-5" data-anchor="News_Submit" data-num="5">
			<div className="inConts">
				<div className="hGroup aos-init" data-aos="fade-up">
					<p className="title"><span f-point="">Author</span> Submit</p>
					<p className="text">
                        <strong>㈜피플앤스토리에서는 언제나</strong> 작가님들의 신선한 작품을 기다립니다.
                     
					</p>
				</div>

				<div className="author-area f0">
					<div className="author-info">
						<div className="author-info-re aos-init" data-aos="fade-up" data-aos-delay="100">
							<div className="author-info_title">
                                <strong><span>웹소설</span> 투고</strong>
                           
                                <a href="/contact/posting" className="more">+</a>
                            </div>
							<div className="author-info_option">
								<dl>
									<dt>모집분야</dt>
									<dd>로맨스/BL(19금 포함)/판타지/무협 등 장르소설</dd>
								</dl>
								<dl>
									<dt>Email</dt>
									<dd>pns_contents@pnstory.kr</dd>
								</dl>
								<dl>
									<dt>TEL</dt>
									<dd>02-322-2900</dd>
								</dl>
							</div>
						</div>

						<div className="author-info-re aos-init" data-aos="fade-up" data-aos-delay="200">
							<div className="author-info_title">
                                <strong><span>웹툰</span> 투고</strong>
                               
                                <a href="/contact/posting" className="more">+</a>
                            </div>
							<div className="author-info_option">
								<dl>
									<dt>모집분야</dt>
									<dd>로맨스, 로맨스 판타지, 무협, 판타지, 학원, 액션 등의 장르 웹툰 (전 장르 19금 포함)</dd>
								</dl>
								<dl>
									<dt>Email</dt>
									<dd>pnswebtoon@pnstory.kr</dd>
								</dl>
								<dl>
									<dt>TEL</dt>
									<dd>055-337-3487</dd>
								</dl>
							</div>
						</div>
					</div>
					<div className="author-news aos-init" data-aos="fade-up" data-aos-delay="300">
						<div className="author-news_title"><strong>NEWS</strong><a href="/pr/news" className="more">+</a></div>
						<div className="author-news_list">
                            
                                
                                
                                <a href="http://gamefocus.co.kr/detail.php?number=145650" target="_blank">
                                
                                    <p className="subject">[게임포커스] 피플앤스토리-장안대학교, 산학협력 업무협약 체결</p>
                                    <p className="day">2023-10-05</p>
                                </a>
                                
                                
                                <a href="https://n.news.naver.com/mnews/article/138/0002157697?sid=105" target="_blank">
                                
                                    <p className="subject">[디지털데일리] 메타갤럭시아, 김해시 지역특화 메타버스 '툰빌' NFT 2차 에어드랍 진행</p>
                                    <p className="day">2023-09-27</p>
                                </a>
                                
                                
                                <a href="https://n.news.naver.com/mnews/article/468/0000984048?sid=101" target="_blank">
                                
                                    <p className="subject">[스포츠서울] 트레져헌터, 피플앤스토리와 콘텐츠 IP 업무 협약 체결</p>
                                    <p className="day">2023-09-25</p>
                                </a>
                                
                                
                                <a href="http://www.gnmaeil.com/news/articleView.html?idxno=525833" target="_blank">
                                
                                    <p className="subject">[경남매일신문] "제조업 중심 경남, 청년 유입 K-툰 거점으로"</p>
                                    <p className="day">2023-09-06</p>
                                </a>
                                
                            
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>



<section>
  
      <div id="footer">
        <div className="inConts">
          <div className="foot-link">
            <a href="/about/company">기업소개</a> 
            <a href="/about/location">오시는길</a>
            <a href="/etc/sitemap">사이트맵</a>
          </div>

          <div className="foot-btm">
            <div className="foot-text">
              <div>
                <p>
                  <strong>본사</strong>
                  : 경남 김해시 관동로 14, 경남콘텐츠기업육성센터 3층
                </p>
                <p>
                  <strong>대표번호</strong>
                  : 055-337-3487 (서울지사 02-322-2900)
                </p>
                <p>
                  <strong>사업자등록번호</strong>
                  : 105-88-10325
                </p>
              </div>
              <div>
                <p>
                  <strong>서울지사</strong>
                  : 서울특별시 마포구 월드컵북로 19 대상빌딩 4층
               
                </p>
                <p>
                  <strong>부산지사</strong>
                  : 부산광역시 해운대구 재송동 1210 벽산e센텀클래스원 1408호
                
                </p>
                <p>
                  <strong>E-mail</strong>
                  : help@pnstory.kr
                </p>
              </div>
              <address>Copyright&nbsp;©&nbsp;<strong>People&amp;Story.</strong>&nbsp;All Rights Reserved.</address>
            </div>
            <div className="foot-sns">
              <dl>
                <dt>WEBNOVEL SNS</dt>
                <dd>
                  <a href="https://twitter.com/ppnstory_editor" target="_blank"><img src="/static/images/icon_social_twitter.png" alt="twitter"/></a>
                  <a href="https://blog.naver.com/ppnstory" target="_blank"><img src="/static/images/icon_social_blog.png" alt="blog"/></a>
                </dd>
              </dl>
              <dl>
                <dt>WEBTOON SNS</dt>
                <dd>
                  <a href="https://www.instagram.com/pns_webtoon/" target="_blank"><img src="/static/images/icon_social_instagram.png" alt="instagram"/></a>
                  <a href="https://twitter.com/PNS_WEBTOON" target="_blank"><img src="/static/images/icon_social_twitter.png" alt="twitter"/></a>
                  <a href="https://blog.naver.com/pnsstudio" target="_blank"><img src="/static/images/icon_social_blog.png" alt="blog"/></a>
                  <a href="https://www.youtube.com/@pns_webtoon" target="_blank"><img src="/static/images/icon_social_youtobe.png" alt="youtobe"/></a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <a href="javascript:void(0);" className="goTop open">go top</a>

    <div id="progressBar" ></div>
    </section>
    </>
    )
}