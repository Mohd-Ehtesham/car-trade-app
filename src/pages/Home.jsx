import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CarComponentPage from "../components/CarComponentPage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-25">
        <CarComponentPage />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
