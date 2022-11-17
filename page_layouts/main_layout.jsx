import HeaderNav from "./main_layout/HeaderNav"
import FooterNan from "./main_layout/FooterNav"


export default function MainLayout ({ children}) {

    return( 
        <>
        <HeaderNav />

            <main>{children}</main>
        
        <FooterNan />
        </>
    )
}