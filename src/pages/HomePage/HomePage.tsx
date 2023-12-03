
import MainSection from "./components/MainSection/MainSection"
import LeftSection from "./components/LeftSection/LeftSection"
import CentralSection from "./components/CentralSection/CentralSection"
import RightSection from "./components/RightSection/RightSection"

const HomePage = () => {
  return (
    <>
      <MainSection >
        <LeftSection/>
        <CentralSection/>
        <RightSection />
      </MainSection>
    </>
  )
}

export default HomePage
