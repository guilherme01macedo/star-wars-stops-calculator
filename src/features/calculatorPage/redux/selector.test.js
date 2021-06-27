import selectors from './selectors';

describe('Chart data transform test', () => {
  it('transform the data for the line chart', () => {
    const initialState = {
      mglt: "1000000",
      starships: {
        isLoading: null,
        isError: null,
        starships: [
          {
            "name": "CR90 corvette",
            "model": "CR90 corvette",
            "manufacturer": "Corellian Engineering Corporation",
            "cost_in_credits": "3500000",
            "length": "150",
            "max_atmosphering_speed": "950",
            "crew": "30-165",
            "passengers": "600",
            "cargo_capacity": "3000000",
            "consumables": "1 year",
            "hyperdrive_rating": "2.0",
            "MGLT": "60",
            "starship_class": "corvette",
            "pilots": [],
            "films": [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/3/",
              "https://swapi.dev/api/films/6/"
            ],
            "created": "2014-12-10T14:20:33.369000Z",
            "edited": "2014-12-20T21:23:49.867000Z",
            "url": "https://swapi.dev/api/starships/2/"
          },
          {
            "name": "Star Destroyer",
            "model": "Imperial I-class Star Destroyer",
            "manufacturer": "Kuat Drive Yards",
            "cost_in_credits": "150000000",
            "length": "1,600",
            "max_atmosphering_speed": "975",
            "crew": "47,060",
            "passengers": "n/a",
            "cargo_capacity": "36000000",
            "consumables": "2 years",
            "hyperdrive_rating": "2.0",
            "MGLT": "60",
            "starship_class": "Star Destroyer",
            "pilots": [],
            "films": [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/2/",
              "https://swapi.dev/api/films/3/"
            ],
            "created": "2014-12-10T15:08:19.848000Z",
            "edited": "2014-12-20T21:23:49.870000Z",
            "url": "https://swapi.dev/api/starships/3/"
          },
          {
            "name": "Sentinel-class landing craft",
            "model": "Sentinel-class landing craft",
            "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
            "cost_in_credits": "240000",
            "length": "38",
            "max_atmosphering_speed": "1000",
            "crew": "5",
            "passengers": "75",
            "cargo_capacity": "180000",
            "consumables": "1 month",
            "hyperdrive_rating": "1.0",
            "MGLT": "70",
            "starship_class": "landing craft",
            "pilots": [],
            "films": [
              "https://swapi.dev/api/films/1/"
            ],
            "created": "2014-12-10T15:48:00.586000Z",
            "edited": "2014-12-20T21:23:49.873000Z",
            "url": "https://swapi.dev/api/starships/5/"
          }
        ],
      },
    };
    const transformedState = [
        {
          totalDuration: "694 days",
          stops: 1,
          "name": "CR90 corvette",
          "model": "CR90 corvette",
          "manufacturer": "Corellian Engineering Corporation",
          "cost_in_credits": "3500000",
          "length": "150",
          "max_atmosphering_speed": "950",
          "crew": "30-165",
          "passengers": "600",
          "cargo_capacity": "3000000",
          "consumables": "1 year",
          "hyperdrive_rating": "2.0",
          "MGLT": "60",
          "starship_class": "corvette",
          "pilots": [],
          "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
          ],
          "created": "2014-12-10T14:20:33.369000Z",
          "edited": "2014-12-20T21:23:49.867000Z",
          "url": "https://swapi.dev/api/starships/2/"
        },
        {
          totalDuration: "694 days",
          stops: 0,
          "name": "Star Destroyer",
          "model": "Imperial I-class Star Destroyer",
          "manufacturer": "Kuat Drive Yards",
          "cost_in_credits": "150000000",
          "length": "1,600",
          "max_atmosphering_speed": "975",
          "crew": "47,060",
          "passengers": "n/a",
          "cargo_capacity": "36000000",
          "consumables": "2 years",
          "hyperdrive_rating": "2.0",
          "MGLT": "60",
          "starship_class": "Star Destroyer",
          "pilots": [],
          "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/"
          ],
          "created": "2014-12-10T15:08:19.848000Z",
          "edited": "2014-12-20T21:23:49.870000Z",
          "url": "https://swapi.dev/api/starships/3/"
        },
        {
          totalDuration: "595 days",
          stops: 19,
          "name": "Sentinel-class landing craft",
          "model": "Sentinel-class landing craft",
          "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
          "cost_in_credits": "240000",
          "length": "38",
          "max_atmosphering_speed": "1000",
          "crew": "5",
          "passengers": "75",
          "cargo_capacity": "180000",
          "consumables": "1 month",
          "hyperdrive_rating": "1.0",
          "MGLT": "70",
          "starship_class": "landing craft",
          "pilots": [],
          "films": [
            "https://swapi.dev/api/films/1/"
          ],
          "created": "2014-12-10T15:48:00.586000Z",
          "edited": "2014-12-20T21:23:49.873000Z",
          "url": "https://swapi.dev/api/starships/5/"
        }
      ];

    const result = selectors.getStarships(initialState);
    expect(result).toEqual(transformedState);
  });
});
