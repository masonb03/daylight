export default function Navbar() {
    return (
        <div className="flex justify-between gap-4 p-4">
            <div className="flex items-center gap-4">
                <div className="bg-sun w-10 h-10 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-night-950"></div>
                </div>
                <h1 className="text-2xl font-medium tracking-[0.2em] text-text-primary py-2">Daylight</h1>
            </div>
            <ul className="flex gap-12 items-center text-text-secondary py-6 px-4">
                <li>Today</li>
                <li>Compass</li>
                <li>Week</li>
                <li>Activities</li>
            </ul>
        </div>
    )
}