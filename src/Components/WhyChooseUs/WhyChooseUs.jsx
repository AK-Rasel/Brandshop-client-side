import { TbTargetArrow } from 'react-icons/tb';

const WhyChooseUs = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="">
                <h1 className="text-4xl">Provide High Service For Everyone</h1>
                <p>Choose us for superior service without exceptions. With a commitment to inclusivity, we deliver personalized and exceptional experiences for everyone.</p>
                <img src="https://templates.hibotheme.com/motoz/default/assets/img/about/wh-img.webp" alt="" />
            </div>
            <div  className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                <div className="  bg-base-100 shadow-xl">
                    <div className="p-10 ">
                        <TbTargetArrow size={70} className='bg-[#eff3fd] p-1 rounded-full text-[#F0C540] hover:bg-[#23393D] hover:text-white'/>
                        <h2 className="card-title">Inclusive Approach</h2>
                        <p>We embrace diversity and serve individuals from all backgrounds, ensuring everyone receives the same high-quality service.</p>
                        
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default WhyChooseUs;