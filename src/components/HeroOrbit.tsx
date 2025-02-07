import { PropsWithChildren } from "react"

export const HeroOrbit = ({ children, size, rotation }: PropsWithChildren <{size: number; rotation: number}>) => {
    return(
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="animate-spin [animation-duration:20s]">
                <div className="" style={{
                    transform: `rotate(${rotation}deg)`,
                    width: `${size}px`,
                    height: `${size}px`
                }}>
                    <div className="inline-flex " style={{
                        transform   : `rotate(${rotation * -1}deg)`,
                    }}>{children}
                    </div>
                </div>
            </div>
     </div>
    )
}