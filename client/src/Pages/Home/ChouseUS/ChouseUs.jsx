

import { CHOOSE_US_DATA } from "../../../constants";
import ChooseUsCard from "./ChooseUsCard";

const ChouseUs = () => {
    


    
    return (
        <div className="bg-gray-950/5 text-white p-4 text-center py-16">
            <span className="text-ferris-prim border-b border-b-ferris-prim font-semibold font-jost text-center">Why Chose Us</span> 
            <h1 className="text-5xl font-bold font-cormorant text-center mb-10">Our Strangth</h1>
            <div className="lg:mx-28 px-10 grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1">
                {
                   CHOOSE_US_DATA.map(item => <>
                       <ChooseUsCard key={item.id} item={item}/>
                    </>) 
                }
            </div>
        </div>
    );
};

export default ChouseUs;