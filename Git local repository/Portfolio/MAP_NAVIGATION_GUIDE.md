# 🗺️ Map Navigation Guide

Your TAO-STAR portfolio includes an interactive Mapbox map with comprehensive navigation features. Here's how to surf and explore the map:

## 🖱️ Mouse/Trackpad Controls

### **Basic Navigation:**
- **Pan**: Click and drag anywhere on the map to move around
- **Zoom In**: Scroll up with mouse wheel or trackpad
- **Zoom Out**: Scroll down with mouse wheel or trackpad
- **Quick Zoom**: Double-click anywhere to zoom in on that location
- **Rotate**: Hold Shift + drag to rotate the map
- **Tilt**: Hold Ctrl + drag up/down to tilt the map (3D view)

### **Advanced Gestures:**
- **Box Zoom**: Hold Shift + drag to create a zoom box
- **Reset Bearing**: Hold Ctrl + click the compass to reset rotation

## 📱 Touch Controls (Mobile/Tablet)

### **Single Touch:**
- **Pan**: Touch and drag with one finger to move around
- **Double Tap**: Double-tap to zoom in on a location

### **Multi-Touch:**
- **Pinch Zoom**: Use two fingers to pinch in/out for zooming
- **Rotate**: Place two fingers and rotate to change map orientation
- **Tilt**: Use two fingers and drag up/down to tilt the map

## 🎮 Control Panel Features

### **Navigation Controls (Top-Right):**
1. **Zoom In (+)**: Click to zoom in one level
2. **Zoom Out (-)**: Click to zoom out one level
3. **Compass**: Shows current rotation, click to reset to north
4. **3D Pitch**: Shows current tilt angle
5. **Fullscreen**: Expand map to full browser window
6. **Locate Me**: Find and center on your current location

### **Map Style Switcher (Top-Left):**
- **Dark**: Default dark theme matching portfolio
- **Satellite**: Aerial satellite imagery
- **Streets**: Traditional street map view

### **Scale Control (Bottom-Left):**
- Shows current map scale in metric units
- Updates automatically as you zoom

## ⌨️ Keyboard Shortcuts

### **Navigation:**
- **Arrow Keys**: Pan the map in any direction
- **+ / =**: Zoom in
- **- / _**: Zoom out
- **Shift + Arrow**: Pan faster
- **R**: Reset to original position and zoom

### **Advanced:**
- **Shift + Drag**: Rotate the map
- **Ctrl + Drag**: Tilt the map (3D view)

## 🎯 Interactive Features

### **Marker & Popup:**
- Blue marker shows TAO-STAR's availability location
- Click marker to see contact information popup
- Popup shows availability for remote work

### **Click for Coordinates:**
- Click anywhere on the map to log coordinates to browser console
- Useful for developers or location reference

### **Smooth Animations:**
- All movements include smooth transitions
- Flyto animations when using reset function
- Responsive feedback on all interactions

## 🔧 Customization Options

### **Environment Variables:**
You can customize the map location by editing `.env.local`:

```env
# Map Center Coordinates
VITE_MAP_LONGITUDE=-74.006  # New York City longitude
VITE_MAP_LATITUDE=40.7128   # New York City latitude
VITE_MAP_ZOOM=10           # Initial zoom level (1-20)
```

### **Available Map Styles:**
- `mapbox://styles/mapbox/dark-v11` (Default)
- `mapbox://styles/mapbox/light-v11`
- `mapbox://styles/mapbox/streets-v12`
- `mapbox://styles/mapbox/satellite-v9`
- `mapbox://styles/mapbox/satellite-streets-v12`
- `mapbox://styles/mapbox/navigation-day-v1`
- `mapbox://styles/mapbox/navigation-night-v1`

## 📍 Location Features

### **Current Setup:**
- **Default Location**: New York City (customizable)
- **Marker**: Blue pin indicating availability
- **Popup**: Contact information and remote work availability
- **Global Coverage**: Represents worldwide remote work capability

### **Geolocation:**
- Click the location button (📍) to find your current position
- Requires browser location permission
- Shows your location relative to TAO-STAR's availability

## 🎨 Visual Features

### **Dark Theme Integration:**
- Custom dark styling matching portfolio theme
- Blue accent colors consistent with brand
- Transparent controls with backdrop blur
- Gradient border effects

### **Responsive Design:**
- Adapts to different screen sizes
- Touch-friendly controls on mobile
- Optimized performance across devices

## 🚀 Performance Tips

### **Smooth Navigation:**
- Map uses hardware acceleration when available
- Optimized for 60fps animations
- Efficient rendering for smooth interactions

### **Loading States:**
- Shows loading spinner while map initializes
- Graceful fallback if Mapbox fails to load
- Error handling with informative messages

## 🔍 Troubleshooting

### **Map Not Loading:**
1. Check internet connection
2. Verify Mapbox token in `.env.local`
3. Check browser console for errors
4. Try refreshing the page

### **Controls Not Working:**
1. Ensure JavaScript is enabled
2. Check for browser compatibility
3. Try different map style
4. Clear browser cache

### **Performance Issues:**
1. Close other browser tabs
2. Try a simpler map style (Streets instead of Satellite)
3. Reduce zoom level for better performance
4. Check system resources

## 🌍 Global Accessibility

The map represents TAO-STAR's global availability for remote work:
- **Remote-First**: Available for projects worldwide
- **Time Zone Flexible**: Can work across different time zones
- **On-Site Available**: Consultation available when needed
- **24/7 Communication**: Multiple contact methods available

Explore the map to get a sense of global reach and professional availability!