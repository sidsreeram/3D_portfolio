import { motion } from 'framer-motion'

const Section = ({ children, className = "" }) => {
    return (
        <section className={`h-screen flex flex-col justify-center p-5 md:p-10 ${className}`}>
            {children}
        </section>
    )
}

export const Overlay = () => {
    return (
        <div className="w-full">
            <Section className="items-start">
                <h1 className="text-5xl md:text-9xl font-black font-dm-serif uppercase tracking-tighter leading-none text-white/90">
                    Siddharth<br />Sreeram
                </h1>
                <div className="mt-4 bg-white text-black p-3 text-xs md:text-xl font-bold font-press-start">
                    SOFTWARE ENGINEER & QUANT
                </div>
                <p className="mt-4 text-gray-400 max-w-lg">
                    MCA Student passionate about secure architecture, authentication, and user-friendly solutions. Expert in Go, Python, and Backend Systems.
                </p>
            </Section>

            <Section className="items-end text-right">
                <h2 className="text-6xl font-bold mb-8 font-dm-serif">SKILLS</h2>
                <div className="flex flex-col gap-4 text-xl md:text-2xl font-mono">
                    <span>Go / Python / C</span>
                    <span>REST APIs / Microservices / GraphQL</span>
                    <span>Docker / Kubernetes / AWS</span>
                    <span>PostgreSQL / MongoDB</span>
                    <span>System Design / Concurrency</span>
                </div>
            </Section>

            <Section className="items-start">
                <h2 className="text-6xl font-bold mb-12">PROJECTS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    <div className="border border-white/20 p-6 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h3 className="text-2xl font-bold mb-2">CTF Platform</h3>
                        <p className="text-sm text-gray-400">Golang, Gin, React. Real-time capture-the-flag platform for 300+ participants.</p>
                    </div>
                    <div className="border border-white/20 p-6 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h3 className="text-2xl font-bold mb-2">E-Commerce Backend</h3>
                        <p className="text-sm text-gray-400">Go, Microservices, gRPC. Scalable backend with JWT auth and Razorpay.</p>
                    </div>
                    <div className="border border-white/20 p-6 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h3 className="text-2xl font-bold mb-2">AI Poetry Generator</h3>
                        <p className="text-sm text-gray-400">Python, LSTM, Flask. Neural network model for creative text generation.</p>
                    </div>
                    <div className="border border-white/20 p-6 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h3 className="text-2xl font-bold mb-2">Disease Prediction</h3>
                        <p className="text-sm text-gray-400">Python, Scikit-learn. ML models for medical risk analysis.</p>
                    </div>
                </div>
            </Section>

            <Section className="items-center text-center">
                <h2 className="text-6xl font-bold mb-4">CONTACT</h2>
                <a href="mailto:siddharthsram@gmail.com" className="text-xl md:text-4xl hover:underline mb-2 break-all">siddharthsram@gmail.com</a>
                <p className="text-xl text-gray-400">+91 8590496810 • Kochi, India</p>
                <div className="flex gap-6 mt-8">
                    <a href="https://github.com/sidsreeram" target="_blank" className="border px-4 py-2 hover:bg-white hover:text-black transition">GITHUB</a>
                    <a href="https://linkedin.com/in/siddharthsreeram" target="_blank" className="border px-4 py-2 hover:bg-white hover:text-black transition">LINKEDIN</a>
                </div>
            </Section>
        </div>
    )
}

export default Overlay
