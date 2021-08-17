import classnames from "classnames";
export default function SkillCard({name, level, image, imageClassname}){
    const addimageClassname = imageClassname ? ` ${imageClassname}`: "";
    return(
        <div className="bg-white shadow-primarygray rounded-lg p-6 flex items-center">
            <img src={image} className= {classnames("mr-6",addimageClassname)}/ > 
            <div>
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-400 mt-1">{level}</p>
            </div>
        </div> 
    );
}