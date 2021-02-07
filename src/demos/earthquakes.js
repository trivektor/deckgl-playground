import DeckGL from "@deck.gl/react";
import {StaticMap} from "react-map-gl";
import {GeoJsonLayer} from "@deck.gl/layers";

const INITIAL_VIEW_STATE = {
  longitude: -164.5085,
  latitude: 8.7832,
  zoom: 2,
};

const Earthquakes = () => {
  const layers = [
    new GeoJsonLayer({
      id: 'geojson-layer',
      data: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
      pointRadiusMinPixels: 2,
      pointRadiusMaxPixels: 200,
      opacity: 0.1,
      pointRadiusScale: 0.3,
      getRadius: (f) => Math.pow(10, f.properties.mag),
      getFillColor: [255, 70, 30, 180],
      autoHighlight: true,
    }),
  ];

  return (
    <DeckGL
      controller
      initialViewState={INITIAL_VIEW_STATE}
      layers={layers}>
      <StaticMap
        reuseMaps
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10" />
    </DeckGL>
  );
};

export {Earthquakes as default};

