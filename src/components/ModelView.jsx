import {OrbitControls, PerspectiveCamera, View} from "@react-three/drei"

import * as THREE from "three";
import {Lights} from "./Lights.jsx";
import {Suspense} from "react";
import {Loader} from "./Loader.jsx";
import {Model as IPhone} from "./IPhone.jsx";

// eslint-disable-next-line react/prop-types
export const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {

    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >
            {/* eslint-disable-next-line react/no-unknown-property */}
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <Lights />

            {/* eslint-disable-next-line react/prop-types */}
            <OrbitControls onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
            />

            {/* eslint-disable-next-line react/no-unknown-property */}
            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0,0,0]}>
                <Suspense fallback={<Loader />}>
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    )
}