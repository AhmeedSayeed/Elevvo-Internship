import Button from "./Button.jsx";


export default function Header() {
    return <header id="header" className="flex flex-col items-center justify-center mb-16">
        <img src="../../public/logo.png" alt="logo" className="w-25 h-25 mx-auto my-4 rounded-full" />
        <h1 className="text-3xl font-bold text-purple-400 my-4 text-center">Task Flow</h1>
        <p className="text-purple-300 text-center my-2">A simple task management app</p>
        <Button>
            <a href="#plans">Subscribe</a>
        </Button>
    </header>;
}