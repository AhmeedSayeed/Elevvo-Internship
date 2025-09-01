import profileImg from '../assets/profile.png'

export default function Testimonial({ name, review}) {
    return <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg text-center flex flex-col items-center gap-6 w-[350px] h-[230px] hover:-translate-y-4 transition-all duration-400 ease-in-out">
            <div className='flex flex-col items-center gap-2 border-solid border-b-2 border-gray-400'>
                <div className='w-[70px] h-[70px] p-[1px] rounded-full overflow-hidden bg-white/10 backdrop-blur-lg shadow-lg'>
                    <img src={profileImg} alt="profile image" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xl text-primary font-semibold">
                    {name}
                </h3>
            </div>
            <p className='text-lg text-muted'>{review}</p>
    </div>
}