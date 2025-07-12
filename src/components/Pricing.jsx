import { smallSphere, stars } from "../assets"
import Section from "./Section"

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-10">
        
        <div className="relative hidden lg:flex items-center justify-center mb-[6.5rem] animate-[float_3s_ease-in-out_infinite]">
          
          
          <img
            src={stars}
            alt="stars"
            className="absolute top-1/2 left-1/2 w-[950px] max-w-none -translate-x-1/2 -translate-y-1/2 z-0"
            width={950}
            height={400}
          />

          <img
            src={smallSphere}
            alt="sphere"
            className="relative z-10 w-[255px] h-[255px]"
            width={255}
            height={255}
          />
        </div>

      </div>
    </Section>
  )
}

export default Pricing
