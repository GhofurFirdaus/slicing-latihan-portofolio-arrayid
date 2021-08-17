import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ContactItems from "./ContactItems";
import Field from "./Field";
import Button from "./Button";
export default function ContactSection(){
    return(
        <section className="container mx-auto px-10 2xl:px-0" id="contact"> 
            <div className="bg-primarygray flex rounded-lg flex-wrap">
                <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200 ">
                    <div className="lg:py-16 lg:px-16 md:px-14 px-10">
                        <SectionTitle left>Contact</SectionTitle>
                        <SectionParagraph left>Beberapa cara menghubungi saya.</SectionParagraph>
                        <ContactItems
                        label="Email"
                        icon="/mail.svg"
                        value="Rizkiy90@gmail.com"
                        className="mt-10"
                        />
                        <ContactItems
                        label="Phone"
                        icon="/phone.svg"
                        value="082252122365"
                        className="mt-6"
                        />
                        <ContactItems
                        label="Twitter"
                        icon="/twitter.svg"
                        value="@Rizky098"
                        className="mt-6"
                        />
                    </div>
                    </div>
                <div className="md:w-6/12 w-full">
                    <form className="lg:py-16 lg:px-16 md:px-14 px-10">
                        <div className="flex flex-wrap -mx-4">
                            <div className="lg:w-6/12 w-full px-4">
                            <Field
                                label="Name"
                                name="name"
                                type="text"
                            />
                            </div>
                            <div className="lg:w-6/12 w-full px-4">
                            <Field
                                label="Email"
                                name="email"
                                type="text"
                            />
                            </div>
                        </div>
                        <Field
                            label="Subject"
                            name="subject"
                            type="text"
                        />
                        <Field
                            label="Message"
                            name="message"
                            type="textarea"
                            className="h-40"
                        />
                        <div className="text-right">
                            <Button variant="black">Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}