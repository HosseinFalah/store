import Banner from "../Components/Banner/Banner"
import ServiceBox from "../Components/ServiceBox/ServiceBox"

const Home = () => {
    return (
        <main className="container-fluid">
            <Banner/>
            <div className="service-box mt-4">
                <ServiceBox/>
            </div>
        </main>
    )
}

export default Home