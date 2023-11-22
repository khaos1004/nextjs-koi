const Footer = () => {
    return (
        <>             
            <footer className="bg-gray-400 rounded-lg shadow dark:bg-gray-900 bottom-0 w-full w-screen">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">ToonKoi</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">문의</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">오시는길</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />                                        
                    <span className="block text-sm text-white  dark:text-gray-800 text-center font-['SundayLemon']">© 2023 <a href="" className=" font-['SundayLemon'] hover:underline">Koi</a>. 본사 : 경남 김해시 관동로 14, 경남콘텐츠기업육성센터 3층 대표번호 : 055-337-3487 (서울지사 02-322-2900) 사업자등록번호 : 105-88-10325
                        서울지사 : 서울특별시 마포구 월드컵북로 19 대상빌딩 4층 부산지사 : 부산광역시 해운대구 재송동 1210 벽산e센텀클래스원 1408호 E-mail : help@pnstory.kr</span>
                        <span className="block text-sm text-white sm:text-center dark:text-gray-800 my-2 font-['SundayLemon']">© 2023 <a href="" className="hover:underline font-['SundayLemon']">Koi</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}

export default Footer;