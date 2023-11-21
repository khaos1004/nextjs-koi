import Header from "@/components/public/header/Header"
import Side from "@/components/public/side/Side"
import Content from "@/components/public/contents/Content"
import Footer from "@/components/public/footer/Footer"


const RootLayout = () => {
    return(
        <>
            <Header />
            {/* <div className="flex"> */}
            <Side />
            <Content />
            {/* </div> */}
            <Footer />
        </>
    )
}

export default RootLayout;