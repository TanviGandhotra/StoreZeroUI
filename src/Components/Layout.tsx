import { Footer } from './Footer.tsx'
import { Header } from './Header.tsx'

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">{children}</main>
            <Footer />
        </div>
    )
}
