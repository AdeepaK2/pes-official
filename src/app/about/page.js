import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            
            {/* About Section - Split into Two Parts */}
            <div className="flex w-full min-h-[300px]">
                {/* Left Darker Green Section */}
                <div className="w-1/6 bg-green-400"></div>

                {/* Right Lighter Green Section */}
                <div className="w-5/6 bg-green-100 flex flex-col items-center text-center px-6 md:px-12 py-16">
                    <h1 className="text-black text-5xl font-bold pt-12">About Us</h1>

                    <div className="mt-8 max-w-4xl">
                        <h3 className="text-black text-3xl font-semibold">About IEEE PES Student Branch Chapter</h3>
                        <p className="text-black text-lg mt-4 leading-relaxed">
                            An active Student Branch Chapter can be one of the most positive elements at a college or university.
                            You have the opportunity to meet and learn from fellow IEEE student members and engage with
                            professional IEEE members locally.
                        </p>
                    </div>
                </div>
            </div>

            {/* IEEE Overview Section */}
            
            <div className="bg-green-200 p-10 mx-6 md:mx-20 my-12 rounded-lg text-center shadow-lg">
                <h3 className="text-black text-3xl font-semibold">About IEEE</h3>
                <p className="text-black text-lg mt-4 leading-relaxed">
                    IEEE is the world’s largest professional association dedicated to advancing technological innovation
                    and excellence for the benefit of humanity.
                </p>
                <p className="text-black text-lg mt-4 leading-relaxed">
                    Learn more about IEEE in the
                    <a href="https://www.ieee.org/about/ieee-history.html" className="text-blue-600 font-semibold hover:underline">
                        History of IEEE.
                    </a>
                </p>

                 {/* Vision & Mission Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-20 py-12">
                <div className="p-8 bg-green-300 w-full md:w-1/2 rounded-lg text-center shadow-md">
                    <h3 className="text-black text-3xl font-semibold">Our Vision</h3>
                    <p className="text-black text-lg mt-4 leading-relaxed">
                        “IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.”
                    </p>
                </div>
                <div className="p-8 bg-green-300 w-full md:w-1/2 rounded-lg text-center shadow-md">
                    <h3 className="text-black text-3xl font-semibold">Our Mission</h3>
                    <p className="text-black text-lg mt-4 leading-relaxed">
                        “IEEE will be essential to the global technical community and to technical professionals everywhere,
                        and be universally recognized for the contributions of technology and of technical professionals
                        in improving global conditions.”
                    </p>
                </div>
                </div>
            
</div>
            <Footer />
        </>
    );
}

