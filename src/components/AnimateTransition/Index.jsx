import {motion} from "framer-motion";

const AnimateTransition = ({children}) => {
    const SlideRight = {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.5},
        }
    }
    return (
        <motion.div
            variants={SlideRight}
            initial={"initial"}
            animate={"animate"}
            exit={{x: 100, opacity: 0}}
        >
            {children}
        </motion.div>
    )
}
export default AnimateTransition