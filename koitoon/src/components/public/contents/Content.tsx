import Slick1 from '@/components/contents/Slick'
import Slick2 from '@/components/contents/Sick2'
import Slick3 from '@/components/contents/Slick3'

export default function Content() {
    return (
        <>
        <div className="grid grid-rows-12 grid-flow-col max-2xl">
            <div className="col-start-2 col-span-8">
                <Slick1 />   
            </div>
        </div>        
        </>
    )
}