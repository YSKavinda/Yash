import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(ScrollTrigger,Draggable)


function horizontalLoop(items, config) {

}

const TechStackComponent = props => {
    const containerRef = useRef(null);
    const proxyRef = useRef(null);
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const proxy = proxyRef.current;
        const boxes = gsap.utils.toArray('.box', container);
        const next = nextBtnRef.current;
        const prev = prevBtnRef.current;

        let loop = horizontalLoop(boxes, {
            paused: false,
            repeat: -1,
            speed: 1,
            draggable: true,
            center: true,
            onChange: (index) => console.log("current index:", index)
        })

        next.addEventListener("click", () => loop.next())
        prev.addEventListener("click", () => loop.previous())

        return () => {
            next.removeEventListener("click", loop.next)
            prev.removeEventListener("click", loop.previous)
        }
    })

    return (
        <div className="slider-wrapper">
            <div className="boxes" ref={containerRef} >
                {/* Replace with your actual images */}
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="box" style={{ '--src': `url(/img${i + 1}.jpg)` }}>
                        <img src={`/img${i + 1}.jpg`} alt={`Slide ${i + 1}`} />
                    </div>
                ))}
            </div>
            <div className="controls">
                <button className="prev"><span>Prev</span></button>
                <button className="next"><span>Next</span></button>
            </div>
            <div className="drag-proxy" ref={proxyRef}></div>
        </div>
    )

}