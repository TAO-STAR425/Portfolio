# Mapbox Integration Setup

This portfolio includes an interactive Mapbox map in the contact section. Follow these steps to set it up:

## 1. Get a Mapbox Access Token

1. Go to [Mapbox Account](https://account.mapbox.com/access-tokens/)
2. Sign up for a free account if you don't have one
3. Create a new access token or use the default public token
4. Copy your access token

## 2. Configure Environment Variables

1. Create a `.env.local` file in the project root (already created)
2. Replace the placeholder token with your actual Mapbox token:

```env
# Replace with your actual Mapbox access token
VITE_MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6ImNsxxxxxxxxxxxxxxx

# Optional: Customize map location (defaults to NYC)
VITE_MAP_LONGITUDE=-74.006
VITE_MAP_LATITUDE=40.7128
VITE_MAP_ZOOM=10
```

## 3. Customize Map Location

To change the map location to your preferred coordinates:

1. Find your coordinates using [LatLong.net](https://www.latlong.net/)
2. Update the environment variables:
   - `VITE_MAP_LONGITUDE`: Your longitude
   - `VITE_MAP_LATITUDE`: Your latitude
   - `VITE_MAP_ZOOM`: Zoom level (1-20, where 20 is closest)

## 4. Map Features

The integrated map includes:

- **Dark Theme**: Matches the portfolio's dark aesthetic
- **Custom Marker**: Blue marker indicating your location/availability
- **Interactive Popup**: Shows contact information
- **Navigation Controls**: Zoom and pan controls
- **Responsive Design**: Works on all device sizes

## 5. Customization Options

### Change Map Style
Edit `src/components/features/MapBox.tsx` and modify the `style` property:

```typescript
style: 'mapbox://styles/mapbox/dark-v11', // Current dark theme
// Other options:
// 'mapbox://styles/mapbox/streets-v12'
// 'mapbox://styles/mapbox/satellite-v9'
// 'mapbox://styles/mapbox/light-v11'
```

### Customize Marker Color
Change the marker color in the MapBox component:

```typescript
const marker = new mapboxgl.Marker({
  color: '#3B82F6', // Change this hex color
  scale: 1.2
})
```

### Update Popup Content
Modify the popup HTML in the MapBox component to show different information.

## 6. Free Tier Limits

Mapbox free tier includes:
- 50,000 map loads per month
- 50,000 geocoding requests per month
- Perfect for portfolio websites

## 7. Troubleshooting

**Map not loading?**
- Check your access token is correct
- Ensure `.env.local` file is in the project root
- Restart the development server after adding environment variables

**Invalid coordinates?**
- Longitude should be between -180 and 180
- Latitude should be between -90 and 90

**Styling issues?**
- The map uses CSS-in-JS for custom styling
- Check browser console for any CSS conflicts

## 8. Production Deployment

When deploying to production:
1. Add your environment variables to your hosting platform
2. Ensure your Mapbox token has the correct URL restrictions
3. Consider adding your production domain to Mapbox URL restrictions for security

## Support

For Mapbox-specific issues, check:
- [Mapbox Documentation](https://docs.mapbox.com/)
- [Mapbox GL JS API](https://docs.mapbox.com/mapbox-gl-js/api/)
- [React Map GL Documentation](https://visgl.github.io/react-map-gl/)