import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
}

export const MapView: React.FC<MapViewProps> = ({
  latitude = 13.1488, // Chennai Puzhal/Madhavaram (PIN: 600052)
  longitude = 80.2050,
  zoom = 14,
  className = '',
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // already initialized

    // Initialize Leaflet Map
    const map = L.map(mapContainerRef.current, {
      center: [latitude, longitude],
      zoom,
      scrollWheelZoom: false, // Prevent page scrolling hijacking
      zoomControl: true,
      attributionControl: false,
    });

    mapInstanceRef.current = map;

    // OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Custom Red Pin Marker matching COBRA Brand colors
    const customPinIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="position: relative; width: 36px; height: 44px; display: flex; flex-direction: column; align-items: center; filter: drop-shadow(0 4px 8px rgba(2,42,72,0.35)); cursor: pointer;">
          <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0C8.05888 0 0 8.05888 0 18C0 29.5 15.75 42.75 16.875 43.6875C17.2031 43.9688 17.5938 44 18 44C18.4062 44 18.7969 43.9688 19.125 43.6875C20.25 42.75 36 29.5 36 18C36 8.05888 27.9411 0 18 0Z" fill="#ED3237"/>
            <circle cx="18" cy="18" r="7" fill="#FFFFFF"/>
            <circle cx="18" cy="18" r="3.5" fill="#022A48"/>
          </svg>
        </div>
      `,
      iconSize: [36, 44],
      iconAnchor: [18, 44],
      popupAnchor: [0, -42],
    });

    const marker = L.marker([latitude, longitude], { icon: customPinIcon }).addTo(map);

    marker.bindPopup(`
      <div style="font-family: 'Outfit', sans-serif; padding: 4px; text-align: center;">
        <strong style="color: #022A48; font-size: 14px; display: block; margin-bottom: 2px;">COBRA CYBER VAULT</strong>
        <span style="color: #666; font-size: 12px; display: block;">CHENNAI, TN, INDIA - 600052</span>
        <a href="mailto:contact@cobra.zone" style="color: #ED3237; font-size: 12px; font-weight: 600; text-decoration: none; display: inline-block; margin-top: 4px;">contact@cobra.zone</a>
      </div>
    `);

    // Invalidate map size after DOM layout settles to prevent tile clipping
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    const handleResize = () => {
      map.invalidateSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [latitude, longitude, zoom]);

  return (
    <div
      ref={mapContainerRef}
      className={`map-view-container ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '280px',
        backgroundColor: '#e5e7eb',
        position: 'relative',
        zIndex: 1,
      }}
      aria-label="Map location of COBRA in Chennai, TN, India - 600052"
    />
  );
};
