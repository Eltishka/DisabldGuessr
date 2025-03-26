
const points =  [
    {
      "name": "Москва",
      "latitude": 55.7558,
      "longitude": 37.6173
    },
    {
      "name": "Санкт-Петербург",
      "latitude": 59.9343,
      "longitude": 30.3351
    },
    {
      "name": "Казань",
      "latitude": 55.7961,
      "longitude": 49.1064
    },
    {
      "name": "Нижний Новгород",
      "latitude": 56.3269,
      "longitude": 44.0055
    },
    {
      "name": "Екатеринбург",
      "latitude": 56.8389,
      "longitude": 60.6057
    },
    {
      "name": "Новосибирск",
      "latitude": 55.0084,
      "longitude": 82.9357
    },
    {
      "name": "Красноярск",
      "latitude": 56.0184,
      "longitude": 92.8672
    },
    {
      "name": "Челябинск",
      "latitude": 55.1644,
      "longitude": 61.4368
    },
    {
      "name": "Самара",
      "latitude": 53.1959,
      "longitude": 50.1002
    },
    {
      "name": "Уфа",
      "latitude": 54.7351,
      "longitude": 55.9587
    },
    {
      "name": "Ростов-на-Дону",
      "latitude": 47.2225,
      "longitude": 39.7187
    },
    {
      "name": "Омск",
      "latitude": 54.9914,
      "longitude": 73.3645
    },
    {
      "name": "Краснодар",
      "latitude": 45.0355,
      "longitude": 38.9753
    },
    {
      "name": "Воронеж",
      "latitude": 51.6606,
      "longitude": 39.2006
    },
    {
      "name": "Пермь",
      "latitude": 58.0105,
      "longitude": 56.2294
    },
    {
      "name": "Волгоград",
      "latitude": 48.7194,
      "longitude": 44.5018
    },
    {
      "name": "Саратов",
      "latitude": 51.5336,
      "longitude": 46.0342
    },
    {
      "name": "Тюмень",
      "latitude": 57.1522,
      "longitude": 65.5272
    },
    {
      "name": "Тольятти",
      "latitude": 53.5078,
      "longitude": 49.4204
    },
    {
      "name": "Ижевск",
      "latitude": 56.8527,
      "longitude": 53.2115
    },
    {
      "name": "Барнаул",
      "latitude": 53.3606,
      "longitude": 83.7636
    },
    {
      "name": "Ульяновск",
      "latitude": 54.3142,
      "longitude": 48.4034
    },
    {
      "name": "Иркутск",
      "latitude": 52.2864,
      "longitude": 104.2807
    },
    {
      "name": "Хабаровск",
      "latitude": 48.4802,
      "longitude": 135.0719
    },
    {
      "name": "Ярославль",
      "latitude": 57.6261,
      "longitude": 39.8845
    },
    {
      "name": "Владивосток",
      "latitude": 43.1155,
      "longitude": 131.8855
    },
    {
      "name": "Махачкала",
      "latitude": 42.9849,
      "longitude": 47.5047
    },
    {
      "name": "Томск",
      "latitude": 56.4846,
      "longitude": 84.9476
    },
    {
      "name": "Оренбург",
      "latitude": 51.7682,
      "longitude": 55.0970
    },
    {
      "name": "Кемерово",
      "latitude": 55.3549,
      "longitude": 86.0873
    },
    {
      "name": "Новокузнецк",
      "latitude": 53.7945,
      "longitude": 87.1848
    },
    {
      "name": "Рязань",
      "latitude": 54.6294,
      "longitude": 39.7417
    },
    {
      "name": "Астрахань",
      "latitude": 46.3497,
      "longitude": 48.0408
    },
    {
      "name": "Набережные Челны",
      "latitude": 55.7436,
      "longitude": 52.3958
    },
    {
      "name": "Пенза",
      "latitude": 53.1950,
      "longitude": 45.0183
    },
    {
      "name": "Липецк",
      "latitude": 52.6088,
      "longitude": 39.5992
    },
    {
      "name": "Киров",
      "latitude": 58.6036,
      "longitude": 49.6680
    },
    {
      "name": "Чебоксары",
      "latitude": 56.1439,
      "longitude": 47.2489
    },
    {
      "name": "Тула",
      "latitude": 54.1930,
      "longitude": 37.6173
    },
    {
      "name": "Калининград",
      "latitude": 54.7104,
      "longitude": 20.4522
    },
    {
      "name": "Балашиха",
      "latitude": 55.8094,
      "longitude": 37.9581
    },
    {
      "name": "Курск",
      "latitude": 51.7304,
      "longitude": 36.1926
    },
    {
      "name": "Ставрополь",
      "latitude": 45.0445,
      "longitude": 41.9691
    },
    {
      "name": "Улан-Удэ",
      "latitude": 51.8335,
      "longitude": 107.5841
    },
    {
      "name": "Сочи",
      "latitude": 43.5855,
      "longitude": 39.7231
    },
    {
      "name": "Брянск",
      "latitude": 53.2436,
      "longitude": 34.3634
    },
    {
      "name": "Иваново",
      "latitude": 56.9972,
      "longitude": 40.9714
    },
    {
      "name": "Магнитогорск",
      "latitude": 53.4072,
      "longitude": 58.9790
    },
    {
      "name": "Тверь",
      "latitude": 56.8587,
      "longitude": 35.9176
    },
    {
      "name": "Белгород",
      "latitude": 50.5957,
      "longitude": 36.5873
    },
    {
      "name": "Киев",
      "latitude": 50.4501,
      "longitude": 30.5234
    },
    {
      "name": "Харьков",
      "latitude": 49.9935,
      "longitude": 36.2304
    },
    {
      "name": "Одесса",
      "latitude": 46.4825,
      "longitude": 30.7233
    },
    {
      "name": "Днепр",
      "latitude": 48.4647,
      "longitude": 35.0462
    },
    {
      "name": "Донецк",
      "latitude": 48.0159,
      "longitude": 37.8028
    },
    {
      "name": "Запорожье",
      "latitude": 47.8388,
      "longitude": 35.1396
    },
    {
      "name": "Львов",
      "latitude": 49.8397,
      "longitude": 24.0297
    },
    {
      "name": "Кривой Рог",
      "latitude": 47.9105,
      "longitude": 33.3918
    },
    {
      "name": "Николаев",
      "latitude": 46.9750,
      "longitude": 31.9946
    },
    {
      "name": "Мариуполь",
      "latitude": 47.0971,
      "longitude": 37.5434
    },
    {
      "name": "Минск",
      "latitude": 53.9045,
      "longitude": 27.5615
    },
    {
      "name": "Гомель",
      "latitude": 52.4242,
      "longitude": 31.0143
    },
    {
      "name": "Могилёв",
      "latitude": 53.9007,
      "longitude": 30.3314
    },
    {
      "name": "Витебск",
      "latitude": 55.1848,
      "longitude": 30.2016
    },
    {
      "name": "Гродно",
      "latitude": 53.6694,
      "longitude": 23.8131
    },
    {
      "name": "Алматы",
      "latitude": 43.2389,
      "longitude": 76.8897
    },
    {
      "name": "Нур-Султан (Астана)",
      "latitude": 51.1282,
      "longitude": 71.4304
    },
    {
      "name": "Шымкент",
      "latitude": 42.3155,
      "longitude": 69.5869
    },
    {
      "name": "Караганда",
      "latitude": 49.8047,
      "longitude": 73.1096
    },
    {
      "name": "Актобе",
      "latitude": 50.2839,
      "longitude": 57.1667
    },
    {
      "name": "Стамбул (Турция)",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    {
      "name": "Анкара (Турция)",
      "latitude": 39.9334,
      "longitude": 32.8597
    },
    {
      "name": "Тель-Авив (Израиль)",
      "latitude": 32.0853,
      "longitude": 34.7818
    },
    {
      "name": "Ереван (Армения)",
      "latitude": 40.1792,
      "longitude": 44.4991
    },
    {
      "name": "Тбилиси (Грузия)",
      "latitude": 41.7151,
      "longitude": 44.8271
    },
    {
      "name": "Баку (Азербайджан)",
      "latitude": 40.4093,
      "longitude": 49.8671
    },
    {
      "name": "Прага (Чехия)",
      "latitude": 50.0755,
      "longitude": 14.4378
    },
    {
      "name": "Будапешт (Венгрия)",
      "latitude": 47.4979,
      "longitude": 19.0402
    },
    {
      "name": "Варшава (Польша)",
      "latitude": 52.2297,
      "longitude": 21.0122
    },
    {
      "name": "Белград (Сербия)",
      "latitude": 44.7866,
      "longitude": 20.4489
    },
    {
      "name": "София (Болгария)",
      "latitude": 42.6977,
      "longitude": 23.3219
    },
    {
      "name": "Бухарест (Румыния)",
      "latitude": 44.4268,
      "longitude": 26.1025
    },
    {
      "name": "Хельсинки (Финляндия)",
      "latitude": 60.1699,
      "longitude": 24.9384
    },
    {
      "name": "Рига (Латвия)",
      "latitude": 56.9496,
      "longitude": 24.1052
    },
    {
      "name": "Таллин (Эстония)",
      "latitude": 59.4370,
      "longitude": 24.7536
    },
    {
      "name": "Вильнюс (Литва)",
      "latitude": 54.6872,
      "longitude": 25.2797
    },
    {
      "name": "Кишинёв (Молдова)",
      "latitude": 47.0105,
      "longitude": 28.8638
    },
    {
      "name": "Братислава (Словакия)",
      "latitude": 48.1486,
      "longitude": 17.1077
    },
    {
      "name": "Любляна (Словения)",
      "latitude": 46.0569,
      "longitude": 14.5058
    },
    {
      "name": "Загреб (Хорватия)",
      "latitude": 45.8150,
      "longitude": 15.9819
    },
    {
      "name": "Севастополь",
      "latitude": 44.6167,
      "longitude": 33.5254
    },
    {
      "name": "Симферополь",
      "latitude": 44.9521,
      "longitude": 34.1024
    },
    {
      "name": "Архангельск",
      "latitude": 64.5393,
      "longitude": 40.5187
    },
    {
      "name": "Владикавказ",
      "latitude": 43.0246,
      "longitude": 44.6818
    },
    {
      "name": "Грозный",
      "latitude": 43.3180,
      "longitude": 45.6982
    },
    {
      "name": "Йошкар-Ола",
      "latitude": 56.6344,
      "longitude": 47.8999
    },
    {
      "name": "Саранск",
      "latitude": 54.1874,
      "longitude": 45.1839
    },
    {
      "name": "Смоленск",
      "latitude": 54.7826,
      "longitude": 32.0453
    },
    {
      "name": "Чита",
      "latitude": 52.0339,
      "longitude": 113.4994
    },
    {
      "name": "Петрозаводск",
      "latitude": 61.7850,
      "longitude": 34.3469
    }
  ]