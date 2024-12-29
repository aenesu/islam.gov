export default function PillarCard({ icon, name, description }) {
    return (
        <div className="flex cursor-pointer flex-col items-center p-6 w-48 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-800 rounded-full shadow-inner shadow-lg">
                <img src={icon} alt={name} className="w-12 h-12" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-zinc-900">{name}</h3>
            <p className="mt-2 text-sm text-zinc-600 text-center">{description}</p>
        </div>
    );
}
