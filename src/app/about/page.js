import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function AboutPage() {
    return (   
        <>
            <Navbar />
            <div className="p-6 md:p-12 bg-gray-900 min-h-screen flex flex-col items-center">
                
                <h1 className="text-white text-4xl">About Us</h1>
                <div>
                <h3 className="text-white text-2xl mt-4">About IEEE PES Student Branch Chapter</h3>
                <p className="text-white text-lg mt-4">An active Student Branch Chapter can be one of the most positive elements at a college or university.  You have the opportunity to meet and learn from fellow IEEE student members and engage with professional IEEE members locally.</p>
                </div>
                <div>
                <h3 className="text-white text-2xl mt-4">About IEEE </h3>
                <p className="text-white text-lg mt-4">IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE’s highly cited publications, conferences, technology standards, and professional and educational activities.</p>
                <p> IEEE, pronounced “Eye-triple-E,” stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name. To learn more about the association’s name, for more information please read the <a href="https://www.ieee.org/about/ieee-history.html">History of IEEE.</a></p>
                </div>
                <div>
                <h3 className="text-white text-2xl mt-4">Vision </h3>
                <p className="text-white text-lg mt-4">“IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.”</p>
                </div>
                <div>
                <h3 className="text-white text-2xl mt-4">Mission </h3>
                <p className="text-white text-lg mt-4">“IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.”</p>
                </div>
            </div>
            <Footer />
        </>
     );
}