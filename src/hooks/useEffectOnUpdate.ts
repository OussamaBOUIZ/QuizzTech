import { useEffect, useRef } from "react"
    
export default function useEffectOnUpdate (effectFunc: any, deps:any[]) {
    const initialRender = useRef(true);
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return ;
        }
        return effectFunc();
    }, deps);
}