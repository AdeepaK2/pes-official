import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function VolunteerPage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-green-100">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2">
                    <img src="/volunteer/volunteer1.webp" alt="volunteer" className="w-full h-auto object-cover" />
                </div>

                {/* Right Side - Text & Button */}
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center">
                    <h1 className="text-black text-4xl mt-4 md:mt-0 text-center md:text-left">
                        IEEE PES Volunteer of the Year
                    </h1>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Apply Now
                    </button>
                    <div className="text-center md:text-left">
                        <p className="text-black text-lg mt-4">
                            Have you been a dedicated and enthusiastic volunteer of the IEEE PES Student Branch Chapter
                            of the University of Moratuwa in the year 2021?
                        </p>
                        <p className="text-black text-lg mt-4">
                            Here’s your turn to become the IEEE PES Volunteer of the Year and to be an inspiration for
                            other volunteers.
                        </p>
                        <p className="text-black text-lg mt-4">
                            Hurry up and submit your IEEE PES volunteering experience for the year 2021!
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
