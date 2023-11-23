import Header from "@/components/public/header/Header"
import Side from "@/components/public/side/Side"
import Content from "@/components/public/contents/Content"
import Footer from "@/components/public/footer/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";


const RootLayout = () => {
    return (
        <div className="flex flex-col">
            <div className="h-16"> {/* 네비게이션 바 */}
                <Header />
            </div>
            <Side />
            
                <div className="grid grid-rows-12 grid-flow-col max-2xl">
                    <Content  />        
            
            </div>
        <Footer />
    </div>
    )
}

export default RootLayout;
