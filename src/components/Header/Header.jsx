import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-5 mx-auto  mb-5 max-w-7xl border-b-2'>
            <h1 className='text-4xl bg-green-600 font-bold'>Knowledge Cafe</h1>
            <img src={profile}alt="" />
        </header>
    );
};

export default Header;