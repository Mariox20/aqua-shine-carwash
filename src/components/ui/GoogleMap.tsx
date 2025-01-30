import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api"

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 40.7128, // Reemplaza con la latitud de tu negocio
  lng: -74.006, // Reemplaza con la longitud de tu negocio
}

export default function GoogleMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  if (loadError) return <div>Error al cargar el mapa</div>
  if (!isLoaded) return <div>Cargando mapa...</div>

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center}>
      <Marker position={center} />
    </GoogleMap>
  )
}

