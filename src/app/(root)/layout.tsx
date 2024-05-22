import MainContainer from "@/components/Layout/MainContainer"
import Navbar from "@/components/Layout/Navbar"


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main id="main-layout" className="root" >
        <Navbar />
        <MainContainer> 
          {children}
        </MainContainer>

      </main>
  )
}

export default Layout