export default function Button({ children, className }) {
    return <button className= {`${className} cursor-pointer bg-purple-400 hover:bg-purple-500 transition-all transition-discrete text-white font-bold py-2 px-4 rounded-full mx-auto my-4`}>
            {children}
        </button>;
}