import "./styles/App.css";
import Router from "./Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
