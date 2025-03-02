import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function VoulnteerPage() {
    return(
        <>
            <Navbar/>
            <div className="p-6 md:p-12 bg-green-100 min-h-screen flex flex-col items-center">
                <h1 className="text-black text-4xl mt-10">IEEE PES Volunteer of the year</h1>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Apply Now</button>
                <div>
                    <p className="text-black text-lg mt-4">Have you been a dedicated and enthusiastic volunteer of the IEEE PES Student Branch Chapter of the University of Moratuwa in the year 2021?</p>
                    <p className="text-black text-lg mt-4">Here’s your turn to become the IEEE PES Volunteer of the year and to be an inspiration for the other volunteers.</p>
                    <p className="text-black text-lg mt-4">Hurry up and submit your IEEE PES volunteering experience for the year 2021!</p>
                </div>
            </div>
            <Footer />
        </>
    );
}