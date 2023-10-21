import { useState } from 'react';


const WhyChooseUs = () => {
    const [whyChoose, setWhyChoose] = useState([])
    useState(() => {
        fetch('/WhyChooseUs.json')
            .then(res => res.json())
            .then(data => setWhyChoose(data))
    }, [[]])

    return (
        <div className=' container mx-auto text-center mt-10 px-5 lg:px-2'>
            <div className='my-5 font-semibold text-5xl  '>
                <h1 className='font-bold md:font-extrabold md:text-5xl text-4xl uppercase font-Montserrat text-[#F0C543]' >Why ChooseUs</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-10 ">
                <div className="space-y-3 flex flex-col col-span-2">
                    <div className='flex-1 space-y-4'>
                        <h1 className="text-2xl md:text-4xl font-bold lg:text-start font-Montserrat ">Provide High Service For Everyone</h1>
                        <p className='lg:text-start text-gray-500  text-base'>Choose us for superior service without exceptions. With a commitment to inclusivity, we deliver personalized and exceptional experiences for everyone.</p>
                    </div>
                    <img className='flex-1 p-2 md:p-8 lg:p-0  ' src="https://templates.hibotheme.com/motoz/default/assets/img/about/wh-img.webp" alt="" />
                </div>
                <div className='col-span-2'>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {
                            whyChoose.map(whyChooseUs => (<div key={whyChooseUs.id} className="border rounded-xl border-[#F0C543]  bg-base-100 shadow-xl">
                                <div className="p-8 text-start space-y-3">

                                    <h2 className="card-title text-[#F0C543] text-2xl">{whyChooseUs.benefit}</h2>
                                    <p className='text-gray-500'>We embrace diversity and serve individuals from all backgrounds, ensuring everyone receives the same high-quality service.</p>

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