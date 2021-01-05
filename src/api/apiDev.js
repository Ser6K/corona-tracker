const summary = {
  NewConfirmed: 100282,
  TotalConfirmed: 1162857,
  NewDeaths: 5658,
  TotalDeaths: 63263,
  NewRecovered: 15405,
  TotalRecovered: 230845,
}

const countriesList = [
  {
    Country: 'Bahrain',
    CountryCode: 'BH',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 388,
    NewDeaths: 1,
    NewRecovered: 369,
    Slug: 'bahrain',
    TotalConfirmed: 8802,
    TotalDeaths: 13,
    TotalRecovered: 4465,
  },
  {
    Country: 'Bangladesh',
    CountryCode: 'BD',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 1873,
    NewDeaths: 20,
    NewRecovered: 296,
    Slug: 'bangladesh',
    TotalConfirmed: 32078,
    TotalDeaths: 452,
    TotalRecovered: 6486,
  },
  {
    Country: 'Barbados',
    CountryCode: 'BB',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 2,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'barbados',
    TotalConfirmed: 92,
    TotalDeaths: 7,
    TotalRecovered: 70,
  },
  {
    Country: 'Belarus',
    CountryCode: 'BY',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 941,
    NewDeaths: 4,
    NewRecovered: 695,
    Slug: 'belarus',
    TotalConfirmed: 35244,
    TotalDeaths: 194,
    TotalRecovered: 13528,
  },
  {
    Country: 'Belgium',
    CountryCode: 'BE',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 299,
    NewDeaths: 25,
    NewRecovered: 32,
    Slug: 'belgium',
    TotalConfirmed: 56810,
    TotalDeaths: 9237,
    TotalRecovered: 15155,
  },
  {
    Country: 'Belize',
    CountryCode: 'BZ',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'belize',
    TotalConfirmed: 18,
    TotalDeaths: 2,
    TotalRecovered: 16,
  },
  {
    Country: 'Benin',
    CountryCode: 'BJ',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'benin',
    TotalConfirmed: 135,
    TotalDeaths: 3,
    TotalRecovered: 61,
  },
  {
    Country: 'Bhutan',
    CountryCode: 'BT',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 3,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'bhutan',
    TotalConfirmed: 24,
    TotalDeaths: 0,
    TotalRecovered: 6,
  },
  {
    Country: 'Bolivia',
    CountryCode: 'BO',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 336,
    NewDeaths: 10,
    NewRecovered: 34,
    Slug: 'bolivia',
    TotalConfirmed: 5915,
    TotalDeaths: 240,
    TotalRecovered: 609,
  },
  {
    Country: 'Bosnia and Herzegovina',
    CountryCode: 'BA',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 19,
    NewDeaths: 0,
    NewRecovered: 48,
    Slug: 'bosnia-and-herzegovina',
    TotalConfirmed: 2391,
    TotalDeaths: 141,
    TotalRecovered: 1662,
  },
  {
    Country: 'Botswana',
    CountryCode: 'BW',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'botswana',
    TotalConfirmed: 30,
    TotalDeaths: 1,
    TotalRecovered: 19,
  },
  {
    Country: 'Brazil',
    CountryCode: 'BR',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 16508,
    NewDeaths: 965,
    NewRecovered: 7157,
    Slug: 'brazil',
    TotalConfirmed: 347398,
    TotalDeaths: 22013,
    TotalRecovered: 142587,
  },
  {
    Country: 'Brunei Darussalam',
    CountryCode: 'BN',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'brunei',
    TotalConfirmed: 141,
    TotalDeaths: 1,
    TotalRecovered: 136,
  },
  {
    Country: 'Bulgaria',
    CountryCode: 'BG',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 36,
    NewDeaths: 1,
    NewRecovered: 39,
    Slug: 'bulgaria',
    TotalConfirmed: 2408,
    TotalDeaths: 126,
    TotalRecovered: 808,
  },
  {
    Country: 'Burkina Faso',
    CountryCode: 'BF',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'burkina-faso',
    TotalConfirmed: 814,
    TotalDeaths: 52,
    TotalRecovered: 672,
  },
  {
    Country: 'Burundi',
    CountryCode: 'BI',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'burundi',
    TotalConfirmed: 42,
    TotalDeaths: 1,
    TotalRecovered: 20,
  },
  {
    Country: 'Cambodia',
    CountryCode: 'KH',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 1,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'cambodia',
    TotalConfirmed: 124,
    TotalDeaths: 0,
    TotalRecovered: 122,
  },
  {
    Country: 'Cameroon',
    CountryCode: 'CM',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    Slug: 'cameroon',
    TotalConfirmed: 4400,
    TotalDeaths: 159,
    TotalRecovered: 1822,
  },
  {
    Country: 'Canada',
    CountryCode: 'CA',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 2408,
    NewDeaths: 212,
    NewRecovered: 710,
    Slug: 'canada',
    TotalConfirmed: 170300,
    TotalDeaths: 12930,
    TotalRecovered: 43318,
  },
  {
    Country: 'Cape Verde',
    CountryCode: 'CV',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 9,
    NewDeaths: 0,
    NewRecovered: 47,
    Slug: 'cape-verde',
    TotalConfirmed: 371,
    TotalDeaths: 3,
    TotalRecovered: 142,
  },
  {
    Country: 'Central African Republic',
    CountryCode: 'CF',
    Date: '2020-05-24T08:47:59Z',
    NewConfirmed: 73,
    NewDeaths: 1,
    NewRecovered: 0,
    Slug: 'central-african-republic',
    TotalConfirmed: 552,
    TotalDeaths: 1,
    TotalRecovered: 18,
  },
]

