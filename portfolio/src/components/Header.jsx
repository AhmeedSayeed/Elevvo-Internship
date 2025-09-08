import logoImg from '../../public/elevvopaths_logo.jpg';

export default  function Header() {
    return <header className='flex flex-col items-center justify-center my-6'>
        <img src={logoImg} alt="elevvo pathways logo" className='w-[150px] h-[150px] rounded-full mb-4' />
        <h1 className='text-4xl text-light-secondary text-center font-semibold mb-4'>Frontend Development Intern</h1>
        <p className='text-lg text-light-tertiary text-center'>During my time at Elevvo Pathways Intern, I independently worked on several frontend tasks,
        building and improving user interfaces using React, Tailwind CSS, HTML, CSS, and JavaScript.</p>
    </header>
}