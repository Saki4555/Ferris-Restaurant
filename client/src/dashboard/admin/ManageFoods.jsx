
import useFoodsData from '../../hooks/useFoodsData';

const ManageFoods = () => {
    const [foods, loading] = useFoodsData();
    console.log(foods);
    console.log({loading});
    return (
        <div>
            i see you
        </div>
    );
};

export default ManageFoods;