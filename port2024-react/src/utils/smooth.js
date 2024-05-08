import Lenis from 'lenis'

const smooth = () => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', (e) => {
      /* console.log(e) */
    })

}

export default smooth;