import Header from "@/components/public/header/Header"
import Side from "@/components/public/side/Side"
import Content from "@/components/public/contents/Content"
import Footer from "@/components/public/footer/Footer"


const RootLayout = () => {
    return (
        <div className="flex flex-col">
             <div className="h-16"> {/* 네비게이션 바 */}
        <Header />
        </div>
        <div className="flex-grow">
            <div className="flex-grow flex justify-center items-center">
                <Side />
                <div className="w-full"> {/* 콘텐츠의 최대 너비를 제한 */}
                    <Content />
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default RootLayout;