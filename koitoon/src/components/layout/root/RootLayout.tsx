import Header from "@/components/public/header/Header"
import Side from "@/components/public/side/Side"
import Content from "@/components/public/contents/Content"
import Footer from "@/components/public/footer/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import Slick from "@/components/contents/Slick";
import Slick2 from "@/components/contents/Sick2";
import We1 from '@/../../public/images/3.jpg'

const RootLayout = () => {
    return (
        <div className="flex flex-col">
            <div className="h-16"> {/* 네비게이션 바 */}
                <Header />
            </div>
            <Side />
            <div className="flex flex-row min-h-screen w-screen my-[4rem]">
                <div className="flex-1"></div> {/* 왼쪽 여백 (1/5) */}
                <div className="flex-3 w-3/5"> {/* 중앙 컨텐츠 영역 (3/5) */}
                    <Slick />    
                    <Slick2 />                
                </div>
                <div className="flex-1"></div> {/* 오른쪽 여백 (1/5) */}
            </div>
    
        <Footer />
    </div>
    )
}

export default RootLayout;
