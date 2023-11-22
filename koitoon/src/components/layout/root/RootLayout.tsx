import Header from "@/components/public/header/Header"
import Side from "@/components/public/side/Side"
import Content from "@/components/public/contents/Content"
import Footer from "@/components/public/footer/Footer"


const RootLayout = () => {
    return (
        <>
            <Header />
            <Side />
            <div className="mx-auto px-4 md:px-8 lg:px-16">
                <Content />
            </div>
            <Footer />
        </>
    )
}

export default RootLayout;