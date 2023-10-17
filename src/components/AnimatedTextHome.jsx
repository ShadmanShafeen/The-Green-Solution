import { TypeAnimation } from 'react-type-animation';
import styles from './AnimatedTextHome.module.css'

function AnimatedTextHome() { 
return(
    <>

<p className={styles.TextAnimationHome}>
<TypeAnimation
  sequence={[
    // 'The',
    // 500,
    // 'The Green', //  Continuing previous Text
    // 500,
    'Welcome to The Green Solution',
    300,
    // 'The Green',
    // 500,
    // 'The',
    // 500,
    '',
    300,
  ]}
  
  repeat={Infinity}
/>
</p>
</>
);

}
export default AnimatedTextHome