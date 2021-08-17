import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillsSection(){
    return(
        <section className="py-28 bg-primarygray" id="skills">
            <div className="container mx-auto px-10 2xl:px-0 md:pb-0">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>Beberapa kemampuan saya</SectionParagraph>
                <div className="flex mx-4 mt-20 flex-wrap">
                    <div className="md-w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard
                        name="JavaScript"
                        level="Lanjutan"
                        image="/javascript.svg"
                        imageClassname="h-16 rounded-full"
                        />
                    </div>
                    <div className="md-w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard
                        name="React JS"
                        level="Menengah"
                        image="/react.svg"
                        imageClassname="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard
                        name="Node Js"
                        level="Lanjutan"
                        image="/nodejs.svg"
                        imageClassname="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 md:pb-0">
                        <SkillCard
                        name="Node Js"
                        level="Lanjutan"
                        image="/nodejs.svg"
                        imageClassname="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard
                        name="JavaScript"
                        level="Lanjutan"
                        image="/javascript.svg"
                        imageClassname="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard
                        name="React JS"
                        level="Menengah"
                        image="/react.svg"
                        imageClassname="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard
                        name="React JS"
                        level="Menengah"
                        image="/react.svg"
                        imageClassname="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard
                        name="Node Js"
                        level="Lanjutan"
                        image="/nodejs.svg"
                        imageClassname="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 pb-8 md:pb-0">
                        <SkillCard
                        name="JavaScript"
                        level="Lanjutan"
                        image="/javascript.svg"
                        imageClassname="h-16 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}