const Footer = () => {
    return (
        <>             
            <footer className=" bg-gray-400 rounded-lg shadow dark:bg-gray-900 bottom-0 w-full w-screen">
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
                    <span className="block text-sm text-white  dark:text-gray-800 text-center font-['SundayLemon']">© 2023 <a href="" className=" font-['SundayLemon'] hover:underline">Koi</a>
                    서울 마포구 잔다리로 30-11 서교동 368-7 <br />우편번호:04042 <br /> E-mail: dbcjdals@naver.com</span>
                        <span className="block text-sm text-white sm:text-center dark:text-gray-800 my-2 font-['SundayLemon']">© 2023 <a href="" className="hover:underline font-['SundayLemon']">Koi</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}

export default Footer;