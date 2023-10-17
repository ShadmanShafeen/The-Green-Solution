import { TypeAnimation } from 'react-type-animation';
import styles from './AnimatedText.module.css'

function AnimatedText() { 
return(
    <>

<p className={styles.TextAnimation}>
<TypeAnimation
  sequence={[
    // 'The',
    // 500,
    // 'The Green', //  Continuing previous Text
    // 500,
    'The Green Solution',
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
export default AnimatedText