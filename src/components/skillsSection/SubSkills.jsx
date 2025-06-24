import img from '../../assets/pc-banner.jpg'

const SubSkills = () => {
  return (
    <div className='border-y-2 border-lightGrey relative'>
      <div className='absolute bg-gradient-to-r from-primary to-color2 opacity-50 w-full h-full'></div>
      <img src={img} alt="PC Banner"/>
    </div>
  )
}

export default SubSkills