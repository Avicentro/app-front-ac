import { FC } from "react"
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../static/json/groovyWalk.json";
import { LoadingWrapper } from "./style";


interface LoadingProps {

}


const Loading: FC<LoadingProps> = () => {
    return(
        <LoadingWrapper>
            <Lottie animationData={groovyWalkAnimation} className="icon-animate" />;
        </LoadingWrapper>
    )
}

export default Loading;