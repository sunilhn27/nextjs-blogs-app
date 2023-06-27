import Image from 'next/image'
import ContactImg from '../../../public/contact.png'

function Contact() {



  return (
    <div className="w-full">
      <h1 className="text-5xl md:text-7xl text-gray-500 text-center mt-6 ">Let's Keep in Touch</h1>
      <div className="flex flex-col md:flex-row mt-24 mx-11">
        <div className="w-full md:w-1/2 justify-center flex">
          <Image src={ContactImg} width={400} height={400} className="text-center animate-bounce-slow" />
        </div>
        <form className="w-full md:w-1/2 lg:w-[40%] flex flex-col space-y-6 sm:mt-16 md:mt-0 mt-16">
          <input type="text" placeholder="Name" className="border-2 w-full bg-transparent px-3 py-3 rounded-md" />
          <input type="email" placeholder="Email" className="border-2 w-full bg-transparent px-3 py-3 rounded-md" />
          <input type="text" placeholder="Message" className="border-2 w-full bg-transparent px-3 py-16 rounded-md" />
          <button className="bg-green-400 px-5 py-2 rounded-lg hover:bg-green-600 w-[20%]">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
