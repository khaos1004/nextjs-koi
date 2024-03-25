const Footer = () => {
    return (
        <>             
            <footer className="rounded-lg shadow dark:bg-slate-800 bottom-0 bg-zinc-700">
                <div className="w-full max-w-screen-xl mx-auto pl-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="" className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <div className="self-center text-white font-semibold whitespace-nowrap dark:text-white text-lg">웹툰 코이 컨텐츠</div> 
                            {/* <button className="btn glass">회사소개서</button> */}
                            <button className="btn btn-sm">회사소개서</button>
                        </a>
                        {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
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
                        </ul> */}
                    </div>
                    {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />      
                                                       */}                   
                </div>
                <div className="w-full max-w-screen-xl mx-auto pl-4 md:py-8">
                <div className="self-center mb-4 text-white text-2xl font-semibold whitespace-nowrap dark:text-white">서울 마포구 잔다리로 30-11, 3F</div> 
                    <div className="flex">
                        <div className="block dark:text-gray-800 text-gray-500">Tel.</div>
                        <div className="block text-sm text-white dark:text-gray-800 ml-2">02-2602-5250</div>                        
                    </div>
                    <div className="flex">
                        <div className="block dark:text-gray-800 text-gray-500">Email.</div>
                        <div className="block text-sm text-white dark:text-gray-800 ml-2">koicontent@koicontent.com</div>                        
                    </div>
                    <div className="flex">
                        <div className="block dark:text-gray-800 text-gray-500">대표자</div>
                        <div className="block text-sm text-white dark:text-gray-800 ml-2">이준형</div>                        
                    </div>
                    <div className="flex">
                        <div className="block dark:text-gray-800 text-gray-500">사업자 등록번호</div>
                        <div className="block text-sm text-white dark:text-gray-800 ml-2">853-09-00557</div>                        
                    </div>
                    <div className="block text-sm text-white sm:text-right dark:text-gray-800 my-2">Copyright © WEBTOON KOI CONTENT.All Rights Reserved</div>
                </div>
            </footer>


        </>
    )
}

export default Footer;