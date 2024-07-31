import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"


export const CardDeal = () => (
   
  <section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Find a better Card deal <br  className="sm:block hidden"/> in a few easy steps

    </h2>
    <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
       Amet quos odit at totam excepturi sed animi facere obcaecati.
        Iste cum recusandae architecto doloremque veritatis esse ab 
        voluptates nam sit eligendi.
    </p>

    <Button styles="mt-10"/>

  </div>

  <div className={layout.sectionImg}>
    <img src={card} alt="card" className="w-[100%] h-[100%]" />

  </div>



  </section>
  )

