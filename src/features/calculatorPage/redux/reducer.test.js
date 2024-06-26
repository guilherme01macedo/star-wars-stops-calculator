import actions from './actions';

import reducer from './reducer';

describe('calculator reducer', () => {
  it('GET STARSHIP start', () => {
    const initialState = {
      starships: {
        isLoading: null,
        isError: null,
        starships: null,
      },
    };
    const res = reducer(initialState, actions.getStarshipsStart());
    expect(res.starships.isLoading).toEqual(true);
    expect(res.starships.starships).toEqual(null);
    expect(res.starships.isError).toEqual(null);
  });

  it('SET STARSHIP', () => {
    const initialState = {
      starships: {
        isError: null,
        isLoading: true,
        starships: null,
      }
    };

    const starships = [
      {
        "name": "Scimitar",
        "model": "Star Courier",
        "manufacturer": "Republic Sienar Systems",
        "cost_in_credits": "55000000",
        "length": "26.5",
        "max_atmosphering_speed": "1180",
        "crew": "1",
        "passengers": "6",
        "cargo_capacity": "2500000",
        "consumables": "30 days",
        "hyperdrive_rating": "1.5",
        "MGLT": "unknown",
        "starship_class": "Space Transport",
        "pilots": [
          "https://swapi.dev/api/people/44/"
        ],
        "films": [
          "https://swapi.dev/api/films/4/"
        ],
        "created": "2014-12-20T09:39:56.116000Z",
        "edited": "2014-12-20T21:23:49.922000Z",
        "url": "https://swapi.dev/api/starships/41/"
      },
      {
        "name": "J-type diplomatic barge",
        "model": "J-type diplomatic barge",
        "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
        "cost_in_credits": "2000000",
        "length": "39",
        "max_atmosphering_speed": "2000",
        "crew": "5",
        "passengers": "10",
        "cargo_capacity": "unknown",
        "consumables": "1 year",
        "hyperdrive_rating": "0.7",
        "MGLT": "unknown",
        "starship_class": "Diplomatic barge",
        "pilots": [],
        "films": [
          "https://swapi.dev/api/films/5/"
        ],
        "created": "2014-12-20T11:05:51.237000Z",
        "edited": "2014-12-20T21:23:49.925000Z",
        "url": "https://swapi.dev/api/starships/43/"
      },
      {
        "name": "AA-9 Coruscant freighter",
        "model": "Botajef AA-9 Freighter-Liner",
        "manufacturer": "Botajef Shipyards",
        "cost_in_credits": "unknown",
        "length": "390",
        "max_atmosphering_speed": "unknown",
        "crew": "unknown",
        "passengers": "30000",
        "cargo_capacity": "unknown",
        "consumables": "unknown",
        "hyperdrive_rating": "unknown",
        "MGLT": "unknown",
        "starship_class": "freighter",
        "pilots": [],
        "films": [
          "https://swapi.dev/api/films/5/"
        ],
        "created": "2014-12-20T17:24:23.509000Z",
        "edited": "2014-12-20T21:23:49.928000Z",
        "url": "https://swapi.dev/api/starships/47/"
      },
      {
        "name": "Jedi starfighter",
        "model": "Delta-7 Aethersprite-class interceptor",
        "manufacturer": "Kuat Systems Engineering",
        "cost_in_credits": "180000",
        "length": "8",
        "max_atmosphering_speed": "1150",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "60",
        "consumables": "7 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "Starfighter",
        "pilots": [
          "https://swapi.dev/api/people/10/",
          "https://swapi.dev/api/people/58/"
        ],
        "films": [
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-20T17:35:23.906000Z",
        "edited": "2014-12-20T21:23:49.930000Z",
        "url": "https://swapi.dev/api/starships/48/"
      },
      {
        "name": "H-type Nubian yacht",
        "model": "H-type Nubian yacht",
        "manufacturer": "Theed Palace Space Vessel Engineering Corps",
        "cost_in_credits": "unknown",
        "length": "47.9",
        "max_atmosphering_speed": "8000",
        "crew": "4",
        "passengers": "unknown",
        "cargo_capacity": "unknown",
        "consumables": "unknown",
        "hyperdrive_rating": "0.9",
        "MGLT": "unknown",
        "starship_class": "yacht",
        "pilots": [
          "https://swapi.dev/api/people/35/"
        ],
        "films": [
          "https://swapi.dev/api/films/5/"
        ],
        "created": "2014-12-20T17:46:46.847000Z",
        "edited": "2014-12-20T21:23:49.932000Z",
        "url": "https://swapi.dev/api/starships/49/"
      },
      {
        "name": "Republic Assault ship",
        "model": "Acclamator I-class assault ship",
        "manufacturer": "Rothana Heavy Engineering",
        "cost_in_credits": "unknown",
        "length": "752",
        "max_atmosphering_speed": "unknown",
        "crew": "700",
        "passengers": "16000",
        "cargo_capacity": "11250000",
        "consumables": "2 years",
        "hyperdrive_rating": "0.6",
        "MGLT": "unknown",
        "starship_class": "assault ship",
        "pilots": [],
        "films": [
          "https://swapi.dev/api/films/5/"
        ],
        "created": "2014-12-20T18:08:42.926000Z",
        "edited": "2014-12-20T21:23:49.935000Z",
        "url": "https://swapi.dev/api/starships/52/"
      },
      {
        "name": "Solar Sailer",
        "model": "Punworcca 116-class interstellar sloop",
        "manufacturer": "Huppla Pasa Tisc Shipwrights Collective",
        "cost_in_credits": "35700",
        "length": "15.2",
        "max_atmosphering_speed": "1600",
        "crew": "3",
        "passengers": "11",
        "cargo_capacity": "240",
        "consumables": "7 days",
        "hyperdrive_rating": "1.5",
        "MGLT": "unknown",
        "starship_class": "yacht",
        "pilots": [],
        "films": [
          "https://swapi.dev/api/films/5/"
        ],
        "created": "2014-12-20T18:37:56.969000Z",
        "edited": "2014-12-20T21:23:49.937000Z",
        "url": "https://swapi.dev/api/starships/58/"
      },
      {
        "name": "Trade Federation cruiser",
        "model": "Providence-class carrier/destroyer",
        "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
        "cost_in_credits": "125000000",
        "length": "1088",
        "max_atmosphering_speed": "1050",
        "crew": "600",
        "passengers": "48247",
        "cargo_capacity": "50000000",
        "consumables": "4 years",
        "hyperdrive_rating": "1.5",
        "MGLT": "unknown",
        "starship_class": "capital ship",
        "pilots": [
          "https://swapi.dev/api/people/10/",
          "https://swapi.dev/api/people/11/"
        ],
        "films": [
          "https://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-20T19:40:21.902000Z",
        "edited": "2014-12-20T21:23:49.941000Z",
        "url": "https://swapi.dev/api/starships/59/"
      },
      {
        "name": "Theta-class T-2c shuttle",
        "model": "Theta-class T-2c shuttle",
        "manufacturer": "Cygnus Spaceworks",
        "cost_in_credits": "1000000",
        "length": "18.5",
        "max_atmosphering_speed": "2000",
        "crew": "5",
        "passengers": "16",
        "cargo_capacity": "50000",
        "consumables": "56 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "transport",
        "pilots": [],
        "films": [
          "https://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-20T19:48:40.409000Z",
        "edited": "2014-12-20T21:23:49.944000Z",
        "url": "https://swapi.dev/api/starships/61/"
      },
      {
        "name": "Republic attack cruiser",
        "model": "Senator-class Star Destroyer",
        "manufacturer": "Kuat Drive Yards, Allanteen Six shipyards",
        "cost_in_credits": "59000000",
        "length": "1137",
        "max_atmosphering_speed": "975",
        "crew": "7400",
        "passengers": "2000",
        "cargo_capacity": "20000000",
        "consumables": "2 years",
        "hyperdrive_rating": "1.0",
        "MGLT": "unknown",
        "starship_class": "star destroyer",
        "pilots": [],
        "films": [
          "https://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-20T19:52:56.232000Z",
        "edited": "2014-12-20T21:23:49.946000Z",
        "url": "https://swapi.dev/api/starships/63/"
      }
    ];
    const res = reducer(initialState, actions.setStarships(starships, false));
    expect(res.starships.isError).toEqual(false);
    expect(res.starships.starships).toEqual(starships);
    expect(res.starships.isLoading).toEqual(false);
  });

  it('SET STARSHIP ERROR', () => {
    const initialState = {
      starships: {
        isError: null,
        isLoading: true,
        starships: null,
      }
    };
    const res = reducer(initialState, actions.setStarships(null, true));
    expect(res.starships.isError).toEqual(true);
  });
});
