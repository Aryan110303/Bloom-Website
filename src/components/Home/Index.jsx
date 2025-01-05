import video from '../../assets/video/reel.mp4'
import Row from '../Row'
import {useEffect, useState, useRef} from 'react';
import {motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { gsap } from "gsap";
import styles from './Style.module.css';
import { Power2, Power4 } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
// import { AiOutlineMenu } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".slidesm", {scale: 5})

function Home() {

    const container = useRef(null);

    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".toptext")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".toptext span", {opacity: .1})
        gsap.to(".toptext span", {
            scrollTrigger: {
                trigger: ".home",
                start: "top 50%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,
            
        })
    },[]);

    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: .5,
            }
         });
         tl.to(".vdodiv", {
            clipPath: 'circle(0% at 50% 50%)',
            ease: Power4,
          }, "start")
          tl.to(".slidesm", {
            scale: 1,
            ease: Power2,
         }, 'start');
         tl.to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power4,
            duration: 1,
         }, 'start');
         tl.to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power4,
            duration: 1,
         }, 'start');           
    }, container )

    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);
  
    useMotionValueEvent(scrollY, "change", (latest) => {

        const previous = scrollY.getPrevious() ?? 0;
        console.log(previous, latest);

        if(latest > previous) {
        setHidden(true);
        }
        else {
        setHidden(false);
        }
    });
   
    
    return (
    <div ref={container} data-color="black" className="home section w-full h-[200vh] relative  ">
        <div className='w-full sticky top-0 left-0 '>
            {/* navbar */}
            <motion.div 
                variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{duration: 0.35, ease: "easeInOut"}}
                className="section w-[100vw] sm:w-full px-6 fixed top-0 left-0 z-[9]"
            >
                <div className="w-full flex sm:flex items-center justify-between  ">
                    <div className="logo w-[12vh] h-[12vh] sm:w-[16vh] sm:h-[10vh] cursor-pointer z-[9] ">
                        {/* logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="50%" height="50%" className='mt-6'><path fill="#3E721D" d="M28 27c-8 0-8 6-8 6V22h-4v11s0-6-8-6c-4 0-7-2-7-2s0 9 9 9h6s0 2 2 2 2-2 2-2h6c9 0 9-9 9-9s-3 2-7 2z"/><path fill="#FFAC33" d="M21.125 27.662c-.328 0-.651-.097-.927-.283l-2.323-1.575-2.322 1.575c-.277.186-.601.283-.929.283-.143 0-.287-.018-.429-.057-.462-.123-.851-.441-1.06-.874l-1.225-2.527-2.797.204c-.04.002-.079.004-.119.004-.438 0-.86-.174-1.17-.484-.34-.342-.516-.81-.481-1.288l.201-2.8-2.523-1.225c-.432-.209-.751-.598-.876-1.062-.125-.464-.042-.958.228-1.356l1.573-2.323-1.573-2.322c-.27-.398-.353-.892-.228-1.357.125-.462.444-.851.876-1.06L7.544 7.91l-.201-2.797c-.034-.48.142-.951.481-1.289.31-.312.732-.485 1.17-.485.04 0 .079 0 .119.003l2.797.201 1.225-2.523c.209-.432.598-.751 1.06-.876.142-.038.285-.057.429-.057.328 0 .651.098.929.285l2.322 1.573L20.198.372c.275-.188.599-.285.927-.285.144 0 .29.02.428.057.465.125.854.444 1.062.876l1.225 2.523 2.8-.201c.037-.003.078-.003.116-.003.438 0 .858.173 1.172.485.338.338.515.809.48 1.289l-.204 2.797 2.527 1.225c.433.209.751.598.874 1.06.124.465.043.96-.227 1.357l-1.575 2.322 1.575 2.323c.269.398.351.892.227 1.356-.123.464-.441.852-.874 1.062l-2.527 1.225.204 2.8c.034.478-.143.946-.48 1.288-.313.311-.734.484-1.172.484-.038 0-.079-.002-.116-.004l-2.8-.204-1.225 2.527c-.209.433-.598.751-1.062.874-.139.04-.284.057-.428.057z"/><circle fill="#732700" cx="18" cy="14" r="7"/></svg>
                    </div>                   
                    <div className="hidden md:flex gap-2 items-center z-[9] cursor-pointer ">
                        {["Solutions", "About", "Insight", "Team", "Careers"].map((item, index) => (
                            <h4 key={index} className={`${styles.links} h-[3vh] relative py[2.4vh] px-[2.2vh] text-center  flex flex-col
                            font-[Sansita] text-[2.1vh] overflow-hidden font-medium leading-[2.5vh]`}> 
                                <a className={`atag ${styles.atag} relative`}>{item} </a>
                                <a className={`atag ${styles.atag} relative`}>{item} </a>                      
                            </h4>   
                        ))}
                    </div>
                    
                        <BiMenu
                            style={{
                            
                            fontSize: "5.5vw",
                            }}
                            className=' inline-block sm:hidden z-[9] cursor-pointer'
                        />  
                 
                    
                </div>
            </motion.div>

            <div className='btmtext absolute z-[4] bottom-[4%] left-[25%] text-center sm:text-start sm:bottom-[7%] sm:left-8 w-48 '>
                <h1 className='sm:text-[2vh] font-semibold'>
                A society grows great when 
                old people plant trees whose shade 
                they know they shall never sit in.
                </h1>
            </div>
            {/* video div */}
            <div 
                
                className={` vdodiv w-full h-screen absolute z-[3] 
                top-0 left-0 overflow-hidden sm:overflow-visible ${styles.vdodiv}`}
            >   
                <video
                    className="absolute w-full h-screen object-cover top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
                    autoPlay
                    loop
                    muted
                    src={video}
                >     
                </video> 
            </div>

            {/* marquee div */}
            <div 
                className="marqueecontainer w-full h-screen 
                relative overflow-hidden "
            >
                {/* /* top Heading div */ }
                <div 
                    className=' heading absolute  top-[12%] sm:top-[7%] left-1/2 
                    -translate-x-1/2 w-72'
                >
                    <h2 className='toptext text-[2.2vh] font-[Sansita] tracking-wide font-medium text-center'>Crafting a new paradigm of technology, one that is</h2>
                </div>

                <div 
                    
                    className='slidesm absolute scale-[5]  top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2 w-[90%]'
                >    
                    <div className='row'>
                        <Row 
                            translateClass="-translate-x-1/2"  
                            direction="lft"
                        />
                        <Row 
                            translateClass="-translate-x-2/3"  
                            direction="rgt"
                        />
                        <Row 
                            translateClass="-translate-x-1/4"  
                            direction="lft" 
                        />
                        <Row 
                            translateClass="-translate-x-1/3"  
                            direction="rgt"
                        />
                    </div>            
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
