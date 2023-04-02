import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon : <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    },
    {
        icon : <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
    {
        icon : <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description : "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,will uncover many web sites still making this the first true generator on the Internet.",
    },
];

const container = {
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 md:pt-20 mt-0 md:mt-20"
    >
        <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Heading Section */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{duration:0.5}}
                variants={{
                    hidden:{ opacity:0, x:-50 },
                    visible:{ opacity:1 , x:0 },
                }}
            >
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </motion.div>
            {/* Benefits */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                variants={container}
            >
                {benefits.map( (benefit : BenefitType) => (
                    <Benefit
                        key={benefit.title}                        
                        title={benefit.title}
                        icon={benefit.icon}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* Graphic and description */}
            <div className="mt-8 items-center justify-between gap-20 md:flex">
                {/* Graphic */}
                <img
                    className="mx-auto py-20"
                    alt="Benefit-page-graphic"
                    src={BenefitsPageGraphic}
                />
                {/* Description */}
                <div className="">
                    {/* Titile */}
                    <div className="relative">
                        <div className="before:absolute before:-top-16 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{duration:0.5}}
                                variants={{
                                    hidden:{ opacity:0, x:50 },
                                    visible:{ opacity:1 , x:0 },
                                }}
                            >
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* Description */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{ opacity:0, x:50 },
                            visible:{ opacity:1 , x:0 },
                        }}
                    >
                        <p className="my-5">
                            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                            egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                            fames vitae vitae quis. Quis amet vulputate tincidunt at in
                            nulla nec. Consequat sed facilisis dui sit egestas ultrices
                            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                            Felis orci diam odio.
                        </p>
                        <p className="mb-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </motion.div>
                    {/* Button */}
                    <motion.div 
                        className="relative mt-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{delay:0.2,duration:0.5}}
                        variants={{
                            hidden:{ opacity:0, x:50 },
                            visible:{ opacity:1 , x:0 },
                        }}
                    >
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits