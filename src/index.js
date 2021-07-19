/** @jsx jsx */

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { LocationSearch } from "./LocationSearch";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { getDistance } from "geolib";
import axios from "axios";

import ReactDOM from "react-dom";
import { css, jsx } from "@emotion/react";

import ttClubs from "../data/tt-clubs";

import { ClubDetail } from "./ClubDetail";
import { ClubList } from "./ClubList";
import { ClubMap } from "./ClubMap";
import { getClubScore } from "./util";
import Select from "react-select";

let rawClubs = [];

ttClubs.forEach((club) => {
  if (!club.locations) {
    rawClubs.push(club);
    return;
  }

  club.locations.forEach((l) => {
    rawClubs.push({
      ...club,
      ...l,
    });
  });
});

rawClubs = rawClubs
  .filter((club) => !Number.isNaN(club.lat) && !Number.isNaN(club.lng))
  .filter((club) => !club.closed)
  .map((club) => ({
    ...club,
    score: getClubScore(club),
  }));

const SORT = {
  DISTANCE: {
    id: "distance",
    name: "Distance",
    fn: (a, b) => a.distance - b.distance,
  },
  RATING: {
    id: "rating",
    name: "Rating",
    fn: (a, b) => {
      if (b.score === undefined) return -1;
      if (a.score === undefined) return 1;
      return b.score - a.score;
    },
  },
};

const SORT_OPTIONS = [
  { value: SORT.DISTANCE, label: SORT.DISTANCE.name },
  { value: SORT.RATING, label: SORT.RATING.name },
];

const getClubFromUrl = () => {
  const clubId = location.hash.split("#")[1];
  const newActiveClub = rawClubs.find((c) => c.id === clubId);
  return newActiveClub || null;
};

const App = () => {
  const [clubs, setClubs] = useState([]);
  const mapRef = useRef();
  const [initialLocation, setInitialLocation] = useState();
  const [activeClub, setActiveClub] = useState(getClubFromUrl());
  const [loaded, setLoaded] = useState(false);
  const [searchCenter, setSearchCenter] = useState();
  const [sortBy, setSortBy] = useState(SORT.DISTANCE);

  useLayoutEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyA-Tg-VBzTQ0sgZtJpNv43IltvDH0f7zPQ",
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      setLoaded(true);

      window.addEventListener("hashchange", () => {
        setActiveClub(getClubFromUrl());
      });
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const cachedLat = Number(window.localStorage.getItem("searchLat"));
    const cachedLng = Number(window.localStorage.getItem("searchLng"));

    let center = { lat: cachedLat, lng: cachedLng };

    if (!center.lat || !center.lng) {
      const rnd = Math.floor(Math.random() * clubs.length);
      const randomClub = clubs[rnd];
      center = { lat: randomClub.lat, lng: randomClub.lng };
    }

    getGeocode({ location: center }).then((results) => {
      const match = results[0];
      setInitialLocation(match.formatted_address);
      setSearchCenter(center);
      mapRef.current.setZoom(9);
    });
  }, [loaded, mapRef]);

  const onSearch = (placeId) => {
    getGeocode({ placeId })
      .then((results) => {
        const match = results[0];
        getLatLng(match).then((latLng) => {
          const { lat, lng } = latLng;
          setSearchCenter(latLng);
          mapRef.current.fitBounds(match.geometry.viewport);
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const sortedClubs = useMemo(() => {
    if (!searchCenter) return [];

    window.localStorage.setItem("searchLat", searchCenter.lat);
    window.localStorage.setItem("searchLng", searchCenter.lng);

    const getDist = (club) => {
      return getDistance(
        { latitude: club.lat, longitude: club.lng },
        { latitude: searchCenter.lat, longitude: searchCenter.lng }
      );
    };

    return clubs
      .map((c) => ({
        ...c,
        distance: getDist(c),
      }))
      .sort(sortBy.fn);
  }, [clubs, sortBy, searchCenter]);

  const onBoundsChange = useCallback(
    (bounds) => {
      const newClubs = rawClubs.filter((c) => {
        const inBounds = bounds.contains({ lat: c.lat, lng: c.lng });
        return inBounds;
      });
      setClubs(newClubs);
    },
    [clubs]
  );

  if (!loaded || !initialLocation) return null;

  // const sortAndFilter = {
  //   filters: [],
  //   sort: [{ nearest: searchCenter }],
  // };

  return (
    <div
      css={css({
        maxWidth: 1200,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        margin: "auto",
      })}
    >
      <div
        css={css({
          background: "var(--contentBgColor)",
          borderBottom: "10px solid var(--bgColor)",
          padding: 20,
        })}
      >
        <h1 css={css({ margin: 0 })}>Table Tennis Travelers</h1>
        <p>A guided map to find table tennis clubs wherever you go.</p>
        <br />
        {initialLocation && (
          <LocationSearch onChange={onSearch} defaultValue={initialLocation} />
        )}
      </div>
      <div css={css({ display: "flex", flex: 1, overflow: "hidden" })}>
        <div
          css={css({
            position: "relative",
            background: "var(--contentBgColor)",
            width: "50%",
            maxWidth: 450,
            padding: 20,
            borderRight: "10px solid var(--bgColor)",
          })}
        >
          <div
            css={css({
              display: "flex",
              width: "100%",
              alignItems: "center",
              paddingBottom: 10,
            })}
          >
            <label css={css({ marginRight: 5 })}>sorted by </label>
            <label css={css({ flex: 1 })}>
              <Select
                value={SORT_OPTIONS.find((s) => s.value === sortBy)}
                options={SORT_OPTIONS}
                onChange={(option) => {
                  setSortBy(option.value);
                }}
                isSearchable={false}
                styles={{
                  container: (provided, state) => ({
                    ...provided,
                    maxWidth: 200,
                  }),
                }}
              />
            </label>
          </div>
          <ClubList clubs={sortedClubs} setActiveClub={setActiveClub} />
          {activeClub && (
            <ClubDetail club={activeClub} onClose={() => setActiveClub(null)} />
          )}
        </div>
        <div css={css({ flex: 1 })}>
          <ClubMap
            mapRef={mapRef}
            center={searchCenter}
            clubs={clubs}
            activeClub={activeClub}
            setActiveClub={setActiveClub}
            onChange={onBoundsChange}
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
