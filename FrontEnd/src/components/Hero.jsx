import biriyani from '../assets/biriyani.jpeg'; 
import mushroom from '../assets/mushroom-biryani.jpeg';

const Hero = () => {
  return (
    
    <div>
       <div className='py-16 px-5'>
        <h2 className='text-4xl font-bold font-mono'>
            Today's Special 
        </h2>
        <div className="flex gap-4 justify-start px-5 py-6">
            <div >
                <img src={biriyani} alt="Biriyani" width={250} height={250}/>
            </div>
            <div >
                <img src={mushroom} alt="mushroom" width={250} height={250}/>
            </div>
            <div >
                <img src={biriyani} alt="Biriyani" width={250} height={250}/>
            </div>
        </div>
       </div>

       <div>
        <h2 className='text-4xl font-bold font-mono'>
            Check out our menu
        </h2>
        <div>


        </div>
       </div>
    </div>
  )
}

export default Hero