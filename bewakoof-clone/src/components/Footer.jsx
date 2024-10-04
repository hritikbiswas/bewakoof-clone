import React from 'react'

function Footer() {
  return (
    <div className='bg-[#1C1C1C] p-10 mt-8'>
        
    <div className='bg-[#1C1C1C] flex items-center justify-between p-12'>
    <div>
        <h2 className='text-[#FFD232]'>CUSTOMER SERVICE</h2>
        <ul className='text-white flex flex-col gap-2 mt-3'>
        <li>Contact Us</li>
        <li>Return Order</li>
        <li>Track Order</li>
        <li>Cancel Order</li>
        </ul>
        <div className='mt-3 text-white'>
            <div className='flex justify-center items-center gap-1'>
            <i class="fa-solid fa-van-shuttle text-white"></i>
            <p>15 Days Return Policy*</p>
            </div>
            <div className='flex justify-center items-center gap-1'>
            <i class="fa-solid fa-camera text-white"></i>
            <p>Cash On Delivery*</p>
            </div>
        </div>
    </div>

    <div>
        <h2 className='text-[#FFD232]'>COMPANY</h2>
        <ul className='text-white flex flex-col gap-2 mt-3'>
        <li>About Us</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        </ul>
        <div className='mt-3'>
            <h2 className='text-[#FFD232]'>DOWNLOAD THE APP</h2>
            <div className='flex justify-items-center gap-3 mt-3'>
                <img src="https://shop.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_android_v1.png&w=256&q=75" className='w-20' alt="" />
                <img src="https://shop.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_ios_v1.png&w=256&q=75" className='w-20'  alt="" />
            </div>
        </div>
    </div>

    <div>
        <h2 className='text-[#FFD232]'>CONNECT WITH US</h2>
        <div className='flex items-center gap-2 mt-3'>
        <i class="fa-brands fa-facebook text-white"></i>
        <p className='text-white'>4.7M People like this</p>
        </div>
        <div className='flex items-center gap-2  mt-2'>
        <i class="fa-brands fa-square-instagram text-white"></i>
        <p className='text-white'>1M People like this</p>
        </div>
        <div className='mt-2'>
        <i class="mx-2 mt-2 fa-brands fa-twitter text-white"></i>
        <i class="mx-2 mt-2 fa-brands fa-pinterest text-white"></i>
        <i class="mx-2 mt-2 fa-brands fa-square-snapchat text-white"></i>
        <i class="mx-2 mt-2 fa-brands fa-apple text-white"></i>
        </div>

        <div className='mt-3'>
            <h2 className='text-[#FFD232]'>100% SECURE PAYMENT</h2>
            <div className='flex justify-items-center gap-1 mt-3'>
                <img src="https://i.pinimg.com/736x/8d/ec/e1/8dece15cc40aaf66ed47f6591b639d06.jpg" className='w-6 h-4' alt="" />
                <img src="https://i.pinimg.com/564x/f4/46/99/f44699e42fa39104aee1063aa2eb09f5.jpg" className='w-6 h-4' alt="" />
                <img src="https://i.pinimg.com/564x/10/16/93/10169346a15f48f251e88b9b8e8c5d9a.jpg" className='w-6 h-4' alt="" />
                <img src="https://i.pinimg.com/564x/de/72/b5/de72b5cd21b9c827639853f666b51b50.jpg" className='w-6 h-4' alt="" />
                <img src="https://i.pinimg.com/564x/22/31/c9/2231c9e5100ff03dcd34dea9aea443a9.jpg" className='w-6 h-4' alt="" />
                
            </div>
        </div>
        
    </div>

    <div>
        <h2 className='text-[#FFD232]'>KEEP UP TO DATE</h2>
        <div className='mt-3'>
            <input type="text" className='h-8 rounded-l-md'/>
            <button className='text-black font-semibold h-8 p-1 bg-[#FFD232] rounded-r-md'>SUBSCRIBE</button>
        </div>
    </div>

    
</div>
    <hr className='w-full h-[1.5px]'/>
</div>
  )
}

export default Footer