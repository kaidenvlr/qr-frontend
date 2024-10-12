import Header from "./components/layout/header/Header";
import Layout from "./components/layout/Layout";
import Gallery from "./components/ui/gallery/Gallery";

function App() {
    return (
        <div className="container">
            <Header/>
            <Layout />
            <Gallery />
        </div>
    )
}

export default App;