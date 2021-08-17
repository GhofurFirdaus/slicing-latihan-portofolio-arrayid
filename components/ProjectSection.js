import ProjectItems from "./ProjectItems";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ProjectSection(){
    return(
        <section className="py-20" id="project">
            <div class="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Beberapa proyek bikinan saya</SectionParagraph>
                <div className="flex -mx-4 flex-wrap mt-20">
                    <div className="md:w-6/12 w-full px-4 pb-8 ">
                        <ProjectItems
                        image="hasten1.png"
                        name="Hasten"
                        description="Eksplorasi landinge page" 
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItems
                        image="hasten.png"
                        name="Resorsces"
                        description="Eksplorasi Resorsces page" 
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 mt-20 pb-8 md:pb-0">
                        <ProjectItems
                        image="hasten.png"
                        name="Resorsces"
                        description="Eksplorasi Resorsces page" 
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 mt-20">
                        <ProjectItems
                        image="hasten1.png"
                        name="Hasten"
                        description="Eksplorasi landinge page" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}