import logo from '../medias/venusaur-mega.gif';

const Loading = () => {
    return (
        <div className='mt-6'>
            <br />
            <img src={logo} className="" alt="" />
            <p className="text-2xl">Loading...</p>
        </div>
    );
}

export default Loading;