
import Image from "next/image"
import Link from "next/link"
import HeroImage from '../../images/hero-img.jpg'
import logoA from '../../images/svg/logo-a.svg'
import logoB from '../../images/svg/logo-b.svg'
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTypescript, BiLogoPhp, BiLogoTailwindCss } from 'react-icons/bi'
import { BsWordpress, BsFonts } from 'react-icons/bs'
import { FaHtml5, FaBootstrap, FaFigma, FaWindows, FaApple } from 'react-icons/fa'
import { SiNextdotjs, SiNodedotjs, SiCanva, SiAdobecreativecloud } from 'react-icons/si'
import type { Metadata } from 'next'
import { metadata } from "../layout"


export function generateMetadata(): Metadata {
    return {
        title: 'About Myself - ' + metadata.title
    }
}

export default function AboutMe(){

 
    return (
       
        <div className="container mx-auto mt-5 mb-10 pb-10 ab-me">
        <div className="mb-20">
            <h1 className="uppercase md:text-5xl mb-3">Welcome! Hello! </h1>
            <h1 className="uppercase md:text-8xl">I&rsquo;m Jared Yeung 👨🏻‍💻💤</h1>
            <span className="float-right">
                (TL;DR <Link href="#resume-part" className="ugly-blue">#Resume</Link>)
            </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-stretch gap-20 md:gap-0 my-10">
                <div className="self-center">
                    <div className="bg-[var(--jy-cloudy)] text-[var(--jy-black)] jy-border-radius p-8 mb-10">
                    <p className="text-base md:text-lg leading-7 md:leading-9 mb-6">A self-taught web designer and developer driven by a deep passion for design and development.
                    I am currently employed as a web designer at Mirum in Hong Kong. 
                    </p>
                    <p className="text-base md:text-lg leading-7 md:leading-9 m-0"> 
                        🌃 Living City: Hong Kong 🇭🇰
                    </p>
                    <p className="text-base md:text-lg leading-7 md:leading-9 m-0">  
                        📀 Elements in my life: Aesthetic, Minimalism, Creativity
                    </p>
                    </div>
                    <div className="bg-[var(--jy-cloudy)] text-[var(--jy-black)] jy-border-radius px-8 py-5 m-0">
                        <span><span className="icon-tag"></span> #Full-Time #Freelance(Commercial/NGO) #Volunteering</span>
                    </div>
                    
                </div>
                <div className="self-center">
                    <div className="hero-image-wrapper ">
                    <div className="hero-image-container"><Image src={HeroImage} width={150} height={150} alt="Weirdo Image" className="hero-image" loading="lazy" /></div>
                    <div className="logo-svg-a"><Image src={logoA} width={25} height={25} alt="Logo SVG A" /></div>
                    <div className="logo-svg-b"><Image src={logoB} width={25} height={25} alt="Logo SVG B"  /></div>
                    </div>
                </div>
        </div>
        <section className="mt-20">
            <h2 className="uppercase md:text-5xl">Story</h2>
            <h3 className="border-b">(TL;DR - Graduate &#8594; Self-Learner &#8594; Web Designer & 2nd degree &#8594; ? )</h3>
            <div className="my-5 leading-9">
                <p>
                    In 2020, I graduated in 🎓 Social Sciences.
                    Then, COVID-19 hit, making jobs hard to find for humanities majors. 
                    So, I turned to the digital world for more chances and progress. Eager to enter the digital world, I started by learning more about IT. 
                    My first practical experience came from handling website admin and design in e-commerce. 
                    This got me hooked on technology, and I wanted to grasp it inside out. I craved to be tech-savvy!
                    <br></br>
                    Eventually, I became a web designer 👨🏻‍💻 in Mirum. 
                    Though I enjoyed the work, I hungered for more challenge 🧗. 
                </p>
                <p>
                    In June 2023, I started creating <Link href="https://jyz.vercel.app/" target="_blank" className="ugly-blue">my portfolio and blog website</Link>. 
                    I was thrilled to display my improving skills and projects. 
                    I used the newest tech(for me) like the concept of Headless CMS, Node.js, React.js, and Next.js to craft a platform that shows my love for being inventive. 
                    Every bit of code I wrote was like taking a step towards not just making a website but also creating my path in the digital world. There are several platforms: <Link href="https://chat.openai.com/" target="_blank" className="ugly-blue">ChatGPT</Link>, <Link href="https://www.freecodecamp.org/" target="_blank" className="ugly-blue">Freecodecamp</Link> , <Link href="https://www.coursera.org/" target="_blank" className="ugly-blue">Coursera</Link> , and <Link href="https://www.codecademy.com/" target="_blank" className="ugly-blue">Codecademy</Link> have been helping me a lot for learning digital world.
                </p>
                <p>
                    Lastly, I enrolled in my second bachelor degree Computer Science. Im working towards mastering technology. Getting a Master&rsquo;s degree in Computer Science is a big goal I&rsquo;m aiming for 🎈.
                </p>
            </div>
        </section>

 

        <section className="my-10">
            <h2 className="uppercase md:text-5xl">Skills</h2>
            <h3 className="border-b">(TL;DR - Self-Learner - Generalist &#8594; interest on sth. sth...  )</h3>
            <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-5">
                <div>
                <h5>Coding</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaHtml5 size={25}/></div> 
                                <div className="card-grid-title">HTML5</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoCss3 size={25}/></div> 
                                <div className="card-grid-title">CSS3</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoJavascript size={25}/></div> 
                                <div className="card-grid-title">Javascript</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoTypescript size={25}/></div> 
                                <div className="card-grid-title">Typescript</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><SiNodedotjs size={25}/></div> 
                                <div className="card-grid-title">Nodejs</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoReact size={25}/></div> 
                                <div className="card-grid-title">React.js</div>
                            </div>
                        </div>  
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><SiNextdotjs size={25}/></div> 
                                <div className="card-grid-title">Next.js</div>
                            </div>
                        </div>                                              
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoPhp size={25}/></div> 
                                <div className="card-grid-title">PHP</div>
                            </div>
                        </div>  
                    </div>
                </div>

                <div>
                    <h5>Concept</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BsWordpress size={25}/></div> 
                                <div className="card-grid-title">Wordpress</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">CMS/HeadlessCMS</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">RWD</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">Frontend Development</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">UX User Experience</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">UI User Interface</div>
                            </div>
                        </div>                                                                        
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">Motion</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BsFonts size={25}/></div> 
                                <div className="card-grid-title">Typeface</div>
                            </div>
                        </div>                         

                    </div>
                </div>

                <div>
                    <h5>CSS Framework</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaBootstrap size={25}/></div> 
                                <div className="card-grid-title">Bootstrap</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoTailwindCss size={25}/></div> 
                                <div className="card-grid-title">Tailwind CSS</div>
                            </div>
                        </div>
                        </div>
                </div>


                <div>
                    <h5>Design</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample"> 
                                <div className="card-sample-grid gap-2">
                                    <div className="card-grid-icon"><SiAdobecreativecloud size={25}/></div> 
                                    <div className="card-grid-title">Adobe Creative Cloud</div>
                                </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><SiCanva size={25}/></div> 
                                <div className="card-grid-title">Canva</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaFigma size={25}/></div> 
                                <div className="card-grid-title">Figma</div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div>
                    <h5>OS (Operating System)</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                    <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaWindows size={25}/></div> 
                                <div className="card-grid-title">Window</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaApple size={25}/></div> 
                                <div className="card-grid-title">MacOS</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
   
            </div>
        </section>
 
 



        </div>
      
    )

}
