import { useState } from 'react';


const WhyChooseUs = () => {
    const [whyChoose, setWhyChoose] = useState([])
    useState(() => {
        fetch('/WhyChooseUs.json')
        .then(res => res.json())
        .then(data => setWhyChoose(data))
    },[[]])
    
    return (
        <div className='container mx-auto text-center mt-10'>
            <div className='my-5 font-semibold text-5xl  '>
                <h1 className='font-extrabold text-5xl uppercase font-Montserrat text-[#F0C543]' >Why ChooseUs</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <div className="space-y-3">
                <h1 className="text-4xl font-bold text-start font-Montserrat">Provide High Service For Everyone</h1>
                <p className='text-start '>Choose us for superior service without exceptions. With a commitment to inclusivity, we deliver personalized and exceptional experiences for everyone.</p>
                <img src="https://templates.hibotheme.com/motoz/default/assets/img/about/wh-img.webp" alt="" />
            </div>
            <div className='col-span-2'>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {
                        whyChoose.map(whyChooseUs =>(<div key={whyChooseUs.id} className="  bg-base-100 shadow-xl">
                        <div className="p-10 text-start">
                            
                            <h2 className="card-title">{whyChooseUs.benefit}</h2>
                            <p>We embrace diversity and serve individuals from all backgrounds, ensuring everyone receives the same high-quality service.</p>

                        </div>
                    </div>))
                    }


                </div>
            </div>
        </div>
        </div>
    );
};

export default WhyChooseUs;