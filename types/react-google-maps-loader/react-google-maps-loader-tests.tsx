import * as React from "react";
import ReactGoogleMapsLoader from "react-google-maps-loader";

const ReactGoogleMapsLoaderTest: React.FC = () => (
    <ReactGoogleMapsLoader
        params={{ key: "secret-key" }}
        render={(googleMaps) => {
            googleMaps; // $ExpectType typeof maps
            return <div />;
        }}
    />
);

const ReactGoogleMapsLoaderWithLibrariesTest: React.FC = () => (
    <ReactGoogleMapsLoader
        params={{ key: "secret-key", libraries: "places" }}
        render={(googleMaps) => {
            googleMaps; // $ExpectType typeof maps
            return <div />;
        }}
    />
);

const ReactGoogleMapsLoaderWithErrorHandlerTest: React.FC = () => (
    <ReactGoogleMapsLoader
        params={{ key: "secret-key", libraries: "places" }}
        render={(googleMaps, error) => {
            googleMaps; // $ExpectType typeof maps
            error; // $ExpectType string | null | undefined
            return <div>{error}</div>;
        }}
    />
);
