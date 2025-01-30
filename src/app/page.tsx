"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect } from "react"
import GoogleMapComponent from "./components/GoogleMap"

export default function CarwashLanding() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault()
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
      if (targetId) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll)
      })
    }
  }, [])

  const services = [
    {
      name: "Lavado Signature",
      description: "Experimente nuestro lavado premium con productos de alta calidad.",
      image: "/bmw lavando.png?height=200&width=300&text=Lavado+Signature",
    },
    {
      name: "Detallado Ejecutivo",
      description: "Un servicio completo que deja su vehículo impecable por dentro y por fuera.",
      image: "/audi lavando.png?height=200&width=300&text=Detallado+Ejecutivo",
    },
    {
      name: "Protección Cerámica",
      description: "Protección duradera que mantiene el brillo de su vehículo por más tiempo.",
      image: "/mercedes lavando 2.png?height=200&width=300&text=Protección+Cerámica",
    },
  ]

  const transformations = [
    {
      before: "/mercedes sucio.jpg?height=300&width=600&text=Antes+1",
      after: "/mercedes limpio.jpg?height=300&width=600&text=Después+1",
    },
    {
      before: "/bmw m6 sucio.jpg?height=300&width=600&text=Antes+2",
      after: "/bmw m6 limpio.jpg?height=300&width=600&text=Después+2",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold text-amber-400">AquaShine-CarWash</h1>
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#services" className="text-gray-300 hover:text-amber-400">
                Servicios
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#gallery" className="text-gray-300 hover:text-amber-400">
                Galería
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact" className="text-gray-300 hover:text-amber-400">
                Contacto
              </a>
            </motion.li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="relative h-[600px]">
          <Image
            src="/DALL·E-2025-01-29-12.35.png?height=600&width=1200"
            alt="Carro de lujo recién lavado"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h2 className="text-5xl font-bold mb-4">Experiencia de lavado premium</h2>
              <p className="text-xl mb-8">Donde el lujo se encuentra con la limpieza</p>
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-gray-900">
                Reserva tu sesión
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="services" className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Nuestros Servicios de Élite</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-amber-400/20"
              >
                <Image
                  src={service.image || "/bmw lavando.png"}
                  alt={service.name}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-amber-400">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-gray-900 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Transformaciones Impresionantes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[400px] group cursor-pointer"
                >
                  <Image
                    src={item.before || "/bmw lavando.png"}
                    alt={`Antes ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Image
                      src={item.after || "/audi lavando.png"}
                      alt={`Después ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Testimonios de Clientes Distinguidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Vega",
                comment: "Un servicio verdaderamente de clase mundial. Mi coche nunca ha lucido mejor.",
              },
              { name: "Ana Martínez", comment: "La atención al detalle es incomparable. Totalmente recomendado." },
              { name: "Javier Ruiz", comment: "LuxeWash ha establecido un nuevo estándar en el cuidado automotriz." },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-amber-400/20"
              >
                <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold text-amber-400">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="location" className="bg-gray-900 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Nuestra Ubicación</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <GoogleMapComponent />
            </div>
            <div className="mt-8 text-center text-gray-300">
              <p>Encuéntranos en:</p>
              <p className="font-semibold text-amber-400">Eliodoro Flores 2425, Ñuñoa, Santiago</p>
              <p>Abierto de Lunes a Sábado, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 py-16 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">Contacto Exclusivo</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Nombre" className="bg-gray-800 text-white border-amber-400/50" />
                <Input type="email" placeholder="Email" className="bg-gray-800 text-white border-amber-400/50" />
                <Textarea placeholder="Mensaje" className="bg-gray-800 text-white border-amber-400/50" />
                <Button type="submit" className="w-full bg-amber-400 text-gray-900 hover:bg-amber-500">
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 border-t border-amber-400/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-amber-400">AquaShine-CarWash</h3>
            <p className="text-gray-400">Elevando el estándar del cuidado automotriz</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-amber-400">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

