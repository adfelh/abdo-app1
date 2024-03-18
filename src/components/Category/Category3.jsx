import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";
const Category3 = () => {
  return (
    <div className="py-8">
  <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* first col */}
    <div data-aos="zoom-in" className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start">
        <div>
          <div data-aos="zoom-in" className="mb-4">
            <p className="md-[2px] text-white">Enjoy</p>
            <p className="text-2xl font-semibold">With</p>
            <p className="text-4xl xl:text-5xl font-bold opacity-20 md-2">Earphone</p>
            <Button text="Browse" bgColor="bg-white" textColor="text-brandGreen" />
          </div>
        </div>
            <img src={Image2} alt="" className="w-[320px] absolute bottom-0" />
      </div>

      
            {/* third col */}
            <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-600/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
        <div>
          <div data-aos="zoom-in" className="mb-4">
          <p data-aos="zoom-in" className="md-[2px] text-white">Enjoy</p>
            <p data-aos="zoom-in" className="text-2xl font-semibold">With</p>
            <p data-aos="zoom-in" className="text-4xl xl:text-5xl font-bold opacity-40 md-2">Laptop</p>
            <Button data-aos="zoom-in" text="Browse" bgColor="bg-primary" textColor="text-white" />
          </div>
        </div>
        <img src={Image1} alt="" className="w-[300px] absolute top-1/2 -translate-y-1/2 -right-0" />
      </div>
      {/* second col */}
            <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
        <div>
          <div data-aos="zoom-in" className="mb-4">
          <p data-aos="zoom-in" className="md-[2px] text-white">Enjoy</p>
            <p data-aos="zoom-in" className="text-2xl font-semibold">With</p>
            <p data-aos="zoom-in" className="text-4xl xl:text-5xl font-bold opacity-40 md-2">Gadget</p>
            <Button data-aos="zoom-in" text="Browse" bgColor="bg-white" textColor="text-brandBlue" />
          </div>
        </div>
            <img src={Image3} alt="" className="w-[200px] absolute bottom-0 right-0" />
      </div>

    </div>
  </div>
    </div>
  )
}

export default Category3