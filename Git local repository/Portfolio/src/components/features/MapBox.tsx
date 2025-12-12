import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapPin, Globe } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

// Get Mapbox access token from environment variables
// For demo purposes, using a public token - replace with your own
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

interface MapBoxProps {
  className?: string;
  longitude?: number;
  latitude?: number;
  zoom?: number;
}

const MapBox = ({ 
  className = "", 
  longitude = Number(import.meta.env.VITE_MAP_LONGITUDE) || -74.006, // Default to New York City
  latitude = Number(import.meta.env.VITE_MAP_LATITUDE) || 40.7128,
  zoom = Number(import.meta.env.VITE_MAP_ZOOM) || 10 
}: MapBoxProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapError, setMapError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    if (!mapContainer.current) return;

    try {
      // Set the access token
      mapboxgl.accessToken = MAPBOX_TOKEN;
      
      console.log('Initializing map with token:', MAPBOX_TOKEN.substring(0, 20) + '...');

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11', // Dark theme to match portfolio
        center: [longitude, latitude],
        zoom: zoom,
        attributionControl: true, // Keep attribution for now to help with debugging
        interactive: true,
        cooperativeGestures: false, // Disable cooperative gestures for better UX
      });

    // Add custom marker
    const marker = new mapboxgl.Marker({
      color: '#3B82F6', // Blue color to match theme
      scale: 1.2
    })
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    // Add popup with contact info
    const popup = new mapboxgl.Popup({
      offset: 25,
      closeButton: false,
      className: 'custom-popup'
    })
      .setLngLat([longitude, latitude])
      .setHTML(`
        <div style="
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          color: white;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #374151;
          font-family: system-ui, -apple-system, sans-serif;
        ">
          <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #60A5FA;">
            TAO-STAR
          </h3>
          <p style="margin: 0; font-size: 12px; color: #D1D5DB;">
            Available for remote work worldwide
          </p>
        </div>
      `)
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true
    }), 'top-right');

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    // Add scale control
    map.current.addControl(new mapboxgl.ScaleControl({
      maxWidth: 100,
      unit: 'metric'
    }), 'bottom-left');

    // Add geolocate control (find user's location)
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    });
    map.current.addControl(geolocate, 'top-right');

      // Add custom styling for dark theme
      map.current.on('load', () => {
        setIsLoading(false);
        console.log('Map loaded successfully!');
        
        // Enable map interactions
        map.current!.scrollZoom.enable();
        map.current!.boxZoom.enable();
        map.current!.dragRotate.enable();
        map.current!.dragPan.enable();
        map.current!.keyboard.enable();
        map.current!.doubleClickZoom.enable();
        map.current!.touchZoomRotate.enable();

        // Set proper cursor styles
        const canvas = map.current!.getCanvas();
        canvas.style.cursor = 'grab';
        
        // Change cursor on drag
        map.current!.on('mousedown', () => {
          canvas.style.cursor = 'grabbing';
        });
        
        map.current!.on('mouseup', () => {
          canvas.style.cursor = 'grab';
        });

        // Change cursor on hover over interactive elements
        map.current!.on('mouseenter', 'marker', () => {
          canvas.style.cursor = 'pointer';
        });
        
        map.current!.on('mouseleave', 'marker', () => {
          canvas.style.cursor = 'grab';
        });

        // Add keyboard shortcuts
        map.current!.getCanvas().addEventListener('keydown', (e) => {
          if (e.key === 'r' || e.key === 'R') {
            // Reset to original position
            map.current!.flyTo({
              center: [longitude, latitude],
              zoom: zoom,
              bearing: 0,
              pitch: 0,
              duration: 1000
            });
          }
        });

        // Add click event for coordinates
        map.current!.on('click', (e) => {
          console.log(`Coordinates: ${e.lngLat.lng.toFixed(4)}, ${e.lngLat.lat.toFixed(4)}`);
        });
      });

      map.current.on('error', (e) => {
        console.error('Map error:', e);
        setMapError(true);
        setIsLoading(false);
      });

      // Add style load event
      map.current.on('style.load', () => {
        console.log('Map style loaded');
      });

    } catch (error) {
      console.error('Mapbox initialization error:', error);
      setMapError(true);
      setIsLoading(false);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [longitude, latitude, zoom]);

  // Fallback component when map fails to load
  const MapFallback = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 flex flex-col items-center justify-center text-center p-8 cursor-default">
      <div className="mb-4">
        <Globe className="text-blue-400 mx-auto mb-2" size={48} />
        <h3 className="text-xl font-semibold text-white mb-2">Global Availability</h3>
        <p className="text-gray-400 text-sm mb-4">
          Available for remote work worldwide
        </p>
      </div>
      
      <div className="space-y-3 text-sm mb-6">
        <div className="flex items-center gap-3 text-gray-300">
          <MapPin className="text-blue-400" size={16} />
          <span>Remote-first approach</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <Globe className="text-green-400" size={16} />
          <span>Flexible time zones</span>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mb-4">
        Interactive map requires Mapbox configuration
      </div>
      
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
      >
        Retry Loading Map
      </button>
    </div>
  );

  return (
    <div className={`relative map-container ${className}`}>
      {mapError ? (
        <MapFallback />
      ) : (
        <>
          <div 
            ref={mapContainer} 
            className={`w-full h-full rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 ${
              isHovering ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
            }`}
            style={{ minHeight: '300px' }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
          
          {/* Loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-gray-400 text-sm">Loading interactive map...</p>
              </div>
            </div>
          )}
          
          {/* Map Instructions Overlay */}
          <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 text-xs text-gray-300 max-w-xs pointer-events-none">
            <div className="font-semibold text-white mb-2">Map Navigation:</div>
            <div className="space-y-1">
              <div>• Drag to pan around</div>
              <div>• Scroll to zoom in/out</div>
              <div>• Double-click to zoom in</div>
              <div>• Hold Shift + drag to rotate</div>
              <div>• Press 'R' to reset view</div>
              <div>• Click for coordinates</div>
            </div>
          </div>

          {/* Style Switcher */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <button
              onClick={() => map.current?.setStyle('mapbox://styles/mapbox/dark-v11')}
              className="px-3 py-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 text-xs text-white hover:bg-gray-800/90 transition-colors"
            >
              Dark
            </button>
            <button
              onClick={() => map.current?.setStyle('mapbox://styles/mapbox/satellite-streets-v12')}
              className="px-3 py-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 text-xs text-white hover:bg-gray-800/90 transition-colors"
            >
              Satellite
            </button>
            <button
              onClick={() => map.current?.setStyle('mapbox://styles/mapbox/streets-v12')}
              className="px-3 py-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 text-xs text-white hover:bg-gray-800/90 transition-colors"
            >
              Streets
            </button>
          </div>

          {/* Overlay with gradient border effect */}
          <div className="absolute inset-0 rounded-xl pointer-events-none">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 opacity-50" />
          </div>
        </>
      )}
      
      {/* Custom styles for Mapbox popup */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .mapboxgl-popup-content {
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
          
          .mapboxgl-popup-tip {
            border-top-color: #1f2937 !important;
          }
          
          .mapboxgl-ctrl-group {
            background: rgba(31, 41, 55, 0.8) !important;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(55, 65, 81, 0.5) !important;
          }
          
          .mapboxgl-ctrl-group button {
            background: transparent !important;
            color: #D1D5DB !important;
          }
          
          .mapboxgl-ctrl-group button:hover {
            background: rgba(59, 130, 246, 0.2) !important;
          }

          .mapboxgl-ctrl-fullscreen,
          .mapboxgl-ctrl-geolocate {
            background: rgba(31, 41, 55, 0.8) !important;
            border: 1px solid rgba(55, 65, 81, 0.5) !important;
          }

          .mapboxgl-ctrl-scale {
            background: rgba(31, 41, 55, 0.8) !important;
            color: #D1D5DB !important;
            border: 1px solid rgba(55, 65, 81, 0.5) !important;
            border-radius: 4px !important;
            padding: 2px 6px !important;
          }

          .mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active {
            background: rgba(59, 130, 246, 0.3) !important;
          }

          .mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active .mapboxgl-ctrl-icon {
            color: #60A5FA !important;
          }

          /* Map container cursor styles */
          .mapboxgl-canvas-container {
            cursor: grab !important;
          }
          
          .mapboxgl-canvas-container:active {
            cursor: grabbing !important;
          }

          /* Disable pointer events on overlays when map is hovered */
          .map-container:hover .pointer-events-none {
            pointer-events: none !important;
          }

          /* Ensure map is interactive */
          .mapboxgl-canvas {
            outline: none !important;
          }

          /* Map loading state */
          .mapboxgl-canvas-container.mapboxgl-interactive {
            cursor: grab !important;
          }
        `
      }} />
    </div>
  );
};

export default MapBox;