import { Button } from "@/components/ui/button";
import heroWave from "@/assets/hero-wave.svg";

const MakeADifference = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="w-full flex flex-col justify-start items-center gap-3 pt-16 pb-56 px-4 relative z-10">
        <h2 
          className="text-center text-primary text-5xl font-black leading-tight"
          style={{ fontFamily: 'Avenir, sans-serif' }}
        >
          Make a Difference Today
        </h2>
        
        <p 
          className="max-w-[642px] text-center text-[#3D3D3D] text-lg font-medium leading-relaxed"
          style={{ fontFamily: 'Avenir, sans-serif' }}
        >
          Your support helps us provide free, confidential advice on housing, welfare benefits, and access to essential services.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6">
            Become a Volunteer
          </Button>
          <Button variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white rounded-full px-6">
            Partner with Us
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6">
            Fundraise with us
          </Button>
        </div>
      </div>
      <img
        src={heroWave}
        alt=""
        className="absolute bottom-0 left-0 w-full h-auto"
        aria-hidden="true"
      />
    </section>
  );
};

export default MakeADifference;
