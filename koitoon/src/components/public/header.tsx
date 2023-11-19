const Head = (): ReactNode => {
    return (
    <> 
    < div id = "header" > 
    <p className="gnbBg"></p>
    <div className="inConts">
        <h1>
            <a href="/">
                <img src="/static/images/h1_logo.png" alt="People&amp;Story"></a>
            </h1>

            <div id="pcMenu">
                <ul id="list">
                    {/* <!-- <script type="text/javascript"> globalNavigationBar(); </script> --> */}
                    <li className="">
                        <a href="/about/">
                            <span>ABOUT</span>
                            <i></i>
                        </a>
                        <ul className="gnbSub d2" style="">
                            <li>
                                <a href="/about/company">
                                    <span>기업소개</span>
                                </a>
                            </li>
                            <li>
                                <a href="/about/greeting">
                                    <span>CEO인사말</span>
                                </a>
                            </li>
                            <li>
                                <a href="/about/history">
                                    <span>연혁</span>
                                </a>
                            </li>
                            <li>
                                <a href="/about/organization">
                                    <span>조직도</span>
                                </a>
                            </li>
                            <li>
                                <a href="/about/location">
                                    <span>오시는길</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <a href="/contents/">
                            <span>CONTENTS</span>
                            <i></i>
                        </a>
                        <ul className="gnbSub d2" style="">
                            <li>
                                <a href="/contents/novel">
                                    <span>웹소설</span>
                                </a>
                            </li>
                            <li>
                                <a href="/contents/webtoon">
                                    <span>웹툰</span>
                                </a>
                            </li>
                            <li>
                                <a href="/contents/metaverse">
                                    <span>메타버스</span>
                                </a>
                            </li>
                            <li>
                                <a href="/contents/osmu">
                                    <span>OSMU</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <a href="/pr/">
                            <span>PR</span>
                            <i></i>
                        </a>
                        <ul className="gnbSub d2" style="">
                            <li>
                                <a href="/pr/news">
                                    <span>News</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <a href="/contact/">
                            <span>CONTACT</span>
                            <i></i>
                        </a>
                        <ul className="gnbSub d2" style="">
                            <li>
                                <a href="/contact/posting">
                                    <span>투고문의</span>
                                </a>
                            </li>
                            <li>
                                <a href="/contact/affiliation">
                                    <span>제휴문의/제휴사</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <a href="/scm/">
                            <span>정산관리</span>
                            <i></i>
                        </a>
                        <ul className="gnbSub d2" style="">
                            <li>
                                <a href="/scm/">
                                    <span>정산관리</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="right-utill">
                <div className="language">
                    <a href="javascript:set_language('ko');" id="lang_ko" className="active">
                        <span>KO</span>
                    </a>
                    <a href="javascript:set_language('en');" id="lang_en">
                        <span>EN</span>
                    </a>
                </div>

                <form action="/i18n/setlang/" method="post" id="language_form">
                    <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        value="FJXJMNThxj08nBdKwRUcdQC8dyrmZAerQQFKrs8U4WxkY8iOCga0G85XAcC6ivsw">
                        <input type="hidden" id="language" name="language" value="ko"></form>

                        <button type="button" className="mMenu">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* <script>window.addEventListener(
            'scroll',
            () => {
                document
                    .querySelectorAll('.hidden')
                    .forEach((el, i) => {
                        const windowHeight = window.innerHeight;
                        if (topPosition < windowHeight) {
                            el
                                .classNameNameList
                                .add('visible');
                        }
                    });
            }
        );
        </script> */
            }
        </>
        )
}