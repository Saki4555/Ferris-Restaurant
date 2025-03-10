

import { CHOOSE_US_DATA } from "../../../constants";
import ChooseUsCard from "./ChooseUsCard";

import bgImg from '../../../assets/home/choose-bg.png';

const ChouseUs = () => {
    


    
    return (
        <div className="bg-gray-950/5 text-white bg-fixed object-cover object-center p-4 text-center py-16" style={{
            backgroundImage: `url(${bgImg})`
        }}>
           <div className="container mx-auto px-10">
           <div className="bg-gray-800/40 mb-5 p-7 space-y-2 text-center">
            <span className="text-ferris-prim border-b border-b-ferris-prim font-semibold font-jost text-center">Why Chose Us</span> 
            <h1 className="text-5xl text-ferris-sec font-bold font-cormorant text-center mb-10">Our Strangth</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1">
                {
                   CHOOSE_US_DATA.map(item => <>
                       <ChooseUsCard key={item.id} item={item}/>
                    </>) 
                }
            </div>
           </div>
        </div>
    );
};

export default ChouseUs;