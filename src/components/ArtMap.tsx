"use client";

import {
  GoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useState, useCallback } from "react";
import { artCities } from "@/app/data/artCities";
import { artPlaces } from "@/app/data/artPlaces";
import MapHoverOverlay from "@/components/MapHoverOverlay";
import { useRef } from "react";

const containerStyle = {
  width: "100%",
  height: "75vh",
};


// ✅ Boston 作为默认起点
const BOSTON_CENTER = { lat: 42.3601, lng: -71.0589 };
const INITIAL_ZOOM = 3;
const CITY_ZOOM_THRESHOLD = 11;

export default function ArtMap() {

  const [hoverInfo, setHoverInfo] = useState<{
    x: number;
    y: number;
    title: string;
    note?: string;
  } | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const [activeCityId, setActiveCityId] = useState<string | null>("boston");
  const [activeItem, setActiveItem] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    // 🔒 强制初始状态
    mapInstance.panTo(BOSTON_CENTER);
    mapInstance.setZoom(INITIAL_ZOOM);
  }, []);

  const onZoomChanged = () => {
    if (!map) return;
    const z = map.getZoom() ?? INITIAL_ZOOM;
    setZoom(z);

    // 如果拉远到城市级以下，就不显示城市内部点
    if (z < CITY_ZOOM_THRESHOLD) {
      setActiveCityId(null);
    }
  };

  if (!isLoaded) return null;

  return (
    <div ref={containerRef} className="relative w-full h-[75vh]">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={BOSTON_CENTER}
      zoom={INITIAL_ZOOM}
      onLoad={onLoad}
      onZoomChanged={onZoomChanged}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        // ✅ 不要 styles —— 使用真实地图
      }}
    >
      {/* 城市 markers（真实地图上只是辅助） */}
      {artCities.map((city) => (<Marker
  key={city.id}
  position={city.position}
  onMouseOver={(e) => {
    if (!containerRef.current) return;

    const mouseEvent = e.domEvent as MouseEvent;
    const rect = containerRef.current.getBoundingClientRect();

    const x = mouseEvent.clientX - rect.left;
    const y = mouseEvent.clientY - rect.top;

    setHoverInfo({
      x,
      y,
      title: city.name,
      note: city.note,
    });
  }}
  onMouseOut={() => setHoverInfo(null)}
  onClick={() => {
    if (!map) return;
    setActiveCityId(city.id);
    map.panTo(city.position);
    map.setZoom(11);
  }}
/>

      ))}

      {/* 城市内部 markers（只在 zoom 足够时显示） */}
      {zoom >= 11 &&
  activeCityId &&
  artPlaces
    .filter(p => p.cityId === activeCityId)
    .map(place => (
      <Marker
        key={place.id}
        position={place.position}
        onMouseOver={(e) => {
          if (!containerRef.current) return;

          const mouseEvent = e.domEvent as MouseEvent;
          const rect = containerRef.current.getBoundingClientRect();

          const x = mouseEvent.clientX - rect.left;
          const y = mouseEvent.clientY - rect.top;

          setHoverInfo({
            x,
            y,
            title: place.title,
            note: place.note,
          });
        }}
        onMouseOut={() => setHoverInfo(null)}
        // ❌ 不写 onClick
      />
    ))}


      {/* InfoWindow */}
      

    </GoogleMap>
    {hoverInfo && (
      <MapHoverOverlay
        x={hoverInfo.x}
        y={hoverInfo.y}
        title={hoverInfo.title}
        note={hoverInfo.note}
      />
    )}
    </div>
  );
}
