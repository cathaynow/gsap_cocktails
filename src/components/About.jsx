import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#about h2", {
            type: "words"
        })

        const scrollTImeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center"
            }
        })

        scrollTImeline.from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease: "expo.out",
            stagger: 0.02
        })
            .from(".top-grid div, .bottom-grid div", {
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                stagger: 0.04
            }, '-=0.5')
    }, [])


    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">최고의 칵테일</p>
                        <h2>Where every details matters<span className="text-white">-</span>
                            from muddle to garnish
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>
                            저희가 제공하는 모든 칵테일은 첫 번째 머들링부터 마지막 장식까지, 디테일에 대한 저희의 집념을 반영합니다. 이러한 세심함이 단순한 칵테일을 진정으로 기억에 남는
                            특별한 칵테일로 만들어냅니다.
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                12000명 이상의 고객
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt1.png" alt="grid-img-1"/>
                </div>

                <div className="md:col-span-6">
                    <div className="noisy"/>
                    <img src="/images/abt2.png" alt="grid-img-2"/>
                </div>

                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt5.png" alt="grid-img-5"/>
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy"/>
                    <img src="/images/abt3.png" alt="grid-img-3"/>
                </div>

                <div className="md:col-span-4">
                    <div className="noisy"/>
                    <img src="/images/abt4.png" alt="grid-img-4"/>
                </div>

            </div>
        </div>
    )
}
export default About