const country = [
  {
    Country: 'Denmark',
    CountryCode: '',
    Province: '',
    City: '',
    CityCode: '',
    Lat: '0',
    Lon: '0',
    Confirmed: 12393,
    Deaths: 597,
    Recovered: 11268,
    Active: 528,
    Date: '2020-06-14T00:00:00Z',
  },
  {
    Country: 'Denmark',
    CountryCode: '',
    Province: '',
    City: '',
    CityCode: '',
    Lat: '0',
    Lon: '0',
    Confirmed: 12417,
    Deaths: 598,
    Recovered: 11290,
    Active: 529,
    Date: '2020-06-15T00:00:00Z',
  },
  {
    Country: 'Denmark',
    CountryCode: '',
    Province: '',
    City: '',
    CityCode: '',
    Lat: '0',
    Lon: '0',
    Confirmed: 12450,
    Deaths: 598,
    Recovered: 11325,
    Active: 527,
    Date: '2020-06-16T00:00:00Z',
  },
  {
    Country: 'Denmark',
    CountryCode: '',
    Province: '',
    City: '',
    CityCode: '',
    Lat: '0',
    Lon: '0',
    Confirmed: 12494,
    Deaths: 598,
    Recovered: 11385,
    Active: 511,
    Date: '2020-06-17T00:00:00Z',
  },
  {
    Country: 'Denmark',
    CountryCode: '',
    Province: '',
    City: '',
    CityCode: '',
    Lat: '0',
    Lon: '0',
    Confirmed: 12544,
    Deaths: 600,
    Recovered: 11442,
    Active: 502,
    Date: '2020-06-18T00:00:00Z',
  },
  {
    Country: 'Denmark',
    CountryCode: '',
    Province: '',
    City: '',
    CityCode: '',
    Lat: '0',
    Lon: '0',
    Confirmed: 12591,
    Deaths: 600,
    Recovered: 11482,
    Active: 509,
    Date: '2020-06-19T00:00:00Z',
  },
]

const timeout = 700

export const getSummary = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const data = { data: { Global: summary, Countries: countriesList } }

      resolve(data)
    }, timeout)
  })

export const getCountry = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const data = { data: country }

      resolve(data)
    }, timeout)
  })
