import Header from "@/components/public/header/Header"
import Side from "@/components/public/side/Side"
import Content from "@/components/public/contents/Content"
import Footer from "@/components/public/footer/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import Slick from "@/components/contents/slick";
import We1 from '@/../../public/images/3.jpg'

const RootLayout = () => {
    return (
        <div className="flex flex-col">
            <div className="h-16"> {/* 네비게이션 바 */}
                <Header />
            </div>
            <Side />
            <div className="grid grid-rows-3 grid-flow-col gap-4 mx-60 my-[3rem]">
                <div className="row-span-3 bg-slate-500 max-w-3xl h-9">
                
                                     
                </div>                
                <div className="row-span-3 bg-slate-500 col-span-2 ...">03</div>
            </div>
        <Footer />
    </div>
    )
}

export default RootLayout;
