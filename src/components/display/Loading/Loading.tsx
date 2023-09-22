import { FC } from "react"
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../static/json/groovyWalk.json";


interface LoadingProps {

}


const Loading: FC<LoadingProps> = () => {
    return(
        <div>
            <Lottie animationData={groovyWalkAnimation} />;
        </div>
    )
}

export default Loading;