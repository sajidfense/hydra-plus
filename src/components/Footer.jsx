import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Footer = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#footer h2', { type: 'words' })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#footer',
        start: 'top center',
      },
      ease: 'power1.inOut',
    })

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from('#footer h3, #footer p, #footer a, #footer form', {
        opacity: 0,
        yPercent: 30,
        stagger: 0.05,
      }, '-=0.3')
      .to('#f-right-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.inOut',
      })
      .to(
        '#f-left-leaf',
        {
          y: '-50',
          duration: 1,
          ease: 'power1.inOut',
        },
        '<'
      )
  })

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 text-gray-800 px-8 md:px-16 py-20 mt-32"
    >
      {/* Decorative leaves */}
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        className="absolute right-0 bottom-0 w-40 opacity-50"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
        className="absolute left-0 bottom-0 w-40 opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 text-center md:text-left grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-1">
          <h2 className="text-3xl font-bold mb-4">Stay Hydrated. <br/> Stay Charged.</h2>
          <p className="text-gray-600 mb-4">
            Hydra+ is a science-backed electrolyte mix designed to help you perform better, recover faster, and feel energized.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-5" />
            </a>
            <a href="#" aria-label="TikTok">
              <img src="/icons/tiktok.svg" alt="TikTok" className="w-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-5" />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">All Products</a></li>
            <li><a href="#">Bundles</a></li>
            <li><a href="#">Subscriptions</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Science</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Stay Updated</h3>
          <p className="text-gray-600 mb-3">Get 10% off your first order + hydration tips.</p>
          <form className="flex bg-white rounded-lg overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Hydra+. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
