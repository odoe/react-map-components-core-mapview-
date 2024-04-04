import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import { ArcgisBasemapLayerList } from "@arcgis/map-components-react";
import { useEffect, useState, useRef } from "react";

import {
  CalcitePanel,
  CalciteShell,
  CalciteShellPanel
} from "@esri/calcite-components-react";


const App = () => {
  const [view, setView] = useState(null);

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const webmap = new WebMap({
        portalItem: {
          id: "d5dda743788a4b0688fe48f43ae7beb9"
        }
      });

      const _view = new MapView({
        container: mapDiv.current,
        map: webmap
      });

      setView(_view);
    }
  }, [mapDiv]);

  return (
    <CalciteShell contentBehind>
      <CalciteShellPanel slot="panel-start" displayMode="float">
        <CalcitePanel>
          <ArcgisBasemapLayerList view={view} />
        </CalcitePanel>
      </CalciteShellPanel>
      <div className="mapDiv" ref={mapDiv}></div>
    </CalciteShell>
  )
};

export default App;
