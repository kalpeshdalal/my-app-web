import DigitalFlakeLogo from '../../assets/digitalFlakeLogo.svg'

export const Home = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col justify-center items-center">
      <img src={DigitalFlakeLogo}></img>
      <div className='text-2xl'>Welcome to Digitalflake Admin</div>
    </div>
  )
}