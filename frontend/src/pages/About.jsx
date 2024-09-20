import React from 'react'
import Title from '../componenets/Title/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetter from '../componenets/NewsLetter/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full lg:max-w-[450px] h-96' src={assets.about_img} alt="about_img" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, in dolores! Nesciunt, ratione eum nam fugiat illum deserunt nostrum mollitia laboriosam consequatur reiciendis vel at rerum? Expedita itaque similique asperiores.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus corrupti, libero fuga explicabo in commodi sint odio dolorum, ex consequatur distinctio necessitatibus soluta dolore, eveniet eligendi unde dolor aliquid sunt!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta, placeat totam eligendi, sapiente officia nisi, vitae eius quam natus suscipit tenetur illo quis saepe voluptas praesentium illum? Itaque, sapiente!</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, at ratione blanditiis quae pariatur magnam quos sapiente magni beatae aliquid quaerat nostrum harum atque, rerum quibusdam. Laboriosam accusamus labore excepturi!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, at ratione blanditiis quae pariatur magnam quos sapiente magni beatae aliquid quaerat nostrum harum atque, rerum quibusdam. Laboriosam accusamus labore excepturi!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, at ratione blanditiis quae pariatur magnam quos sapiente magni beatae aliquid quaerat nostrum harum atque, rerum quibusdam. Laboriosam accusamus labore excepturi!</p>
        </div>
      </div>

      <NewsLetter/>
    </div>
  )
}

export default About